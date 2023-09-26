// components/Note.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Note = ({ note, onDelete }) => {
  return (
    <View>
      <Text>{note.text}</Text>
      <TouchableOpacity onPress={() => onDelete(note.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Note;

