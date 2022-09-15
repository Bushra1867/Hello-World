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
import IconButton from './componants/IconButton';
import { GlobalStyle } from './constant/styles';

 const Stack = createNativeStackNavigator();
const BottomTab =createBottomTabNavigator();

function Tab(){ 
return(
<BottomTab.Navigator  screenOptions={({navigation}) => ({
    headerStyle:{backgroundColor:GlobalStyle.color.primary500},
    headerTintColor:GlobalStyle.color.primary50,
    tabBarStyle: {backgroundColor:GlobalStyle.color.primary500},
    tabBarActiveTintColor:GlobalStyle.color.accent500,
    headerRight: ({tintColor}) => <IconButton icon='add' size={24} color={tintColor} onPress={() => {navigation.navigate('ManageExpenses')}}/>
  })} >
      <BottomTab.Screen name='RecentExpenses' 
      component={RecentExpenses} options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({color,size}) => {return <Icon 
        name='hourglass'
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
      <Stack.Navigator  screenOptions={
        {
          headerStyle:{ backgroundColor:GlobalStyle.color.primary500 },
           headerTintColor:'white'
        }
      }>
    <Stack.Screen name='Tab' component={Tab}  options={{
    headerShown: false
  }}/>
   <Stack.Screen name='ManageExpenses' component={manageExpenses}options={{
    presentation:'modal'
  }}/>
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




