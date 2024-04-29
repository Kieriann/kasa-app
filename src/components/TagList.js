import React from 'react';

const TagList = ({ tags }) => {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </div>
  );
};

export default TagList;
