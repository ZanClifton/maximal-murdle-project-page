import "../styles/App.css";

export const Overview = () => {
  return (
    <div className="Overview-container">
      <header className="App-header">Project Overview</header>
      <p className="Overview-para">
        Maximal() formed during the May 2022 graduating cohort of the{" "}
        <a
          className="App-link"
          href="https://northcoders.com/our-courses/remote-coding-bootcamp"
        >
          Northcoders Coding Bootcamp
        </a>{" "}
        and worked on Murdle as a final showcase project.
      </p>
      <p className="Overview-para">
        Murdle is a game for people who enjoy competition with both themselves
        and others. It's also for people who find one Wordle a day just not
        enough, want the extra challenge of trying to beat the clock or desire
        to get only a small number of letters wrong.{" "}
      </p>
      <p className="Overview-para">
        Fans of puzzles and gaming, the team wanted to make a game, but were
        keen to put a spin on it for uniqueness' sake, and to keep it
        challenging.
      </p>
      <p className="Overview-para">
        A leaderboard and competitive element add to the longevity of interest
        in the app, as who can resist beating their friends in the collection of
        arbitrary internet points?
      </p>
      <a href="https://play.google.com/store/apps/details?id=com.maximal.maximalMurdle&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <img
          className="play-badge"
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        />
      </a>
    </div>
  );
};
