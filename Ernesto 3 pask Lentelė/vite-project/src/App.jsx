import Alert from "./components/Alert/Alert";
import ProductsTable from "./components/ProductsTable";
import UsersTable from "./components/UserTable";
import {PALETTE} from "./shared/theme/constants

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
      <Alert
       color ={PALETTE.primary}
       text="A simple primary alert-check it out!"
       />
       <Alert
       color ={PALETTE.secondary}
       text="A simple secondary alert-check it out!"
       />
       <Alert
       color ={PALETTE.success}
       text="A simple success alert-check it out!"
       />
       <Alert
       color ={PALETTE.danger}
       text="A simple danger alert-check it out!"
       />
       <Alert
       color ={PALETTE.warning}
       text="A simple warning alert-check it out!"
       />
      </div>  
      <Alert text="A simple primary alert-check it out">
        <Alert text="A simple primary alert-check it out">
          variant="secondary">
        </Alert>
      </Alert>
      <UsersTable />
      <ProductsTable />
    </div>
  );
}

export default App;
