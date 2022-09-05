import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greeter from './Greeter';
import Greeting from './Greeting';
import EventHandlingExample from './EventHandlingExample';

function App() {
  // let reactjs = "reactjs";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> react session.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      {/* <Welcome/>
      <Welcome/>
      <Welcome/>
      <Welcome/>
      <Welcome/> */}
      {/* <Greeter name="reactjs" age={31} showNav />
      <Greeter name="javascript"/> */}
      {/* <Greeting isLoggedIn="false" isLogging/> */}
      <EventHandlingExample />
      </header>
    </div>
  );
}

export default App;
