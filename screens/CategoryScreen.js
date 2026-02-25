import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../Components/CategoryGrid";


export default function Categories_Screen({navigation}){
function  FunctionRender(itemdata){
    function FunctionNavigate(){
        navigation.navigate('MealsOverView',{
            CategoryId:itemdata.item.id,
        });
    }
    return <CategoryGrid title={itemdata.item.title} color={itemdata.item.color} onPress={FunctionNavigate}/>
}

    return <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={FunctionRender} numColumns={"2"}/>
}