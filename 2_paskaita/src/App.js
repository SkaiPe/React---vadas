import Car from "./components/Car";
import FuncCar from "./components/FuncCar";
import FuncBestCar from "./components/FuncBestCar";
// import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div>
      <h2>Klasės</h2>
      <Car />
      <br />
      <br />
      <br />
      <h2>Funkcija su vienu steitu</h2>
      <FuncCar />
      <br />
      <br />
      <br />
      <h2>
        Funkcija su priskirtuoju reikalingam objektui steitu.
        <br /> GEROJI PRAKTIKA
      </h2>
      <FuncBestCar />
    </div>
  );
}

export default App;
