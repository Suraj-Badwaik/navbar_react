import React from "react";
import styles from "./navbar.module.css";

const Links = () => {
  const arr = ["Services", "Projects", "About"];
  const a = arr.map((e) => {
    return <p>{e}</p>
  });

  return (
    <div className={styles.link}>
      <div>{a}</div>
    </div>
  );
};

export default Links;
