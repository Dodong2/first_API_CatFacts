import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Catfact from "./components/pages/Catfact";
import Intro from "./components/pages/Intro";
function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Intro/>}/>
          <Route path="/Catfact" element={<Catfact />} />
        </Routes>
      </Router>
  );
}

export default App;
