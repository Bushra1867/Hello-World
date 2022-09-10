import React from "react";
import {Text, View , StyleSheet}from 'react-native';
function SummeryExpenses ({periodName, expensesSum}){
const  expenseTotal = expensesSum.reduce((sum,expense)=> {
        return sum  + expense.amount
    } , 0)  
 return (
 <View style={styles.container}>
            <Text style={styles.period}>Period of Time: {periodName}</Text>
            <Text style={styles.sum}> ${expenseTotal.toFixed(2)} </Text>
        </View>
    )

}
export default SummeryExpenses;
const styles = StyleSheet.create({
    container:{
      padding:8,
      backgroundColor: '#3e04c3',
      flexDirection:'row',
      justifyContent:'space-between',
    alignItems:'center'

    },

    period: {
        fontSize:12,
    color: '#e4d9fd'
    },
    sum:{
        fontSize:16,
        fontWeight:'bold'
    }
});