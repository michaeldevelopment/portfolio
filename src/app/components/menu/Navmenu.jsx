import Link from "next/link";
import React from "react";
import styles from "../../styles/navmenu.module.scss";

export default function Navmenu() {
  return (
    <div className={styles.navmenuContainer}>
      <Link href="/"> Home </Link>
      <Link href="/about"> About </Link>
      <Link href="/skills"> Skills </Link>
      <Link href="/portfolio"> Portfolio </Link>
      <Link href="/contact"> Contact </Link>
    </div>
  );
}
