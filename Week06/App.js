import Welcome from "./Welcome";
import Counter from "./Counter";
import FormDemo from "./FormDemo";
import RefDemo from "./RefDemo";
import ListDemo from "./ListDemo";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <h1>Easy Task 6</h1>

      {/* Navigation */}
      <Link to="/">Home</Link> | <Link to="/about">About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Welcome name="Riya" />
      <Counter />
      <FormDemo />
      <RefDemo />
      <ListDemo />
    </BrowserRouter>
  );
}

export default App;
