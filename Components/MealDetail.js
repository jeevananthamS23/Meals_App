import { View ,Text,StyleSheet} from "react-native";
export default function MealDetail({duration,complexity,affordability,style,textStyle}){

    return     <View style={[styles.details,style]}>
    
                <Text style={[styles.detailsItem,textStyle]}>{duration}m</Text>
                <Text style={[styles.detailsItem,textStyle]}>{complexity}</Text>
                <Text style={[styles.detailsItem,textStyle]}>{affordability}</Text>
    
                </View>;
}

const styles=StyleSheet.create({
    details:{
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 padding:8,

 },
 detailsItem:{
    marginHorizontal:4,
    fontSize:15,

 }
})
