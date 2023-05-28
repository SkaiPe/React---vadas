import "./App.css";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Reflection from "./components/Reflection/Reflection";

function App() {
  return (
    <>
      <div>
        <Hero title="MANO VEIKLOS" subtitle="Ką aš noriu veikti?" />
      </div>
      <div className="mg-t-30 flex-box">
        <Button title="Pažintinė veikla" variant="pazint" />
        <Button title="Orientacinė veikla" variant="orientac" />
        <Button title="Komunikacinė veikla" variant="komunikac" />
        <Button title="Dailė/Menai" variant="daile" />
      </div>
      <hr />
      <div className="mg-t-30 flex-box">
        <Reflection />
      </div>
    </>
  );
}

export default App;
