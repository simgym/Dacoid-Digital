import sideLine from "../assets/sideLine.png";
import googleIcon from "../assets/googleIcon.png";
import metaIcon from "../assets/metaIcon.png";
import { Link } from "react-router-dom";
import "./Authenticate.css";

export const Signup = () => {
  return (
    <div className="authenticate-wrapper">
      <div className="auth-heading">
        {" "}
        <h2>Create an account</h2>
      </div>
      <form>
        <div className="input-wrapper">
          <div>
            <input type="text" placeholder="First Name" />
          </div>
          <div>
            <input type="text" placeholder="Last Name" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="check-input">
          <input type="checkbox" />
          By proceeding, I agree to all <span>T&C</span> and{" "}
          <span>Privacy Policy</span>
        </div>
        <div className="button-wrapper">
          <button type="submit" onClick={() => navigate("/setgoals")}>
            Create an Account
          </button>
        </div>
      </form>
      <div className="or-decor">
        <span>
          <img src={sideLine} />
        </span>
        <span>or</span>
        <span>
          <img src={sideLine} />
        </span>
      </div>
      <div className="signinLinks">
        <span className="google-icon">
          <img src={googleIcon} />
        </span>
        <span className="meta-icon">
          <img src={metaIcon} />
        </span>
      </div>
      <div className="login-link-wrapper">
        <p>Don’t have an account yet?</p>
        <Link to="/login"> Login</Link>
      </div>
    </div>
  );
};
export default Signup;
