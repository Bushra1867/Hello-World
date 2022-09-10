import React from 'react';
import {View, StyleSheet} from 'react-native';
import ExpensesOutPut from '../componants/ExpensesOutPut';

 function AllExpenses() {
  return (
    <View style={styles.screen}>
   <ExpensesOutPut  period='total'/>
   </View>
  )
  }
  export default AllExpenses;
  const styles = StyleSheet.create({
    screen: {
      padding:15
    }
  })