import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Riana</h1>
        <p className={styles.description}>
          I recently graduated from Eastern Michigan University with a BS in Computer Science - Applied.
          <br></br>
          <br></br>This portfolio showcases my skills and projects in both software and web development, providing a
          glimpse into my technical expertise and creative problem-solving.
          <br></br>
          <br></br>
          Here, you'll find my resume and a collection of projects that reflect my dedication and passion for coding.
          Explore my work and join me on this exciting path as I continue to learn, grow, and contribute to the world of
          technology.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="https://rtherrie.github.io/portfolio/assets/hero/heroImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
