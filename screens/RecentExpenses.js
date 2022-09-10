import React from 'react';
import {View, StyleSheet} from 'react-native';
import ExpensesOutPut from '../componants/ExpensesOutPut';

 function RecentExpenses() {
  return (
    <View style={styles.screen}>
    <ExpensesOutPut  period='last 7 day'/>
    </View>
   );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  screen: {
    padding:15
  }
})