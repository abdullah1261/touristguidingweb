import styles from "./Maps.module.css";

const Maps = () => {
  return (
    <div className={styles.maps}>
      <img className={styles.navbarIcon} alt="" src="/navbar5.svg" />
      <div className={styles.map}>Map</div>
      <img
        className={styles.imageRemovebgPreview41}
        alt=""
        src="/imageremovebgpreview-4-1@2x.png"
      />
      <div className={styles.mapsChild} />
    </div>
  );
};

export default Maps;
