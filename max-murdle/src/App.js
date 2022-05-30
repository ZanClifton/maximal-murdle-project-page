import "./styles/App.css";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";
import { Tech } from "./components/Tech";

function App() {
  return (
    <>
      <Header />
      <Overview />
      <Tech />
    </>
  );
}

export default App;
