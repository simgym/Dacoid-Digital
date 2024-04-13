import sideLine from "../assets/sideLine.png";
import googleIcon from "../assets/googleIcon.png";
import metaIcon from "../assets/metaIcon.png";
import { Link, useNavigate } from "react-router-dom";
import "./Authenticate.css";

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="authenticate-wrapper">
      <div className="auth-heading">
        <h2>Welcome Back</h2>
      </div>
      <form>
        <div className="input-wrapper">
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="forgot-link">
          <Link>Forgot your password?</Link>
        </div>
        <div className="button-wrapper-login">
          <button type="submit" onClick={() => navigate("/setgoals")}>
            Sign In
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
        <Link to="/signup"> Create an account</Link>
      </div>
    </div>
  );
};
export default Signup;
