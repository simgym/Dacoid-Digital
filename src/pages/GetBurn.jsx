import cyclist from "../assets/cyclist.png";
import { Link } from "react-router-dom";
import finalNext from "../assets/finalNext.png";
import "./TrackGoal.css";

const GetBurn = () => {
  return (
    <div className="track-wrapper">
      <div className="skip-track">
        <Link to="/signup">Skip</Link>
      </div>
      <div className="goal-content">
        <div className="track-image-wrapper">
          <img src={cyclist} className="cycle-image" />
        </div>
        <div className="goal-text">
          <h2>Get Burn</h2>
          <p>
            Let’s keep burning to achieve your goals, it hurts only temporarily,
            if you give up now you will be in pain forever
          </p>
        </div>
      </div>
      <div className="next">
        <Link to="/signup">
          <img src={finalNext} />
        </Link>
      </div>
    </div>
  );
};

export default GetBurn;
