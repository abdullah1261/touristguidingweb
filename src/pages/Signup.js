import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className={styles.signup}>
      <img className={styles.navbarIcon} alt="" src="/navbar1.svg" />
      <div className={styles.signupChild} />
      <div className={styles.facebookParent}>
        <b className={styles.facebook}>Facebook</b>
        <img
          className={styles.ictwotoneFacebookIcon}
          alt=""
          src="/ictwotonefacebook.svg"
        />
      </div>
      <b className={styles.alreadyHaveAn}>Already have an account? Login</b>
      <b className={styles.firstName}>First Name</b>
      <div className={styles.cpassInputField} />
      <div className={styles.passInputField} />
      <b className={styles.email}>Email</b>
      <b className={styles.password}>{`Password `}</b>
      <div className={styles.mailInputField} />
      <b className={styles.confirmPassword}>Confirm Password</b>
      <div className={styles.lnameInputField} />
      <b className={styles.lastName}>Last Name</b>
      <b className={styles.firstName}>First Name</b>
      <b className={styles.createAccount}>Create Account</b>
      <div className={styles.signupItem} />
      <img
        className={styles.f08dfb3731B1Icon}
        alt=""
        src="/6318009995-f08dfb3731-b-1@2x.png"
      />
      <img className={styles.signupInner} alt="" />
      <div className={styles.fnameInputField} />
      <div
        className={styles.createAccountWrapper}
        onClick={onFrameContainer1Click}
      >
        <b className={styles.createAccount1}>
          <span className={styles.createAccountTxtContainer}>
            <p className={styles.createAccount2}>Create Account</p>
          </span>
        </b>
      </div>
      <div className={styles.googleParent}>
        <b className={styles.google}>GOOGLE</b>
        <img
          className={styles.ionlogoGoogleIcon}
          alt=""
          src="/ionlogogoogle.svg"
        />
      </div>
    </div>
  );
};

export default Signup;
