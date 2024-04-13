import searchIcon from "../assets/search.png";
import homeIcon from "../assets/home.png";
import cameraIcon from "../assets/camera.png";
import messageIcon from "../assets/message.png";
import profileIcon from "../assets/profile.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-search">
        <img src={searchIcon} />
      </div>
      <div className="nav-functions">
        <div className="left-icons">
          <img src={homeIcon} />
          <img src={messageIcon} />
        </div>
        <div className="right-icons">
          <img src={cameraIcon} />
          <img src={profileIcon} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
