import React from 'react';

//Components
import Summary from './Summary';
import ProjectSection from './ProjectSection';
import Divider from './Divider';
import EmploymentSection from './EmploymentSection';
import AboutMe from './AboutMe';
import Contact from './Contact';

const Content = () => {
  return (
    <div id="content">
      <Summary />
      <Divider />
      <ProjectSection />
      <Divider />
      <EmploymentSection />
      <Divider />
      <AboutMe />
      <Divider />
      <Contact />
    </div>
  );
};

export default Content;
