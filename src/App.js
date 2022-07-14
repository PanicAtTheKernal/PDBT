import './App.css';
import './sidebar';
import Sidebar from './sidebar';
import Content from './content';

function App() {
  return (
    <div id='wrapper'>
      <Sidebar ></Sidebar>
      <Content ></Content>
    </div>
  );
}

export default App;
