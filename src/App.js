// import logo from './logo.svg';
import './App.css';
import Tab from './components/Tabs/Tab/Tab';
import Tabs from './components/Tabs/Tabs';





function App() {
  return (
    <div >
      <header >
       Hello...From React App
      </header>
      <Tabs>
        <Tab title="tab one">
          <p> Panel One</p>
        </Tab>
         <Tab title="tab two">
          <p> Panel Two</p>
        </Tab>
         <Tab title="tab three">
          <p> Panel Three</p>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
