import zan from "../images/Zan.jpg";
import { Team } from "./Team";

export const Zan = () => {
  return (
    <div className="Maximal-container">
      <Team />
      <div>
        <img src={zan} className="photo" alt="Zan Clifton" />
      </div>
      <div className="bio-container">
        <h3 className="bio-h3">Zan Clifton</h3>
        <p className="bio-para">
          Formerly an adult skills teacher and permaculture designer, Zan is
          also the Chair of the{" "}
          <a className="App-link" href="https://www.freethenorth.co.uk/">
            Northern Independence Party
          </a>
          .
        </p>
        <p className="bio-para">
          Her interest in permaculture systems aligns well with good practice
          and effective design in software development, and this largely
          influenced her decision to become a developer.
        </p>
        <p className="bio-para">
          As well as politics, permaculture, education and the environment, Zan
          is passionate about music and plays the trumpet, piano, steel drums,
          and the ukulele. She loves the Dungeons & Dragons tabletop RPGs, and
          one day, it is said, the Elder Scrolls series of games will need to be
          prised from her cold, dead hands.
        </p>
      </div>
    </div>
  );
};
