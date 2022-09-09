import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greeter from './Greeter';
import Greeting from './Greeting';
import EventHandlingExample from './EventHandlingExample';
import React from 'react';
import NumbersList from './NumbersList';
import ReactLists from './ReactLists';
import ClassComponent from './ClassComponent';
import ReactUseState from './ReactUseState';
import ReactUseStateForm from './ReactUseStateForm';
import UseEffectExample from './UseEffectExample';

// class App extends React.Component {
function App() {
  // let reactjs = "reactjs";

  const Movies = [
    {id: 123, name: "movie1"},
    {id: 456, name: "movie2"},
    {id: 789, name: "movie3"},
];

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
      {/* <EventHandlingExample /> */}
      {/* <NumbersList numbers={[1,2,3,4,5]}/> */}
      {/* <ReactLists movies={Movies}/> */}
      {/* <ClassComponent /> */}
      {/* <ReactUseState /> */}
      {/* <ReactUseStateForm /> */}
      <UseEffectExample />
      </header>
    </div>
  );
}

export default App;
