import React, { useState } from 'react';
import { colors } from './colors';

const { projects } = require('./projects');
import Modal from 'react-modal';
import Divider from './Divider';

const ProjectSummary = () => {
  const [projectDetails, setProjectDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div style={styles.sectionHeader}>Projects</div>
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
        <strong>{project.title}</strong>
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
    gridAutoRows: 350,
  },
  sectionHeader: {
    fontSize: 24,
    marginBottom: 50,
    color: colors.greyFont,
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
    padding: 20,
    fontSize: 18,
    color: colors.greyFont,
    marginTop: 10,
    lineHeight: 1.5,
  },
};

export default ProjectSummary;
