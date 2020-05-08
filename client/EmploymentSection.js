import React from 'react';
import { colors } from './colors';

const { employmentList } = require('./employment');

const EmploymentSection = () => {
  return (
    <div>
      <div style={styles.sectionHeader}>Employment</div>
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
      <div style={styles.employmentContent}>
        {employment.description.map((p, i) => {
          return <p key={i}>{p}</p>;
        })}
      </div>
    </div>
  );
};

export default EmploymentSection;

const styles = {
  sectionHeader: {
    fontSize: 24,
    marginBottom: 50,
    color: colors.greyFont,
  },
  employmentContent: {
    fontSize: 18,
    color: colors.greyFont,
    marginTop: 10,
    lineHeight: 1.5,
  },
};
