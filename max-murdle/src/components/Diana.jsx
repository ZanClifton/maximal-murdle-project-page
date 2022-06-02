import diana from "../images/Diana.jpeg";
import { Team } from "./Team";

export const Diana = () => {
  return (
    <div className="Maximal-container">
      <Team />
      <div>
        <img src={diana} className="photo" alt="Diana Vozanu" />
      </div>
      <div className="bio-container">
        <h3 className="bio-h3">Diana Vozanu</h3>
        <p className="bio-para">
          Diana moved to Italy in her teens and later settled in the UK. Aside
          from the programming languages she has recently learned from{" "}
          <a className="App-link" href="https://northcoders.com/">
            Northcoders
          </a>
          , she is also fluent in 4 spoken and written languages.
        </p>
        <p className="bio-para">
          Previously she has held a variety of jobs, most recently as a digital
          producer for a large events company, learning new technologies and
          mentoring colleages to gain their own expertise in them. In this role,
          Diana worked with designers and programmers who inspired her interest
          in web development.
        </p>
        <p className="bio-para">
          She undertook the{" "}
          <a
            className="App-link"
            href="https://northcoders.com/our-courses/remote-coding-bootcamp"
          >
            Coding Bootcamp
          </a>{" "}
          to realise her ambition to work in software development and is looking
          forward to embarking on her new career.
        </p>
      </div>
    </div>
  );
};
