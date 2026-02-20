import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact me</h2>
        <p>Feel free to reach out!</p>
      </div>

    
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:chandkailash1222@email.com">
            chandkailash1222@email.com
          </a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/kailash-chand-thakuri-2b9996316">
            linkedin.com/Kailash Chand
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Kailashchand1222">
            github.com/Kailashchand1222
          </a>
        </li>
      </ul>
       
  

     
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </footer>
  );
};
