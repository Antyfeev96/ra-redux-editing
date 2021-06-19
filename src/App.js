import "./App.css";
import AddItem from "./Components/AddItem/AddItem";
import ItemsList from "./Components/ItemsList/ItemsList";

function App() {
  return (
    <div className="app">
      <AddItem edited />
      <ItemsList setEdited />
    </div>
  );
}

export default App;
