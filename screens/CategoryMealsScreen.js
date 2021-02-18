import React from 'react';
import {View,Text,Button,StyleSheet,Platform} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {CATEGORIES} from '../data/dummy-data';
import {useSelector} from 'react-redux';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealsScreen=props=>{

   const catId=props.navigation.getParam('categoryId');
  //  const selectedCategory=CATEGORIES.find(cat=>cat.id===catId);
   const availableMeals=useSelector(state=>state.meals.filteredMeals); 
  
  const displayedMeals=availableMeals.filter(
     meal=>meal.categoryIds.indexOf(catId)>=0
   );

    return(
      <MealList listData={displayedMeals} navigation={props.navigation} />
      );
}

CategoryMealsScreen.navigationOptions=navigationData=>{
  // console.log(navigationData);
  const catId=navigationData.navigation.getParam('categoryId');
  const selectedCategory=CATEGORIES.find(cat=>catId===cat.id);
  return{
    headerTitle:selectedCategory.title,
  };
};

export default CategoryMealsScreen;