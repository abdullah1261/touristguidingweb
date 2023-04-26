import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="signup">
      <img className="navbar-icon5" alt="" src="/navbar5.svg" />
      <div className="signup-child" />
      <div className="facebook-parent">
        <b className="facebook1">Facebook</b>
        <img
          className="ictwotone-facebook-icon"
          alt=""
          src="/ictwotonefacebook.svg"
        />
      </div>
      <b className="already-have-an">Already have an account? Login</b>
      <b className="first-name">First Name</b>
      <div className="cpass-input-field" />
      <div className="pass-input-field" />
      <b className="email">Email</b>
      <b className="password">{`Password `}</b>
      <div className="mail-input-field" />
      <b className="confirm-password">Confirm Password</b>
      <div className="lname-input-field" />
      <b className="last-name">Last Name</b>
      <b className="first-name">First Name</b>
      <b className="create-account">Create Account</b>
      <div className="signup-item" />
      <img
        className="f08dfb3731-b-1-icon"
        alt=""
        src="/6318009995-f08dfb3731-b-1@2x.png"
      />
      <img className="signup-inner" alt="" />
      <div className="fname-input-field" />
      <div className="create-account-wrapper" onClick={onFrameContainer1Click}>
        <b className="create-account1">
          <span className="create-account-txt-container">
            <p className="create-account2">Create Account</p>
          </span>
        </b>
      </div>
      <div className="google-parent">
        <b className="google">GOOGLE</b>
        <img className="ionlogo-google-icon" alt="" src="/ionlogogoogle.svg" />
      </div>
    </div>
  );
};

export default Signup;
