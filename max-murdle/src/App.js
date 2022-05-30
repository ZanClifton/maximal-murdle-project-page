import "./styles/App.css";
import { Header } from "./components/Header";
import { Video } from "./components/Video";
import { Overview } from "./components/Overview";
import { Tech } from "./components/Tech";

function App() {
  return (
    <>
      <Header />
      <Video />
      <Overview />
      <Tech />
    </>
  );
}

export default App;
