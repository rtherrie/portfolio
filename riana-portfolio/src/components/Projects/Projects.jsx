import React, { useState } from "react";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { Modal } from "./Modal"; // We'll create this file next

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard
            key={id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal appears only when a project is selected */}
      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
