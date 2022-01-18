import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/:pokemonName" exact element={<Pokemon />}/>
      </Routes>
    </Router>
  );
}

export default App;
