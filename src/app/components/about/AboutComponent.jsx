import React from "react";
import styles from "../../styles/about.module.scss";

export default function AboutComponent() {
  return (
    <div className={styles.aboutContainer}>
      <h2>This is the about page</h2>
      <p> Time to know more about me :D </p>
    </div>
  );
}
