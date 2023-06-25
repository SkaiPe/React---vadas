import Alert from "./components/Alert/MyComponent";
import ProductsTable from "./components/ProductsTable";
import UsersTable from "./components/UserTable";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div
      style={{
        maxWidth: "700px",
        display: "flex",
        flexDirection: "column",
        gap: "5em",
        margin: "1em",
      }}
    >
      <div>
        <h1> Accordion Example</h1>
        <Accordion />
      </div>
      <Alert />
      <UsersTable />
      <ProductsTable />
    </div>
  );
}

export default App;
