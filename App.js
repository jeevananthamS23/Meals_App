import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Categories_Screen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import {Ionicons} from "@expo/vector-icons"
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteContextProvider from './store/context/favorite-context';

const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();


function  DrawerNavigation(){
      
    return(
      <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:'#351401'},
      headerTintColor:'white',
      sceneContainerStyle:{backgroundColor:'#3f2f25'},
      drawerContentStyle:{backgroundColor:'#351401'},
      drawerInactiveTintColor:"white",
      drawerActiveTintColor:"#351401",
      drawerActiveBackgroundColor:"#e4baa1"}}>
        <Drawer.Screen name="Category"  component={Categories_Screen} options={{drawerIcon:({color,size})=><Ionicons name="list" color={color} size={size}/>}}/>
        <Drawer.Screen name="Favorite" component={FavoriteScreen} options={{drawerIcon:({color,size})=><Ionicons name="star" color={color} size={size}/>}}/>
      </Drawer.Navigator>
    );         
     
}




export default function App() {
  return <>
   <StatusBar style="light"/>
   <FavoriteContextProvider>
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#351401'},headerTintColor:'white',contentStyle:{backgroundColor:'#3f2f25'}}}>
      <Stack.Screen name='MealsCategory' component={DrawerNavigation} options={{headerShown:false}}/>
      <Stack.Screen name='MealsOverView' component={MealsOverview}
      
      // options={({route})=>{
      //   const catId=route.params.CategoryId;  // setting options dynamically using the route and navigation
      //   return{
      //     title:catId,// one way
      //   };
      // }}
     
      />
    <Stack.Screen name='Meal_Detail' component={MealDetailScreen}  options={{title:"About the Meal"}}/>
    </Stack.Navigator>
   </NavigationContainer>
   </FavoriteContextProvider>
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