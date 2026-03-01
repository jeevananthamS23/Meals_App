import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import Meallist from "../Components/MealList/Meal_list";

export default function MealsOverview({ route, navigation }) {
  const catId = route.params.CategoryId;

  const displayMeals = MEALS.filter((mealitem) =>
    mealitem.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return(
    <Meallist data={displayMeals}/>
  )


}

