import React from 'react';

//Components
import Sidebar from './Sidebar';
import Content from './Content';

export default class App extends React.Component {
  render() {
    return (
      <div id="main">
        <Sidebar />
        <Content />
      </div>
    );
  }
}
