import yuri from "../images/Yuri.png";
import { Team } from "./Team";

export const Yuri = () => {
  return (
    <div className="Maximal-container">
      <Team />
      <div>
        <img src={yuri} className="photo" alt="Yuri Sorokins" />
      </div>
      <div className="bio-container">
        <h3 className="bio-h3">Yuri Sorokins</h3>
        <p className="bio-para">
          After working in retail and distribution sector, Yuri has decided this
          is not his cup of tea! This motivated him to start his path as a self
          taught programmer, learning python and web development in his spare
          time.
        </p>
        <p className="bio-para">
          This year he joined the{" "}
          <a
            className="App-link"
            href="https://northcoders.com/our-courses/remote-coding-bootcamp"
          >
            Northcoders Bootcamp
          </a>{" "}
          and completely enjoyed getting stuck in with JavaScript which allowed
          him to combine his interest in technology with his passion to solve
          logic problems.
        </p>
        <p className="bio-para">
          He loves sport, reading and finances and is excited to start a career
          as a full stack software developer.
        </p>
      </div>
    </div>
  );
};
