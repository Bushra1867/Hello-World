import React from "react";
import { View, StyleSheet}from 'react-native';
import SummeryExpenses from "./SummeryExpenses";
import ExpensesList from "./ExpensesList";

const Dummy_Expenses = [ 
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 55.10,
        date: new Date('2022-01-19')
},
    {
        id: 'e2',
        description: 'bananas',
        amount: 58,
        date: new Date('2022-01-20')

    },
    {
        id: 'e3',
        description: 'A book',
        amount: 50,
        date: new Date('2022-01-18')
    },
   {
      id: 'e4',
      description: 'Cup of coffee',
      amount: 10,
      date: new Date('2022-01-18')
   },
   {
    id: 'e5',
    description: 'A pair of shoes',
    amount: 55.10,
    date: new Date('2022-01-19')
},
{
    id: 'e6',
    description: 'bananas',
    amount: 58,
    date: new Date('2022-01-20')

},
{
    id: 'e7',
    description: 'A book',
    amount: 50,
    date: new Date('2022-01-18')
},
{
  id: 'e8',
  description: 'Cup of coffee',
  amount: 10,
  date: new Date('2022-01-18')
}
]

function ExpensesOutPut ({expenses, period}){
    return (

<View style={styles.Screen}>
           <SummeryExpenses  periodName={period} expensesSum={Dummy_Expenses}/>
            <ExpensesList expensesList={Dummy_Expenses}/>
        </View>
    )

}
export default ExpensesOutPut;

const styles = StyleSheet.create({
    Screen: {
      PaddingHorizontal: 14,
      paddingBottom:0,
      paddingTop:17
    },
  });