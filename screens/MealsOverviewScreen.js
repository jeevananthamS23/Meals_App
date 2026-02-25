import react from "react"
import { Text,View,StyleSheet ,FlatList} from "react-native";
import { MEALS ,CATEGORIES} from "../data/dummy-data";
import MealItem from "../Components/MealItem";
import { useEffect,useLayoutEffect } from "react";


export default function MealsOverview({route,navigation}){
    const catId=route.params.CategoryId;

    const displayMeals=MEALS.filter((mealitem)=>{
        return mealitem.categoryIds.indexOf(catId)>=0;
    });

      useLayoutEffect(()=>{
         
         const categoryTitle=CATEGORIES.find((category)=>category.id===catId).title;
         navigation.setOptions({
            title:categoryTitle,
         });                              // for setting the option dynamically using navigation and useEffect,useLayoutEffect for smooth transistion

      },[catId,navigation])

    function RenderMealItem(itemData){
        const item=itemData.item;
        const data={id:item.id,title:item.title,image:item.imageUrl,duration:item.duration,complexity:item.complexity,affordability:item.affordability}
        return <MealItem {...data}/>
    }
    return<View style={style.container}>
        <FlatList data={displayMeals} keyExtractor={(item)=>item.id} renderItem={RenderMealItem}/>
    </View>;
}

const style=StyleSheet.create({
    container:{
        flex:1,
    }
})