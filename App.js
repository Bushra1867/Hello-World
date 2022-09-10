import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import manageExpenses from './screens/manageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from "@rneui/themed";

 const Stack = createNativeStackNavigator();
const BottomTab =createBottomTabNavigator();

function Tab(){ 
return(
<BottomTab.Navigator  screenOptions={{
    headerStyle:{backgroundColor: '#3e04c3'},
    headerTintColor: '#e4d9fd',
    tabBarStyle: {backgroundColor:'#3e04c3'},
    tabBarActiveTintColor:'#3e04c3',
  }} >
      <BottomTab.Screen name='RecentExpenses' 
      component={RecentExpenses} options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({color,size}) => {return <Icon name='hourglass-outline'
        type='ionicon'
        color={color}
        size={size} />
        }

}}/>
      <BottomTab.Screen name='AllExpenses' component={AllExpenses}
      options={{
        title: 'AllExpensess',
        tabBarLabel: 'AllExpenses',
        tabBarIcon: ({color,size}) => {
       return <Icon name='calendar-outline'
        type='ionicon'
        color={color}
        size={size} />
        }

      }}/>
 </BottomTab.Navigator>
  )
} 


 function App() {
return(
  <SafeAreaProvider style={styles.Screen}>
 <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name='Tab' component={Tab}  options={{
    headerShown: false
  }}/>
   <Stack.Screen name='ManageExpenses' component={manageExpenses}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
   );
}
export default App;
const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
});




