import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            className={styles.icon}
            src={getImageUrl("contact/email.png")}
            alt="Email icon"
          />
          <a href="mailto:rktherrien23@gmail.com">rktherrien23@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            className={styles.icon}
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rianatherrien">
            linkedin.com/rianatherrien
          </a>
        </li>
        <li className={styles.link}>
          <img
            className={styles.icon}
            src={getImageUrl("contact/github.svg")}
            alt="Github icon"
          />
          <a href="https://github.com/rtherrie">github.com/rtherrie</a>
        </li>
      </ul>
    </footer>
  );
};
