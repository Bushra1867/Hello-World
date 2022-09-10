import React from "react";
import { FlatList,View}from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderItemHandler (itemData){
    return <ExpenseItem {...itemData.item} />
}

function ExpensesList ({expensesList}){
    return <FlatList data={expensesList} renderItem={renderItemHandler}
 keyExtractor={(item)=> item.id}/>
    

}
export default ExpensesList;