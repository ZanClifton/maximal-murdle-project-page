import { Link } from "react-router-dom";

export const Team = () => {
  return (
    <>
      <header className="App-header">Meet The Team</header>
      <div className="Maximal-nav">
        <Link to="/diana">
          <button className="Maximal-button">Diana</button>
        </Link>
        <Link to="/gareth">
          <button className="Maximal-button">Gareth</button>
        </Link>
        <Link to="/tomasz">
          <button className="Maximal-button">Tomasz</button>
        </Link>
        <Link to="/yuri">
          <button className="Maximal-button">Yuri</button>
        </Link>
        <Link to="/zan">
          <button className="Maximal-button">Zan</button>
        </Link>
      </div>
    </>
  );
};
