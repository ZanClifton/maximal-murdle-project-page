import gareth from "../images/Gareth.jpg";
import { Team } from "./Team";

export const Gareth = () => {
  return (
    <div className="Maximal-container">
      <Team />
      <div>
        <img src={gareth} className="photo" alt="Gareth Williams" />
      </div>
      <div className="bio-container">
        <h3 className="bio-h3">Gareth Williams</h3>
        <p className="bio-para">
          Gareth has recently worked as a technician in the culture sector, both
          within independent cinema and art galleries. He enjoys the challenge
          of problem solving and working out ways to creatively overcome
          obstacles that present themselves when tackling projects.{" "}
        </p>
        <p className="bio-para">
          He is aiming to take the next step on the career path by training as a
          developer and deepen his knowledge in a field that he is passionate
          about and finds fulfilling.
        </p>
      </div>
    </div>
  );
};
