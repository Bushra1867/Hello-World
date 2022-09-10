
import React from "react";
import {Pressable, View, Text, StyleSheet}from 'react-native';

function ExpenseItem({description,amount,date}){
    return (
<Pressable>
    <View  style={styles.expenseItem}>
        <View>
            <Text style={[styles.description, styles.defText]}>{description}  </Text>
            <Text style={styles.defText}> {date.toString()}</Text>
        </View>
        <View style={styles.amountContainer}>
        <Text style={styles.defText}>Amount</Text>
            <Text style={[styles.defText, styles.amount]}>{amount}</Text>
        </View>
    </View>
</Pressable>

    )
}

export default ExpenseItem;
const styles = StyleSheet.create({
    expenseItem:{
      padding:12,
      marginVertical:8,
      backgroundColor: '#f7bc0c',
      flexDirection:'row',
      justifyContent:'space-between',
      borderRadius:6,
      elevation:3,
      shadowColor:'#39324a',
      shadowOffset:{width:1, height:1},
      shadowOpacity:0.4

    },
    defText:{
color: '#3e04c3',
    },

    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold'
    },
    amount:{
        fontSize:14,
        marginBottom:4,
        fontWeight:'bold',
        color:'red'
    },
    amountContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%'
    }
    });