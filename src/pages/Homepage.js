import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const navigate = useNavigate();

  const onGalleryTextClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onMapsTextClick = useCallback(() => {
    navigate("/maps");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onImage103Click = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onImage104Click = useCallback(() => {
    navigate("/maps");
  }, [navigate]);

  const onImage105Click = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <div className={styles.component13}>
        <div className={styles.image90} />
        <div className={styles.component13Child} />
        <div className={styles.component13Item} />
        <img className={styles.image100Icon} alt="" src="/image-100@2x.png" />
        <div className={styles.gallery} onClick={onGalleryTextClick}>
          Gallery
        </div>
        <div className={styles.khabay}>Khabay</div>
        <div className={styles.news}>News</div>
        <div className={styles.kahani}>Kahani</div>
        <div className={styles.activities}>Activities</div>
        <div className={styles.maps} onClick={onMapsTextClick}>
          Maps
        </div>
        <div className={styles.recs}>Recs</div>
        <div className={styles.contactUs} onClick={onContactUsTextClick}>
          Contact Us
        </div>
        <img className={styles.image101Icon} alt="" src="/image-101@2x.png" />
        <div className={styles.image102} />
        <img
          className={styles.image103Icon}
          alt=""
          src="/image-103@2x.png"
          onClick={onImage103Click}
        />
        <img
          className={styles.image104Icon}
          alt=""
          src="/image-104@2x.png"
          onClick={onImage104Click}
        />
        <img
          className={styles.image105Icon}
          alt=""
          src="/image-105@2x.png"
          onClick={onImage105Click}
        />
        <img className={styles.image106Icon} alt="" src="/image-106@2x.png" />
        <img className={styles.image107Icon} alt="" src="/image-107@2x.png" />
        <img className={styles.image108Icon} alt="" src="/image-108@2x.png" />
        <div className={styles.component13Inner} />
      </div>
      <img className={styles.navbarIcon} alt="" src="/navbar6.svg" />
    </div>
  );
};

export default Homepage;
