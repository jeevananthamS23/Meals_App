import { View,Text,Image,StyleSheet ,ScrollView ,Button} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../Components/MealDetail"; //reusable component
import SubTitle from "../Components/MealDeatil/Subtitle"; // reusable component
import List from "../Components/MealDeatil/List"; // reusable Components
import { useEffect,useLayoutEffect } from "react";
import IconButton from "../Components/InconButton";
import { useNavigation } from "@react-navigation/native";


export default function MealDetailScreen({route,navigation}){
    const MealId=route.params.Mealid;
    const selectedMeal=MEALS.find((meal)=>meal.id===MealId);
    const navigation1=useNavigation();
    function headerButtonHandler(){
        navigation1.navigate('MealsCategory');
    }

    
    useLayoutEffect(()=>{
             navigation.setOptions({
                headerRight:()=>{
                    return <IconButton icon={'home'} color={'white'} onPress={headerButtonHandler}/>
                }
             })
    },[navigation,headerButtonHandler])



    return <ScrollView style={styles.rootContainer}>
        <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}  textStyle={styles.detailText}/>
       
    <View style={styles.ListOuterContainer}>

           
      <View style={styles.ListContainer}>

       <SubTitle subTitle={"Ingridients"} />
       <List data={selectedMeal.ingredients}/>

       <SubTitle subTitle={"steps"} />
       <List data={selectedMeal.steps}/>

      </View>

         
    </View>
     
    
        
    </ScrollView>;
}

const styles=StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
      image:{
        width:'100%',
        height:350,
      },
      title:{
       fontWeight:'bold',
       fontSize:24,
       margin:8,
       textAlign:"center",
       color:"white",
   },
   detailText:{
    color:'white',
   },
   ListOuterContainer:{
     alignItems:'center'
   },
   ListContainer:{
    width:'80%'
   }
})