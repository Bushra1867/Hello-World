import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 function manageExpenses() {
  return (
    <View style={styles.Screen}>
      <Text>manage Expenses Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default manageExpenses;