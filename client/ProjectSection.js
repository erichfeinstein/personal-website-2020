import React, { useState } from 'react';
import { colors } from './colors';

const { projects } = require('./projects');
import Modal from 'react-modal';
import Divider from './Divider';
import { AiFillGithub } from 'react-icons/ai';

const ProjectSummary = () => {
  const [projectDetails, setProjectDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="sectionHeader">Projects</div>
      <Modal
        style={{
          overlay: {
            backgroundColor: '#33333388',
          },
        }}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        {projectDetails && <ProjectModal project={projectDetails} />}
      </Modal>
      <div style={styles.columns}>
        {projects.map((project, i) => (
          <Project
            key={i}
            project={project}
            setIsModalOpen={setIsModalOpen}
            setProjectDetails={setProjectDetails}
          />
        ))}
      </div>
    </div>
  );
};

const Project = ({ project, setIsModalOpen, setProjectDetails }) => {
  return (
    <div style={styles.project}>
      <img
        onClick={() => {
          setIsModalOpen(true);
          setProjectDetails(project);
        }}
        className="projectImage"
        style={styles.projectImage}
        src={project.image}
      />
      <div style={styles.projectTitle}>
        <strong>{project.title}</strong> - {project.short}
      </div>
    </div>
  );
};

const ProjectModal = ({ project }) => {
  return (
    <div style={styles.project}>
      <img style={styles.modalProjectImage} src={project.image} />
      <div style={styles.modalProjectContent}>
        <div style={styles.modalProjectTitleLine}>
          <strong>{project.title}</strong>
          <a
            className="githubLink"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={25} />
          </a>
        </div>
        <Divider />
        {project.description.map((p, i) => {
          return <p key={i}>{p}</p>;
        })}
      </div>
    </div>
  );
};

const styles = {
  columns: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridColumnGap: '20px',
    gridAutoRows: 300,
  },
  project: {
    marginBottom: 20,
  },
  projectTitle: {
    fontSize: 18,
    color: colors.greyFont,
    marginTop: 10,
    lineHeight: 1.5,
  },
  projectImage: {
    cursor: 'pointer',
    borderRadius: 5,
    width: '100%',
    height: '60%',
    objectFit: 'cover',
  },
  modalProjectImage: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
  },
  modalProjectContent: {
    fontSize: 18,
    color: colors.greyFont,
    marginTop: 10,
    lineHeight: 1.5,
  },
  modalProjectTitleLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

export default ProjectSummary;
