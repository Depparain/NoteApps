// components/NoteEditor.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const NoteEditor = ({ onSave, onCancel }) => {
  const [noteText, setNoteText] = useState('');

  const handleSave = () => {
    if (noteText.trim() !== '') {
      onSave(noteText);
      setNoteText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setNoteText}
        value={noteText}
        placeholder="Enter your note here"
        multiline
      />
      <Button title="Save" onPress={handleSave} />
      <Button title="Cancel" onPress={onCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    minHeight: 200,
  },
});

export default NoteEditor;

