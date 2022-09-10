import React from "react";
import { View}from 'react-native';
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
   }
]

function ExpensesOutPut ({expenses, period}){
    return (

<View>
           <SummeryExpenses  periodName={period} expensesSum={Dummy_Expenses}/>
            <ExpensesList expensesList={Dummy_Expenses}/>
        </View>
    )

}
export default ExpensesOutPut;