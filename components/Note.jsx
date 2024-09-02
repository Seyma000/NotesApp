import React from 'react';

const Note = ({ text, color }) => {
  return (
    <div style={{ backgroundColor: color, padding: '10px', margin: '5px', borderRadius: '5px', color: 'black' }}>
      {text}
    </div>
  );
};

export default Note;
