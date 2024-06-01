import React from 'react';
import Website from '../components/Website';

const HomePage = ({ items }) => {
  return (
    <div>
      <h1>Website</h1>
      <Website items={items} />
    </div>
  );
};

export default HomePage