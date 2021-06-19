import { useState } from "react";
import "./App.css";
import AddItem from "./Components/AddItem/AddItem";
import ItemsList from "./Components/ItemsList/ItemsList";

function App() {
  const [edited, setEdited] = useState(false)
  return (
    <div className="app">
      <AddItem edited />
      <ItemsList setEdited />
    </div>
  );
}

export default App;
