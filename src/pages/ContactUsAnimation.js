import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactUsAnimation.module.css";

const ContactUsAnimation = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/contact2");
  }, [navigate]);

  return (
    <div className={styles.contactUsAnimation}>
      <img className={styles.navbarIcon} alt="" src="/navbar2.svg" />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div
        className={styles.contactUsAnimationChild}
        onClick={onRectangleClick}
      />
      <div className={styles.contactUs}>Contact Us</div>
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
            <div className={styles.contactUs1}>Contact Us</div>
          </div>
        </div>
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
        </div>
      </div>
      <div className={styles.mosqueWazirKhan}>Mosque Wazir Khan</div>
    </div>
  );
};

export default ContactUsAnimation;
