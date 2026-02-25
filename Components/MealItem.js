import react from "react";
import { View,Text, StyleSheet,Pressable,Image,Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetail";  //reusable component

export default function MealItem({id,title,image,duration,complexity,affordability}){
    const navigation=useNavigation();
    function navigateToDetail(){
        
            navigation.navigate('Meal_Detail',{
                Mealid:id
            });
    }
    return<View style={styles.mealitem}> 
    <View style={styles.innerContainer}>
           <Pressable android_ripple={{color:"#ccc"}} style={({pressed})=>[pressed?styles.Pressed_button:null]} onPress={navigateToDetail}>
            <View>
                <Image  source={{uri:image}}  style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetail duration={duration} complexity={complexity} affordability={affordability}/>  
           
        </Pressable>
    </View>
      
    </View>

}

const styles=StyleSheet.create({
 mealitem:{
    margin:16,
    borderRadius:8,
    overflow:'hidden',
    backgroundColor:'white',
    elevation:4,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
    overflow:Platform.OS==='android'?'hidden':'visible',//new
 },
 image:{
    width:'100%',
    height:200,
 },
   Pressed_button:{
        opacity:0.5,
    },
 innerContainer:{
    borderRadius:8,
    overflow:'hidden'
 }
 ,
 title:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
 }
})