import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  Button,
  Switch,
} from 'react-native';

const App = () => {
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addNote = () => {
    if (noteText.trim() !== '') {
      setNotes([...notes, { text: noteText }]);
      setNoteText('');
      setIsModalVisible(false);
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.container}>
      <View style={styles.headerContainer}>
        <Text style={isDarkMode ? styles.darkHeader : styles.header}>Заметки</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#ccc', true: 'blue' }}
          thumbColor={isDarkMode ? 'white' : 'white'}
        />
      </View>
      <Button title="Добавить заметку" onPress={openModal} />
      <FlatList
        data={notes}
        renderItem={({ item, index }) => (
          <View style={isDarkMode ? styles.darkNoteContainer : styles.noteContainer}>
            <Text style={isDarkMode ? styles.darkNoteText : styles.noteText}>
              {item.text}
            </Text>
            <TouchableOpacity
              style={isDarkMode ? styles.darkDeleteButton : styles.deleteButton}
              onPress={() => deleteNote(index)}
            >
              <Text style={isDarkMode ? styles.darkDeleteButtonText : styles.deleteButtonText}>
                Удалить
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={closeModal}
      >
        <View style={isDarkMode ? styles.darkContainer : styles.container}>
          <Text style={isDarkMode ? styles.darkHeader : styles.header}>Добавить заметку</Text>
          <TextInput
            style={isDarkMode ? [styles.input, styles.darkInput] : styles.input}
            onChangeText={(text) => setNoteText(text)}
            value={noteText}
            placeholder="Введите заметку"
            placeholderTextColor={isDarkMode ? '#ccc' : '#666'}
          />
          <Button title="Сохранить" onPress={addNote} />
          <Button title="Закрыть" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  darkHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  darkInput: {
    borderColor: 'gray',
    color: 'white',
    backgroundColor: '#333',
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 4,
    marginLeft: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkAddButton: {
    backgroundColor: 'darkblue',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  darkAddButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  darkNoteContainer: {
    backgroundColor: '#333',
    borderColor: 'gray',
  },
  noteText: {
    flex: 1,
  },
  darkNoteText: {
    color: 'white',
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 4,
    padding: 4,
  },
  darkDeleteButton: {
    backgroundColor: 'darkred',
    borderRadius: 4,
    padding: 4,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  darkDeleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;

