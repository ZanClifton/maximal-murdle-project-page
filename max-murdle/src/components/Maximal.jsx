import "../styles/App.css";
import { Team } from "./Team";

export const Maximal = () => {
  return (
    <>
      <div className="Maximal-container">
        <Team />
        <p className="bio-para">
          Maximal() are a team comprising Diana Vozanu, Gareth Williams, Tomasz
          Pikniczka, Yuri Sorokins and Zan Clifton. They met during the{" "}
          <a
            className="App-link"
            href="https://northcoders.com/our-courses/remote-coding-bootcamp"
          >
            Northcoders Coding Bootcamp
          </a>{" "}
          and worked together on Murdle for their final project.
        </p>
        <p className="bio-para">
          Intensely proud of their creation, they have hosted the app on the
          Google Play Store and are continuing to make improvements to it to
          create a fun and competitive game experience.
        </p>
      </div>
    </>
  );
};
