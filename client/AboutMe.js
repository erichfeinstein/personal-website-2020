import React from 'react';
import { colors } from './colors';

const AboutMe = () => {
  return (
    <div>
      <div className="sectionHeader">About Me</div>
      <div>
        <p style={styles.paragraph}>
          I'm a software engineer in New York City exploring new opportunities
          where I can use my skills and experience across the software stack.
        </p>
        <p style={styles.paragraph}>
          While an undergrad at Case Western, I was an active member of Case
          Men's Glee Club, in which I authored a mentorship program for new
          members, helped more than triple the group's size, and continued its
          century-old traditions.
        </p>
        <p style={styles.paragraph}>
          In my free time, I enjoy playing guitar and recording music. Some of
          my work is published on platforms like Spotify and Apple Music. I also
          enjoy homebrewing mead to share with family and friends!
        </p>
      </div>
    </div>
  );
};

const styles = {
  paragraph: {
    fontSize: 18,
    color: colors.greyFont,
    marginTop: 10,
    lineHeight: 2,
  },
};

export default AboutMe;
