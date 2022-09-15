
import React from "react";
import {Pressable, View, Text, StyleSheet}from 'react-native';
import {getFormattedDate} from '../utility/date';
import {useNavigation} from'@react-navigation/native'
import { GlobalStyle } from "../constant/styles";


function ExpenseItem({id,description,amount,date}){
    const navigation = useNavigation();
    function pressHandler(){
        navigation.navigate('ManageExpenses', {expenseId: id})
    }
    return (
<Pressable onPress={pressHandler} style={({pressed}) => pressed && styles.pressed}>
    <View  style={styles.expenseItem}>
        <View>
            <Text style={[styles.description, styles.defText]}>{description}  </Text>
            <Text style={styles.defText}> {getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount}</Text>
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
      backgroundColor:GlobalStyle.color.primary500,
      flexDirection:'row',
      justifyContent:'space-between',
      borderRadius:6,
      elevation:3,
      shadowColor:GlobalStyle.color.gray500,
      shadowOffset:{width:1, height:1},
      shadowOpacity:0.4

    },
    defText:{
color: GlobalStyle.color.primary50,
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
        color:GlobalStyle.color.primary500


    },
    amountContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal:12,
        paddingVertical:4,
        borderRadius:4,
        minWidth:80
    },
    pressed:{
        opacity:0.75

    }
    });