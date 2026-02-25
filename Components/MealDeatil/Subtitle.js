import { View,Text,StyleSheet } from "react-native";

export default function SubTitle({subTitle}){

    return <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
}

const styles=StyleSheet.create({
    subTitle:{
    color:'#e2b497',
    fontSize:18,
    fontWeight:'bold',
   
    textAlign:"center",
 
   },
   subTitleContainer:{
    marginHorizontal:12,
    marginVertical:4,
    padding:6,
    borderBottomColor:'#e2b497',
    borderBottomWidth:2,
   }
})