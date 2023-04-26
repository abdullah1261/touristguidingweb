import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="login">
      <img className="navbar-icon6" alt="" src="/navbar6.svg" />
      <div className="menu7">
        <div className="frame-parent">
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="activities2">Activities</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="news1">News</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="eat2">Eat</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="kahani">Kahani</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="news1">Maps</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="gallery1">Gallery</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="recs">Recs</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="contact-us5">Contact Us</div>
          </div>
        </div>
        <div className="vector-wrapper">
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
      </div>
      <img className="login-child" alt="" src="/rectangle-8@2x.png" />
      <div className="login-item" />
      <div className="already-have-an1" onClick={onAlreadyHaveAnClick}>
        Already have an account? SignUp
      </div>
      <img className="login-inner" alt="" src="/rectangle-81.svg" />
      <div className="login1">
        <div className="did-you-forget">Did you forget your password?</div>
        <div className="button1">
          <div className="log-in">Log in</div>
        </div>
        <div className="input-password">
          <div className="email1">Password</div>
          <div className="input1">
            <div className="johndoegmailcom">***********</div>
          </div>
        </div>
        <div className="input-email">
          <div className="email1">Email</div>
          <TextField
            className="input2"
            color="primary"
            variant="outlined"
            type="text"
            label="john.doe@gmail.com"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <div className="login-with-the">
          Login with the data you entered during your registration.
        </div>
        <div className="login2">Login</div>
        <img className="logo-icon2" alt="" src="/logo2.svg" />
      </div>
      <div className="menu8">
        <div className="frame-parent">
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="activities2">Activities</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="news1">News</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="eat2">Eat</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="kahani">Kahani</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="news1">Maps</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="gallery1">Gallery</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="recs">Recs</div>
          </div>
          <div className="rectangle-parent44">
            <div className="frame-child" />
            <div className="contact-us5">Contact Us</div>
          </div>
        </div>
        <div className="vector-wrapper">
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
