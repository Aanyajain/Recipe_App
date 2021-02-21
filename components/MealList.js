import React from 'react';
import {FlatList,View,Text,StyleSheet} from 'react-native';
import MealItem from './MealItem';
import {useSelector} from 'react-redux';

const MealList=props=>{
  const favMeals=useSelector(state=>state.meals.favMeals);

    const renderMealItem=itemData=>{

      const isFav=favMeals.find(meal=>meal.id===itemData.item.id);

        return(
         <MealItem title={itemData.item.title} 
         duration={itemData.item.duration}
         complexity={itemData.item.complexity}
         affordability={itemData.item.affordability}
         image={itemData.item.imageUrl}
         onSelectMeal={()=>{
           props.navigation.navigate({routeName:'details',params:{
             mealId:itemData.item.id,
             mealTitle:itemData.item.title,
             isFavorite:isFav
           }})
         }} />
        )
      }
    return(
<View style={styles.list}>
        <FlatList style={{width:'100%'}}
         data={props.listData}
          renderItem={renderMealItem} />
    </View>
    );
};

const styles=StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
});


export default MealList;