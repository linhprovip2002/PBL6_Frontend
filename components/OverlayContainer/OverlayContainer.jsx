import Image from "next/image";
import styles from "./OverlayContainer.module.css";

const OverlayContainer = ({ imgSrc, children }) => (
  <div className={`${styles.imgContainer}`}>
    <img
      src={`${imgSrc}`}
      className={styles.img}
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    />

    {children}
    <div className={styles.imgOverlay}></div>
    <div className={styles.overlayBorder}></div>
    <div className={styles.overlayBorder2}></div>
  </div>
);

export default OverlayContainer;
