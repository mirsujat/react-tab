// import logo from './logo.svg';
import './App.css';
import Tab from './components/Tabs/Tab/tab_component';
import Tabs from './components/Tabs/tabs_component';



function App() {
  return (
    <div >
      <header >
       Hello...From React App
      </header>
      <Tabs>
        <Tab title="tab one">
          <h1>Panel One</h1>
        </Tab>
         <Tab title="tab two">
          <h1>Panel Two</h1>
        </Tab>
         <Tab title="tab three">
          <h1>Panel Three</h1>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
