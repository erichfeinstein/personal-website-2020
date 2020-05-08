import React from 'react';

//Components
import Summary from './Summary';
import ProjectSection from './ProjectSection';
import Divider from './Divider';
import EmploymentSection from './EmploymentSection';

const Content = () => {
  return (
    <div id="content">
      <Summary />
      <Divider />
      <ProjectSection />
      <Divider />
      <EmploymentSection />
      <Divider />
    </div>
  );
};

export default Content;
