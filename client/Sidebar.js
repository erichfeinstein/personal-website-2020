import React from 'react';

//Components
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div id="sidebar-inner">
        <img id="headshot" src="images/headshot.png" />
        <p id="title">Eric Feinstein</p>
        <p style={styles.font}>Full-Stack Software Engineer</p>
        <div style={styles.inlineIcon}>
          <AiOutlineMail size="25" />
          <p style={styles.font}>erichfeinstein@gmail.com</p>
        </div>
        <div style={styles.inlineIcon}>
          <AiOutlinePhone size="25" />
          <p style={styles.font}>914-255-5074</p>
        </div>
      </div>
    </div>
  );
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
