import { useState } from "react";
import "../styles/App.css";
import { Team } from "./Team";
import { Profile } from "./Profile";
import data from "../data/data";

export const Maximal = () => {
  const [profile, setProfile] = useState("Maximal");

  return (
    <>
      <div className="Maximal-container">
        <Team setProfile={setProfile} />
        <Profile profile={profile} />
      </div>
    </>
  );
};
