import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";
import { Tech } from "./components/Tech";
import { Nav } from "./components/Nav";
import { Maximal } from "./components/Maximal";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/maximal" element={<Maximal />} />
      </Routes>
    </>
  );
}

export default App;
