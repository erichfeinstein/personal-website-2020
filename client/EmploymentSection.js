import React from 'react';
import { colors } from './colors';

const { employmentList } = require('./employment');

const EmploymentSection = () => {
  return (
    <div>
      <div className="sectionHeader">Employment</div>
      {employmentList.map((employment) => {
        return <Employment employment={employment} />;
      })}
    </div>
  );
};

const Employment = ({ employment }) => {
  return (
    <div>
      <div style={styles.employmentContent}>
        <strong>{employment.company}</strong>
      </div>
      <ul style={styles.employmentContent}>
        {employment.description.map((d, i) => {
          return <li key={i}>{d}</li>;
        })}
      </ul>
    </div>
  );
};

export default EmploymentSection;

const styles = {
  employmentContent: {
    fontSize: 18,
    color: colors.greyFont,
    marginTop: 10,
    lineHeight: 2,
  },
};
