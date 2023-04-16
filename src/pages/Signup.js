import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = () => {
  const navigate = useNavigate();

  const onDoNotHaveClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.signup}>
      <img className={styles.navbarIcon} alt="" src="/navbar.svg" />
      <div className={styles.menu}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.activities}>Activities</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.news}>News</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.eat}>Eat</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.kahani}>Kahani</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.news}>Maps</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.gallery}>Gallery</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.recs}>Recs</div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.contactUs}>Contact Us</div>
          </div>
        </div>
        <div className={styles.vector3Wrapper}>
          <img className={styles.vector3Icon} alt="" src="/vector-3.svg" />
        </div>
      </div>
      <div className={styles.signupChild} />
      <div className={styles.signUp}>Sign Up</div>
      <div className={styles.signupItem} />
      <img className={styles.signupInner} alt="" />
      <div className={styles.doNotHave} onClick={onDoNotHaveClick}>
        Do not have an account? LogIn
      </div>
      <div className={styles.signUp1}>Sign Up</div>
    </div>
  );
};

export default Signup;
