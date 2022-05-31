import "../styles/App.css";
import diana from "../images/Diana.jpeg";
import gareth from "../images/Gareth.jpg";
import tomasz from "../images/Tomasz.jpeg";
import yuri from "../images/Yuri.png";
import zan from "../images/Zan.jpg";

export const Maximal = () => {
  return (
    <>
      <div className="Maximal-body">
        <div className="Maximal-container">
          <div
            className="panel active"
            style={{ backgroundImage: `url(${diana})` }}
          >
            <h3>Diana Vozanu</h3>
          </div>
          <div
            className="panel active"
            style={{ backgroundImage: `url(${gareth})` }}
          >
            <h3>Gareth Williams</h3>
          </div>
          <div
            className="panel active"
            style={{ backgroundImage: `url(${tomasz})` }}
          >
            <h3>Tomasz Pikniczka</h3>
          </div>
          <div
            className="panel active"
            style={{ backgroundImage: `url(${yuri})` }}
          >
            <h3>Yuri Sorokins</h3>
          </div>
          <div
            className="panel active"
            style={{ backgroundImage: `url(${zan})` }}
          >
            <h3>Zan Clifton</h3>
          </div>
        </div>
      </div>
    </>
  );
};
