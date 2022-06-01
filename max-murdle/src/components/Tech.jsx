import "../styles/App.css";

export const Tech = () => {
  return (
    <div className="Tech-container">
      <header className="App-header">Tech Stack</header>
      <div className="Tech-badges">
        <img
          className="Tech-badge"
          src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37"
          alt="Expo"
        />
        <img
          className="Tech-badge"
          src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
          alt="React Native"
        />
        <img
          className="Tech-badge"
          src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
          alt="JavaScript"
        />
        <img
          className="Tech-badge"
          src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white"
          alt="Firebase"
        />
        <img
          className="Tech-badge"
          src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"
          alt="Visual Studio Code"
        />
        <img
          className="Tech-badge"
          src="https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android-studio&logoColor=white"
          alt="Android Studio"
        />
        <p className="Tech-para">
          We began with Expo Tools for its ability to facilitate app development
          for both Android and iOS. Wanting to create a game, we chose to use
          React Native to develop it.
        </p>{" "}
        <p className="Tech-para">
          We treated its development as we might any web app, in the initial
          stages, using Visual Studio Code to write the logic in JavaScript,
          although it swiftly became clear that we could only see the complete
          functionality of the program using an emulator. We used Android Studio
          to set this up.{" "}
        </p>
        <p className="Tech-para">
          Once we had the game functioning, we set up Firebase Authentication to
          handle log in/out and sign up to the server, for which we used
          Firebase Firestore. We chose Firebase because it had clear
          documentation and support, as well as being recommended for its
          integration with React Native, through Expo.{" "}
        </p>
      </div>
    </div>
  );
};
