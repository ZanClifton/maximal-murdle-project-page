import { Link } from "react-router-dom";

export const Team = ({ setProfile }) => {
  return (
    <>
      <header className="App-header">Meet The Team</header>
      <div className="Maximal-nav">
        <button
          className="Maximal-button"
          value={"Diana"}
          onClick={(event) => setProfile(event.target.value)}
        >
          Diana
        </button>

        <button
          className="Maximal-button"
          value={"Gareth"}
          onClick={(event) => setProfile(event.target.value)}
        >
          Gareth
        </button>

        <button
          className="Maximal-button"
          value={"Tomasz"}
          onClick={(event) => setProfile(event.target.value)}
        >
          Tomasz
        </button>

        <button
          className="Maximal-button"
          value={"Yuri"}
          onClick={(event) => setProfile(event.target.value)}
        >
          Yuri
        </button>

        <button
          className="Maximal-button"
          value={"Zan"}
          onClick={(event) => setProfile(event.target.value)}
        >
          Zan
        </button>
      </div>
    </>
  );
};
