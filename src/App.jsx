import React, { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('');

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>NotesApp</h1>
      <input 
        type="text" 
        placeholder="Search..." 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ width: '100%', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}
      />
    </div>
  );
};

export default App;
