import React from 'react';
import {View,Button,Image,Text,StyleSheet,ScrollView} from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const ListItem=props=>{
  return<View style={styles.listItem}>
    <Text>{props.children}</Text>
  </View>
}

const MealDetailsScreen=props=>{

    const mealId=props.navigation.getParam('mealId');
    const selectedMeal=MEALS.find(meal=>meal.id===mealId);

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
    const selectedMeal=MEALS.find(meal=>meal.id===mealId);
    return{
        headerTitle:selectedMeal.title,
        headerRight:(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favorite" iconName="ios-star" onPress={()=>{
                console.log("mark as favorite!")
            }} />
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