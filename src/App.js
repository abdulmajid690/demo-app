import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Row className="w-50">
        <Navbar></Navbar>
        <Button as={Col} variant="primary">
          hello #1
        </Button>
        <Button as={Col} variant="primary">
          hello #2
        </Button>
        <Button as={Col} variant="primary">
          hello #3
        </Button>
      </Row>
    </div>
  );
}

export default App;
