import tomasz from "../images/Tomasz.jpeg";
import { Team } from "./Team";

export const Tomasz = () => {
  return (
    <div className="Maximal-container">
      <Team />
      <div>
        <img src={tomasz} className="photo" alt="Tomasz Pikniczka" />
      </div>
      <div className="bio-container">
        <h3 className="bio-h3">Tomasz Pikniczka</h3>
        <p className="bio-para">
          Tomasz loves to travel, and his professional work has almost always
          been related to it. After years of navigating ships, buses and taxis,
          he decided to take a course in the programming world.
        </p>
        <p className="bio-para">
          He has always enjoyed working at the computer; not only playing games,
          but also learning all sorts of software, so why not try a real job in
          the industry?
        </p>
        <p className="bio-para">
          As he was learning HTML, CSS, JavaScript on his own, and then more
          advanced topics with{" "}
          <a className="App-link" href="https://northcoders.com/">
            Northcoders
          </a>
          , he got to like it and is now looking for a technical role where he
          can put these skills to use.
        </p>
      </div>
    </div>
  );
};
