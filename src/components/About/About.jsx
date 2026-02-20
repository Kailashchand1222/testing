import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <img
          src={getImageUrl("about/frontendicon.jpg")}
          alt="Me standing !!"
          className={styles.aboutImage}
        />
              <h3>Frontend Learner</h3>
              <p>
               I am learning frontend development and building responsive, user-friendly web interfaces using HTML, CSS, and JavaScript. I focus on creating clean UI designs, improving layout structure, and ensuring websites work smoothly across different devices. I am continuously improving my skills by working on personal projects and modern web technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <img
          src={getImageUrl("about/backend.webp")}
          alt="Me standing !!"
          className={styles.aboutImage}
        />
              <h3>Backend Learner</h3>
              <p>
               I am exploring backend development to understand how servers, databases, and APIs work together. I am learning how to build secure and efficient backend systems, manage data, and create REST APIs. My goal is to develop scalable and optimized applications by strengthening my backend fundamentals.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <img
          src={getImageUrl("about/project.webp")}
          alt="Me developer!!"
          className={styles.aboutImage}
        />
              <h3>Pygame learner</h3>
              <p>
               I am a passionate beginner in game development using Pygame. I enjoy building 2D games and experimenting with game mechanics, animations, and player interactions. I am currently learning about game loops, collision detection, sprite handling, and physics to create smooth and interactive gameplay experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
