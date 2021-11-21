// import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tabs/Tab/Tab';




function App() {
  return (
    <div >
      <header >
       Hello...From React App
      </header>
     <Tabs>
       <Tab title="Tab One">
         <h1>Panel One</h1>
       </Tab>
       <Tab title="Tab Two">
         <h1>Panel Two</h1>
       </Tab>
       <Tab title="Tab Three">
         <h1>Panel Three</h1>
       </Tab>
     </Tabs>
    </div>
  );
}

export default App;
