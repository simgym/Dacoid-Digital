import dataIcon from "../assets/data.png";
import wifiIcon from "../assets/wifi.png";
import chargeIcon from "../assets/charge.png";
import "./Statusbar.css";

const Statusbar = () => {
  return (
    <div className="status-wrapper">
      <p>9:41</p>
      <div className="status-icons">
        <img src={dataIcon} className="data" />
        <img src={wifiIcon} className="wifi" />
        <img src={chargeIcon} className="charge" />
      </div>
    </div>
  );
};

export default Statusbar;
