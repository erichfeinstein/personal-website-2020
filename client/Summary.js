import React from 'react';

//Colors
import { colors } from './colors';

const Summary = () => {
  return (
    <div>
      <p style={styles.title}>Hi, I'm Eric</p>
      <p style={styles.summaryText}>
        Coding and music are all about patterns and creative thinking, and
        that's why I love them both! I'm a full-stack software engineer based in
        New York City, and I enjoy working in collaborative groups of developers
        and designers who pursue great products, services and experiences.
      </p>
    </div>
  );
};

export default Summary;

const styles = {
  title: {
    color: colors.greyFont,
    wordSpacing: '4px',
    fontSize: '24pt',
  },
  summaryText: {
    color: '#666670',
    lineHeight: 1.5,
    wordSpacing: '4px',
    fontSize: '14pt',
    marginBottom: 25,
  },
};
