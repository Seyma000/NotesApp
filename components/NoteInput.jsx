import React, { useState } from 'react';

const NoteInput = ({ addNote }) => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#90EE90'); // Varsayılan renk

  const handleAddNote = () => {
    if (text.trim() !== '') {
      addNote({
        text,
        color
      });
      setText(''); // Input'u temizle
    }
  };

  return (
    <div>
      <textarea 
        placeholder="Enter your note here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
      />
      <div style={{ margin: '10px 0' }}>
        {['#FF69B4', '#DDA0DD', '#ADD8E6', '#FFD700', '#90EE90'].map((clr) => (
          <span
            key={clr}
            onClick={() => setColor(clr)}
            style={{
              backgroundColor: clr,
              width: '20px',
              height: '20px',
              display: 'inline-block',
              borderRadius: '50%',
              margin: '0 5px',
              cursor: 'pointer',
              border: color === clr ? '2px solid black' : 'none',
            }}
          />
        ))}
      </div>
      <button 
        onClick={handleAddNote}
        style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: 'green', color: 'white' }}
      >
        ADD
      </button>
    </div>
  );
};

export default NoteInput;
