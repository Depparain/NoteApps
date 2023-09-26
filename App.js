import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import Settings from './components/Settings';
import TagPicker from './components/TagPicker';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tags, setTags] = useState([]);
  const [isTagPickerOpen, setIsTagPickerOpen] = useState(false);

  const addNote = (text, selectedTags) => {
    if (text.trim() !== '') {
      const newNote = { id: Date.now(), text, tags: selectedTags };
      setNotes([...notes, newNote]);
      setEditingNote(null);
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id, text, selectedTags) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text, tags: selectedTags } : note
    );
    setNotes(updatedNotes);
    setEditingNote(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openTagPicker = () => {
    setIsTagPickerOpen(true);
  };

  const closeTagPicker = () => {
    setIsTagPickerOpen(false);
  };

  const selectTag = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <SafeAreaView style={isDarkMode ? styles.darkContainer : styles.container}>
      <Text style={styles.header}>Notes App</Text>
      <Button title="Settings" onPress={toggleDarkMode} />
      <Button title="Add Note" onPress={() => setEditingNote({ text: '' })} />
      <Button title="Open Tag Picker" onPress={openTagPicker} />
      {isTagPickerOpen ? (
        <TagPicker
          tags={tags}
          selectedTag={selectedTag}
          onSelectTag={selectTag}
          onCancel={closeTagPicker}
        />
      ) : editingNote ? (
        <NoteEditor
          note={editingNote}
          onSave={(text, selectedTags) => addNote(text, selectedTags)}
          onCancel={() => setEditingNote(null)}
        />
      ) : (
        <>
          {selectedTag ? (
            <NoteList
              notes={notes.filter((note) => note.tags.includes(selectedTag))}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          ) : (
            <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
          )}
          {selectedTag && (
            <Button title="Clear Tag Filter" onPress={() => setSelectedTag(null)} />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    color: 'white',
  },
});

export default App;
