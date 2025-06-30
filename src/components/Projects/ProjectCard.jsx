import React from "react";

import styles from "./ProjectCard.module.css";
//import { getImageUrl } from "../../utils";

const isFileLink = (url) => {
  return /\.(pdf|docx?|xlsx?|zip|rar|7z|tar\.gz|jpg|png|mp4|mp3)$/i.test(url);
};

export const ProjectCard = ({
  project: { title, description, skills, demo, source },
  onClick,
}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {/* <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      /> */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a
          href={demo}
          className={styles.link}
          onClick={(e) => e.stopPropagation()}
        >
          Demo
        </a>
        <a
          href={source}
          className={styles.link}
          onClick={(e) => e.stopPropagation()}
          download={isFileLink(source) ? true : undefined}
        >
          Source
        </a>
      </div>
    </div>
  );
};
