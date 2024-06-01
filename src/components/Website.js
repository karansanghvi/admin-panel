import React from 'react';

const Website = ({ items }) => {
  if (!items || items.length === 0) { 
    return <div>No items to display</div>;
  }

  return (
    <div>
      <h2>Website Content</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p>{item.text}</p>
            {item.image && <img src={item.image} alt="item" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Website;