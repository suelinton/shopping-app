import { BrowserRouter } from "react-router-dom";
import { ProvideCart } from "./hooks/useCart";
import { Endpoints } from "./routes";

function App() {
  return (
    <div className="App">
      <ProvideCart>
        <BrowserRouter>
          <Endpoints />
        </BrowserRouter>
      </ProvideCart>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
