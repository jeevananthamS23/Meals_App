import React from "react";
import { View,FlatList,StyleSheet} from "react-native";
import MealItem from "./MealItem";

export default function Meallist({data}){
    function renderMealItem(itemData) {
    const item = itemData.item;

    return (
      <MealItem
        id={item.id}
        title={item.title}
        image={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      />
    );
  }

    return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});