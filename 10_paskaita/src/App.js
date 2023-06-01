import "./App.css";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Photos from "./components/Photos/Photos";

function App() {
  return (
    <div>
      <Hero title="Title" subtitle="Some about text in two lines" />
      <Button title="Button" variant="button" />
      <Photos />
    </div>
  );
}

export default App;
