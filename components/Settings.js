// components/Settings.js
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Settings = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dark Mode</Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  label: {
    fontSize: 18,
  },
});

export default Settings;

