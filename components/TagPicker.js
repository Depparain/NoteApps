// components/TagPicker.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TagPicker = ({ tags, selectedTag, onSelectTag, onCancel }) => {
  return (
    <View style={styles.container}>
      <Text>Select a tag:</Text>
      {tags.map((tag) => (
        <Button
          key={tag}
          title={tag}
          onPress={() => onSelectTag(tag)}
          style={selectedTag === tag ? styles.selectedTag : null}
        />
      ))}
      <Button title="Cancel" onPress={onCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  selectedTag: {
    backgroundColor: 'blue', // Измените цвет фона по вашему выбору
    color: 'white',
  },
});

export default TagPicker;
