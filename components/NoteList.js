// components/NoteList.js
import React from 'react';
import { FlatList } from 'react-native';
import Note from './Note';

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <FlatList
      data={notes}
      renderItem={({ item }) => <Note note={item} onDelete={onDelete} onEdit={onEdit} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default NoteList;

