import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kailash</h1>
        <p className={styles.description}>
         I am currently pursuing a Bachelor in Computer Engineering at Himalaya College of Engineering, affiliated with Tribhuvan University. I am passionate about web development and game development, and I love exploring new technologies and expanding my skill set. I enjoy creating interactive projects, solving challenging problems, and continuously learning to build innovative and efficient solutions.
        </p>
   

<a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.contactBtn}
>
  View Resume
</a>


        

      </div>
      <img
        src={getImageUrl("hero/kailash.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
