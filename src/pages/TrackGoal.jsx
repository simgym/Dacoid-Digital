import runner from "../assets/runner.png";
import { Link } from "react-router-dom";
import initialNext from "../assets/initialNext.png";
import "./TrackGoal.css";

const TrackGoal = () => {
  return (
    <div className="track-wrapper">
      <div className="skip-track">
        <Link to="/signup">Skip</Link>
      </div>
      <div className="goal-content">
        <div className="track-image-wrapper">
          <img src={runner} />
        </div>
        <div className="goal-text">
          <h2>Track Your Goal</h2>
          <p>
            Don’t worry if you have trouble determining your goals, We can help
            you determine your goals and track your goals
          </p>
        </div>
      </div>
      <div className="next">
        <Link to="/getburn">
          <img src={initialNext} />
        </Link>
      </div>
    </div>
  );
};

export default TrackGoal;
