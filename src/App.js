//import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Declarative from "./Declarative";
import Components from "./Components";
import SingleWay from "./SingleWay";
import JSX from "./JSX";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <h1 class="cardTitle">Say hello to ReactJS</h1>
        <p class="cardP">
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button id="butt">Awesome!</button>

      </div>
      <div className="FourIcons">
        <Declarative />
        <Components />
        <SingleWay />
        <JSX />
      </div>
    </div>
  );
}

export default App;
