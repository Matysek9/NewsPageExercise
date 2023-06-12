import React from "react";
import styles from "./LastArticle.module.css";

const LastArticle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.news}>
        <img src="./assets/images/image-retro-pcs.jpg" alt="retro pc" />
        <div>
          <h3>01</h3>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className={styles.news}>
        <img src="./assets/images/image-top-laptops.jpg" alt="top laptops" />
        <div>
          <h3>02</h3>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className={styles.news}>
        <img src="./assets/images/image-gaming-growth.jpg" alt="gaming pad" />
        <div>
          <h3>03</h3>
          <h4>The growth of Gaming</h4>
          <p>How the pandemic has sparked frest opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default LastArticle;
