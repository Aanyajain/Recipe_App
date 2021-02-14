import React from 'react';
import {View,Text,Button,StyleSheet,Platform} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {CATEGORIES,MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen=props=>{

  const renderMealItem=itemData=>{
    return(
     <MealItem title={itemData.item.title} 
     duration={itemData.item.duration}
     complexity={itemData.item.complexity}
     affordability={itemData.item.affordability}
     image={itemData.item.imageUrl}
     onSelectMeal={()=>{
       props.navigation.navigate({routeName:'details',params:{
         mealId:itemData.item.id
       }})
     }} />
    )
  }

   const catId=props.navigation.getParam('categoryId');
  //  const selectedCategory=CATEGORIES.find(cat=>cat.id===catId);
   const displayedMeals=MEALS.filter(
     meal=>meal.categoryIds.indexOf(catId)>=0
   );

    return(
      <View style={styles.screen}>
          {/* <Text>
              {selectedCategory.title}
          </Text> */}
          <FlatList style={{width:'100%'}} data={displayedMeals} renderItem={renderMealItem} />
          {/* <Button title="Details"  onPress={()=>{
            //   props.navigation.push('meals')//it helps to take to sam escreen
            // used when on sam escreen diff content is loaded
            
            props.navigation.navigate({routeName:'details'})
          }} /> */}
      </View>
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

const styles=StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
}
})

export default CategoryMealsScreen;