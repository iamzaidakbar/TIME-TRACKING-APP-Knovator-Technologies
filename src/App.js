import './App.css';
import Heading from "./components/Heading/heading";
import ApiState from "./context/apiState";
import Container from "./components/Container/container";

function App() {
  return (
    <div className="App container">
       <ApiState>
           <Heading text={"Time Tracking Application"}/>
           <Container/>
       </ApiState>
    </div>
  );
}

export default App;
