import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <img className={styles.navbarIcon} alt="" src="/navbar4.svg" />
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
          <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
