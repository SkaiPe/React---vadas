// importas ra6omas viršuje
import FuncButton from "./FuncButton";
import "./App.css";

//apibrėžiame komponento pavadinimą.Visada didžiąja raidefunction App() {
//geroji praktika: failo pavadinimas toks kaip komponento
function App {
  const name = "Skaidre";
  function getName(){
    return "Ona";
  }
  const getSurname(){
    return "Juokutis";
  };
  const surname = getSurname();
  return (
     <div>
       <h1>Skaidre</h1>
       <h2>{name}</h2>
       <h2>{getName()}</h2>
       <h2>{getSurname()}</h2>
       <h2>{surname}</h2>
       <FuncButton title="Click me" />
       <FuncButton title="Spausk mane" />
       <FuncButton title="Čia nespausk"/>
    </div>
  );
}



export default App;
