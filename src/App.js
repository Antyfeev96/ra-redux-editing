import "./App.css";
import Form from "./Components/Form/Form";
import ListTasks from "./Components/List/List";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <div className='app'>
        <Form />
        <ListTasks />
      </div>
    </Container>
  );
}

export default App;
