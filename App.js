import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import AddProductForm from "./components/AddProductForm/AddProductForm";

const App = () => {
  return (
    <div className="app-container no-select">
      <h1>MiniFlix</h1>
      <AddProductForm />
      <ProductList />
    </div>
  );
};

export default App;
