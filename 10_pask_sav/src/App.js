import "./App.css";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Hero />
      <div className="mainDiv">
        <div className="introDiv">
          <p className="bigger">Portfolio</p>
          <p>Tai smagiausi įspūdžiai iš mano kelionės</p>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
