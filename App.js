import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Categories_Screen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();


function  DrawerNavigation(){
      
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Category"  component={Categories_Screen}/>
        <Drawer.Screen name="Favorite" component={FavoriteScreen}/>
      </Drawer.Navigator>
    );         
     
}




export default function App() {
  return <>
   <StatusBar style="light"/>
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#351401'},headerTintColor:'white',contentStyle:{backgroundColor:'#3f2f25'}}}>
      <Stack.Screen name='MealsCategory' component={DrawerNavigation} options={{title:'All Category',}}/>
      <Stack.Screen name='MealsOverView' component={MealsOverview}
      
      // options={({route})=>{
      //   const catId=route.params.CategoryId;  // setting options dynamically using the route and navigation
      //   return{
      //     title:catId,// one way
      //   };
      // }}
      
      />
    <Stack.Screen name='Meal_Detail' component={MealDetailScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import * as React from 'react';
// import { View, Text } from 'react-native';

// export default function App() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Test App</Text>
//     </View>
//   );
// }