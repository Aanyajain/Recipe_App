import React,{useEffect,useCallback} from 'react';
import {View,Button,Image,Text,StyleSheet,ScrollView} from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import {useSelector,useDispatch} from 'react-redux';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {toggleFav} from '../store/actions/mealsActions';

const ListItem=props=>{
  return<View style={styles.listItem}>
    <Text>{props.children}</Text>
  </View>
}

const MealDetailsScreen=props=>{
  const availableMeals=useSelector(state=>state.meals.meals);

    const mealId=props.navigation.getParam('mealId');
    const isFavMeal=useSelector(state=>state.meals.favMeals.some(
      meal=>meal.id===mealId
    ));
    
    const selectedMeal=availableMeals.find(meal=>meal.id===mealId);

    const dispatch=useDispatch();

    const toggleFavHandler=useCallback(()=>{
      dispatch(toggleFav(mealId));
    },[dispatch,mealId]);

   useEffect(()=>{
    //  props.navigation.setParams({mealTitle:selectedMeal.title})

    props.navigation.setParams({toggle:toggleFavHandler});
   },[toggleFavHandler]);

   useEffect(() => {
     props.navigation.setParams({isFav:isFavMeal})
   }, [isFavMeal]);


    return(
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
         <Text>
           {selectedMeal.duration}m
         </Text>
         <Text>
           {selectedMeal.complexity.toUpperCase()}
         </Text>
         <Text>
           {selectedMeal.affordability.toUpperCase()}
         </Text>
       </View>
         <Text style={styles.title}>Ingredients</Text>
         {selectedMeal.ingredients.map(ing=>(
          <ListItem key={ing}>{ing}</ListItem>
        ))}

        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step=>(
          <ListItem key={step}>{step}</ListItem>
        ))}

      <View style={styles.screen}>
          <Text>
              {selectedMeal.title}
          </Text>
          {/* <Button title="go to root" onPress={()=>{
              props.navigation.popToTop();//takes to categories screen

          }} /> */}
      </View>
      </ScrollView>
    );
}

MealDetailsScreen.navigationOptions=navigationData=>{
  
  const mealId=navigationData.navigation.getParam('mealId');
   const mealTitle=navigationData.navigation.getParam('mealTitle');
  const toggleFavorite=navigationData.navigation.getParam('toggle');

 const isFavorite=navigationData.navigation.getParam("isFav");

  // const selectedMeal=MEALS.find(meal=>meal.id===mealId);
    return{
        headerTitle:mealTitle,
        headerRight:(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favorite" 
            iconName={isFavorite?"ios-star":"ios-star-outline"} 
            onPress={toggleFavorite} />
        </HeaderButtons>
        )
    };
};

const styles=StyleSheet.create({
image:{
width:'100%',
height:200
},
details:{
  flexDirection:'row',
  padding:15,
  justifyContent:'space-around'
},
title:{
  fontFamily:'open-sans-bold',
  fontSize:24,
  textAlign:'center',
},
listItem:{
  marginHorizontal:10,
  marginVertical:10,
  borderColor:'#ccc',
  borderBottomWidth:0.8,
  padding:4,
}
})

export default MealDetailsScreen;