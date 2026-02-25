import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Categories_Screen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
const Stack=createNativeStackNavigator();

export default function App() {
  return <>
   <StatusBar style="light"/>
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#351401'},headerTintColor:'white',contentStyle:{backgroundColor:'#3f2f25'}}}>
      <Stack.Screen name='MealsCategory' component={Categories_Screen} options={{title:'All Category',}}/>
      <Stack.Screen name='MealsOverView' component={MealsOverview}
      
      // options={({route,navigation})=>{
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
