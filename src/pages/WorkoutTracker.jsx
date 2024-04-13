import backIcon from "../assets/back.png";
import graphImg from "../assets/imgGraph.png";
import cautionIcon from "../assets/caution.png";
import firstWorkout from "../assets/workout1.png";
import secondWorkout from "../assets/workout2.png";
import toggleButton from "../assets/toggleButton.png";
import Navigation from "../components/Navigation";
import trainingIcon from "../assets/trainingType.png";
import "./WorkoutTracker.css";

const WorkoutTracker = () => {
  const upcomingWorkouts = [
    {
      workoutImg: firstWorkout,
      workout: "Full Body Workout",
      time: "Today 3pm",
    },
    {
      workoutImg: secondWorkout,
      workout: "Upper Body Workout",
      time: "4 Feb, 3:30 pm",
    },
  ];

  return (
    <div className="workout-tracker-header">
      <div className="tracker-header">
        <img src={backIcon} />
        <h2>Workout Tracker</h2>
      </div>
      <div className="graph-wrapper">
        <img src={graphImg} />
      </div>
      <div className="caution">
        <img src={cautionIcon} />
        <p>You've burned fewer calories than yesterday. Time to get moving! </p>
      </div>
      <div className="upcoming ">
        <div className="upcoming-header">
          <h3>Upcoming Workout</h3>
          <p>See more</p>
        </div>
        <div className="upcoming-list">
          {upcomingWorkouts.map((item, index) => (
            <li key={index}>
              <div className="workout-details-wrapper">
                <img src={item.workoutImg} />
                <div className="workout-details">
                  <span className="workout-title">{item.workout}</span>
                  <span className="workout time">{item.time}</span>
                </div>
              </div>
              <img src={toggleButton} className="toggle" />
            </li>
          ))}
        </div>
      </div>
      <div className="training-type">
        <h3>What Do You Want to Train</h3>
        <div className="training-wrapper">
          <div className="training-content">
            <p className="training-title">Full Body Workout</p>
            <p className="training-item">Arms</p>
            <p className="training-item">Chest</p>
          </div>
          <div className="training-img">
            <img src={trainingIcon} />
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default WorkoutTracker;
