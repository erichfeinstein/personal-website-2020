import React from 'react';

//Components
import Summary from './Summary';
import ProjectSection from './ProjectSection';
import Divider from './Divider';

const Content = () => {
  return (
    <div id="content">
      <Summary />
      <Divider />
      <ProjectSection />
      <Divider />
    </div>
  );
};

export default Content;