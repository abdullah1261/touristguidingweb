import styles from "./Thumbnail.module.css";

const Thumbnail = () => {
  return (
    <div className={styles.thumbnail}>
      <img className={styles.rectangleIcon} alt="" src="/rectangle2@2x.png" />
      <img className={styles.cmsPageIcon} alt="" src="/cmspage@2x.png" />
      <div className={styles.screenshots}>
        <img className={styles.cmsPageIcon1} alt="" src="/cmspage1@2x.png" />
        <img className={styles.cmsPageIcon2} alt="" src="/cmspage2@2x.png" />
        <img className={styles.homePageIcon} alt="" src="/homepage@2x.png" />
      </div>
      <div className={styles.title}>
        <img className={styles.cmsPageIcon3} alt="" src="/cmspage3@2x.png" />
        <div className={styles.restaurantWebsiteDesignContainer}>
          <p className={styles.restaurantWebsite}>{`Restaurant Website `}</p>
          <p className={styles.restaurantWebsite}>Design</p>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
