import React from "react";
import styles from "./HeadArticle.module.css";

const HeadArticle = () => {
  return (
    <div className={styles.article}>
      {/* <div className={styles.articleImage}></div> */}
      <picture className={styles.articleImage}>
        <source  media="(min-width: 376px)" srcSet="assets/images/image-web-3-desktop.jpg" />
        <source  media="(max-width: 375px)" srcSet="assets/images/image-web-3-mobile.jpg" />
        <img src="assets/images/image-web-3-mobile.jpg" alt="IfItDoesntMatchAnyMedia"  />
      </picture>
      <div className={styles.containter}>
        <h1>The Bright Future of Web 3.0?</h1>
        <div className={styles.articleDescription}>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className={styles.btn}>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default HeadArticle;
