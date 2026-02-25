import {View,Text,StyleSheet} from "react-native";

export default function List({data}){
    return data.map((dataItem)=>
    <View key={dataItem} style={styles.listItem}>

        <Text style={styles.ItemText}>{dataItem}</Text>
    </View>)
}
const styles=StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497'
    }
    ,
    ItemText:{
        color:'#351401',
        textAlign:'center'

    }
})