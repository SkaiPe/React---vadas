import "./App.css";
import Product from "./components/Product/Product";

function App() {
  return (
    <div>
      <Product
        image="golf.png"
        title="VW Golf ktūt tačka"
        price={1900.99}
        description="Važiuok ir džiaukis"
        availability="In Stock"
        category="Electronics"
      />
    </div>
  );
}

export default App;
