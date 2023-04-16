import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <img className={styles.navbarIcon} alt="" src="/navbar2.svg" />
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
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      <img className={styles.loginChild} alt="" src="/rectangle-8@2x.png" />
      <div className={styles.loginItem} />
      <div className={styles.alreadyHaveAn} onClick={onAlreadyHaveAnClick}>
        Already have an account? SignUp
      </div>
      <img className={styles.loginInner} alt="" src="/rectangle-81.svg" />
      <div className={styles.login1}>
        <div className={styles.didYouForget}>Did you forget your password?</div>
        <div className={styles.button}>
          <div className={styles.logIn}>Log in</div>
        </div>
        <div className={styles.inputPassword}>
          <div className={styles.email}>Password</div>
          <div className={styles.input}>
            <div className={styles.johndoegmailcom}>***********</div>
          </div>
        </div>
        <div className={styles.inputEmail}>
          <div className={styles.email}>Email</div>
          <TextField
            className={styles.input1}
            color="primary"
            variant="outlined"
            type="text"
            label="john.doe@gmail.com"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <div className={styles.loginWithThe}>
          Login with the data you entered during your registration.
        </div>
        <div className={styles.login2}>Login</div>
        <img className={styles.logoIcon} alt="" src="/logo2.svg" />
      </div>
      <div className={styles.menu1}>
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
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
