import React from "react";
import styles from "./NewArticleSection.module.css";

const NewArticleSection = () => {
  return (
    <div className={styles.newsContainer}>
      <h2>New</h2>
      <div className={styles.singleNewsContainer}>
        <div className={styles.news}>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className={styles.news}>
          <h3>The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className={`${styles.news} ${styles.last}`}>
          <h3>Is VS Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewArticleSection;
