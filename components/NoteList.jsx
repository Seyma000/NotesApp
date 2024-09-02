import React from 'react';
import Note from './Note';

const NoteList = ({ notes, filter }) => {
  const filteredNotes = notes.filter(note => 
    note.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredNotes.map((note, index) => (
        <Note key={index} text={note.text} color={note.color} />
      ))}
    </div>
  );
};

export default NoteList;
