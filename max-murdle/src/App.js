import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";
import { Tech } from "./components/Tech";
import { Nav } from "./components/Nav";
import { Maximal } from "./components/Maximal";
import { Diana } from "./components/Diana";
import { Gareth } from "./components/Gareth";
import { Tomasz } from "./components/Tomasz";
import { Yuri } from "./components/Yuri";
import { Zan } from "./components/Zan";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/maximal" element={<Maximal />} />
        <Route path="/diana" element={<Diana />} />
        <Route path="/gareth" element={<Gareth />} />
        <Route path="/tomasz" element={<Tomasz />} />
        <Route path="/yuri" element={<Yuri />} />
        <Route path="/zan" element={<Zan />} />
      </Routes>
    </div>
  );
}

export default App;
