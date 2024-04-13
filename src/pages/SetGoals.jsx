import React from "react";
import { useNavigate } from "react-router-dom";
import "./SetGoals.css";

const SetGoals = () => {
  const navigate = useNavigate();

  const goals = [
    { goal: "Weight Loss" },
    { goal: "Muscle Gain" },
    { goal: "Flexibility and Mobility" },
    { goal: "General Fitness" },
    { goal: "Event - specific training" },
    { goal: "Mindfulness and Mental Health" },
  ];

  return (
    <div className="set-goals-wrapper">
      <div className="goals-list">
        <h2>What are your goals?</h2>
        {goals.map((item, index) => (
          <div key={index} className="goal-item">
            <li>
              <p>{item.goal}</p>
            </li>
            <input type="checkbox" />
          </div>
        ))}
      </div>
      <div className="goals-button">
        <button onClick={() => navigate("/tracker")}>Confirm</button>
      </div>
    </div>
  );
};

export default SetGoals;
