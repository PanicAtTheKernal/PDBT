type userData = {
    username: string,
    firstName: string,
    lastName: string
}

interface IAPIHandler {
    getToken() : string;
    login(username: string, password: string): void;
    postRoute(route:string, data:object): Promise<any>;
    getRoute(route:string): Promise<any>;
    getUserId() : number;
}

interface IUserHandler {
    getUsername(): string;
    getFirstName(): string;
    getLastName(): string;
}

export class APIHandler implements IAPIHandler {
    token: string;
    refreshToken: string;
    userId: number;
    url: string = "https://localhost:7128/api/"

    constructor() {
        this.token = "";
        this.refreshToken = "";
        this.userId = 0;
    }

    public getUserId(): number {
        return this.userId;
    }

    public getToken(): string {
        return this.token;
    }

    public async login(username: string, password: string): Promise<void> {
        this.postData(`${this.url}User/login`, {
            email: username,
            password: password
        })
            .then((data) => {
                this.token = data as string;
            })
    }

    public async postRoute(route: string, data: object): Promise<any> {
        return await this.postData(`${this.url}${route}`, data);
    }
    public async getRoute(route: string): Promise<any> {
        return await this.getData(`${this.url}${route}`);
    }

    private async getData(url: string ,text: boolean = false) {
        const response = await fetch(url, {
            method: 'GET',
        });

        if (text) return response.text();

        return response.json;
    }

    private async postData(url: string , data: object, text: boolean = false) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (text) return response.text();
        
        return response.json;
    }
}

class UserHandler implements IUserHandler {
    user: userData;
    readonly defaultUser: userData;
    readonly api: IAPIHandler;

    constructor(api: IAPIHandler) {
        this.defaultUser = {
            username: "Default",
            firstName: "John",
            lastName: "Doe",
        }
        this.user = {
            username: "Default",
            firstName: "John",
            lastName: "Doe",
        }
        this.api = api;
    }

    public getFirstName(): string {
        this.setUserData();
        return this.user.firstName;
    }

    public getLastName(): string {
        this.setUserData();
        return this.user.lastName;
    }

    public getUsername(): string {
        this.setUserData();
        return this.user.username;
    }

    private async setUserData(): Promise<void> {
        // Reduces the amount calls to the API
        if (this.user !== this.defaultUser) {
            let result = await this.api.getRoute(`User/${this.api.getUserId()}`);
            console.log(typeof (result))
            this.user = {
                username: result["username"],
                firstName: result["firstName"],
                lastName: result["lastName"]
            }
        }
    }
}

export const API = new APIHandler();
export const USERAPI = new UserHandler(API);
