import data from "../data/data";

export const Profile = (profile) => {
  console.log(profile.profile, "profile in Profile");

  return (
    <>
      {data.map((person) => {
        return profile.profile !== person.id ? (
          <div key={person.id}></div>
        ) : (
          <div key={person.id}>
            <div>
              <img src={person.image} className="photo" alt={person.name} />
            </div>
            <div className="bio-container">
              <h3 className="bio-h3">{person.name}</h3>
              <div className="bio-para">{person.bio}</div>
            </div>
            {profile.profile === "Maximal" ? (
              <></>
            ) : (
              <div className="social-badges">
                <a href={person.linkedIn}>
                  <img
                    src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
                    className="social-badge"
                    alt={person.linkedIn}
                  />
                </a>
                <a href={person.gitHub}>
                  <img
                    src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                    className="social-badge"
                    alt={person.gitHub}
                  />
                </a>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
