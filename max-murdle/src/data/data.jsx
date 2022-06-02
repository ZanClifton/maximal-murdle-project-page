import diana from "../images/Diana.jpeg";
import gareth from "../images/Gareth.jpg";
import tomasz from "../images/Tomasz.jpeg";
import yuri from "../images/Yuri.png";
import zan from "../images/Zan.jpg";
import code from "../images/code.jpg";

const data = [
  {
    id: "Diana",
    image: diana,
    name: "Diana Vozanu",
    bio: (
      <>
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
      </>
    ),
    linkedIn: "https://www.linkedin.com/in/dianavoz/",
    gitHub: "https://github.com/dianavoz",
  },
  {
    id: "Gareth",
    image: gareth,
    name: "Gareth Williams",
    bio: (
      <>
        <p className="bio-para">
          Gareth has recently worked as a technician in the culture sector, both
          within independent cinema and art galleries. He enjoys the challenge
          of problem solving and working out ways to creatively overcome
          obstacles that present themselves when tackling projects.
        </p>
        <p className="bio-para">
          He is aiming to take the next step on the career path by training as a
          developer and deepen his knowledge in a field that he is passionate
          about and finds fulfilling.
        </p>
      </>
    ),
    linkedIn: "https://www.linkedin.com/in/gareth-williams-39a6bb177/",
    gitHub: "https://github.com/garethrwilliams",
  },
  {
    id: "Tomasz",
    image: tomasz,
    name: "Tomasz Pikniczka",
    bio: (
      <>
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
      </>
    ),
    linkedIn: "https://www.linkedin.com/in/tomasz-pikniczka-439b7151/",
    gitHub: "https://github.com/piknik1979",
  },
  {
    id: "Yuri",
    image: yuri,
    name: "Yuri Sorokins",
    bio: (
      <>
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
      </>
    ),
    linkedIn: "https://www.linkedin.com/in/yuri-sorokins-33a73223a/",
    gitHub: "https://github.com/yuridevweb",
  },
  {
    id: "Zan",
    image: zan,
    name: "Zan Clifton",
    bio: (
      <>
        <p className="bio-para">
          Formerly an adult skills teacher and permaculture designer, Zan is
          also the National Chair of the{" "}
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
      </>
    ),
    linkedIn: "https://www.linkedin.com/in/zan-clifton/",
    gitHub: "https://github.com/ZanClifton",
  },
  {
    id: "Maximal",
    image: code,
    name: "About Maximal()",
    bio: (
      <>
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
      </>
    ),
    // linkedIn: "https://www.linkedin.com/in/zan-clifton/",
    // gitHub: "https://github.com/ZanClifton",
  },
];

export default data;
