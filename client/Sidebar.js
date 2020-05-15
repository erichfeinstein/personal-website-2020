import React from 'react';

//Components
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import SidebarThree from './SidebarThree';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div id="sidebar-inner">
        <img id="headshot" src="images/headshot.png" />
        <p id="title">Eric Feinstein</p>
        <p style={styles.font}>Full-Stack Software Engineer</p>
        <a
          href="documents/EricFeinsteinResume.pdf"
          download="EricFeinsteinResume"
          onClick={(evt) => downloadResume(evt)}
          style={styles.inlineIcon}
        >
          <FiDownload size="25" />
          <p style={styles.font}>Resume</p>
        </a>
        <br />
        <div style={styles.inlineIcon}>
          <AiOutlineMail size="25" />
          <p style={styles.font}>erichfeinstein@gmail.com</p>
        </div>
        <div style={styles.inlineIcon}>
          <AiOutlinePhone size="25" />
          <p style={styles.font}>914-255-5074</p>
        </div>
      </div>
      <SidebarThree />
    </div>
  );
};

const downloadResume = (evt) => {
  window.open('documents/EricFeinsteinResume.pdf');
  evt.preventDefault();
};

const styles = {
  font: {
    fontSize: 18,
    paddingLeft: 15,
    color: 'white',
  },
  inlineIcon: {
    paddingTop: 10,
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
};

export default Sidebar;
