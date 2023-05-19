// importai viršuje
import FuncButton from "./components/FuncButton";
import FuncDiv from "./components/FuncDiv";
import ClassButton from "./components/ClassButton";
import ClassDiv from "./components/ClassDiv";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Products from "./components/Products";
import "./App.css";

// apibrėžiam komponento pavadinimą, visada didžioji raidė.
// geroji praktika: Failo pavadinimas toks pat kaip komponento pavadinimas
function App() {
  const name = "Skaidre";
  function getName() {
    return "Skaika";
  }
  const getSurname = () => "Plepute";
  const surname = getSurname();
  return (
    <div>
      <div>
        <h1>PETRAVIČIŲ KLANAS</h1>
        <h2>{name}</h2>
        <h2>{getName()}</h2>
        <h2>{getSurname()}</h2>
        <h2>{surname}</h2>
        <FuncButton title="Click me" />
        <FuncButton title="Spausk mane" />
      </div>
      <div>
        <FuncButton title="Cia nespausti" />
        <FuncDiv />
      </div>
      <div>
        <ClassButton title="Click HERE!" />
        <ClassDiv title="Click HERE!" />
      </div>
      <div>
        <Greeting name="Skaidre" />
        <Greeting />
      </div>
      <div>
        <Card
          ImageUrl="https://macrogamta.lt//sites/default/files/ad_photos/Vikrusis%20drie%C5%BEas%20-%20Lacerta%20agilis_2020-09-02.jpg"
          title="Lizard"
          subtitle="Green Lizard (Lacerta bilineata) This stunning,
          brightly coloured lizard is native to the Channel Islands and has been
          introduced to the UK mainland."
        />
      </div>
      <div>
        <Avatar name="Skaidre Petravič" />
        <Avatar name="Ignas Petr" />
        <Avatar name="Audrius Petrav" />
      </div>
      <Products />
    </div>
  );
}

// exportuojam, kad galėtume importuoti kitame faile
export default App;
