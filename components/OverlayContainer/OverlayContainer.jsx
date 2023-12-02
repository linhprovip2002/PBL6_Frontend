import Image from "next/image";
import styles from "./OverlayContainer.module.css";

const OverlayContainer = ({ imgSrc, imgSrc2, imgAlt, children }) => (
  <div className={`${styles.imgContainer}`}>
    {imgSrc2 ? (
      <>
        <div className="hidden sm:block w-full">
          <img
            src={`${imgSrc}`}
            className={styles.img}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "300px",
            }}
          />
        </div>
        <div className="block sm:hidden w-full">
          <img
            src={`${imgSrc2}`}
            className={styles.img}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "300px",
            }}
          />
        </div>
      </>
    ) : (
      <img
        src={`${imgSrc}`}
        className={styles.img}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "300px",
        }}
      />
    )}

    {children}
    <div className={styles.imgOverlay}></div>
    <div className={styles.overlayBorder}></div>
    <div className={styles.overlayBorder2}></div>
  </div>
);

export default OverlayContainer;
