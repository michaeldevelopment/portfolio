import React from "react";
import styles from "../../styles/me.module.scss";

export default function Me() {
  return (
    <div className={styles.meContainer}>
      <div>
        <h2>Welcome to my work journey beyond the pixels :) </h2>
        <p>
          Welcome to my personal web portfolio! I am thrilled to have you here.
          As a passionate [insert profession/hobby/interest] with a flair for
          [insert skills/attributes], I am excited to showcase part of myself.
        </p>
      </div>
      <div> This is the image </div>
    </div>
  );
}
