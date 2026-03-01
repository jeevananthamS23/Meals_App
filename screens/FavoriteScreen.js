import { View,Text,StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favorite-context";
import { useContext } from "react";
import Meallist from "../Components/MealList/Meal_list";

export default function FavoriteScreen(){
    const favorite=useContext(FavoriteContext);
    const dataForFavorite=MEALS.filter((data)=>favorite.ids.includes(data.id));
    if(dataForFavorite.length===0){
        return(
            <View style={style.root}>
                <Text style={style.Text}>Oops No Meals Add Yet</Text>
            </View>
        )
    }
    return(
       <Meallist data={dataForFavorite}/>
    );
}
const style=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    Text:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    }
})