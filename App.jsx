import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>App</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.WHITE,
  },
});
