import React from "react";
import styles from "./Modal.module.css";

export const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>{project.title}</h2>
        <img
          src={project.imageSrc}
          alt={project.title}
          className={styles.image}
        />
        <p>
          {project.info.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};
