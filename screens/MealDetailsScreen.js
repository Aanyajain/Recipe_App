import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import {MEALS} from '../data/dummy-data';

const MealDetailsScreen=props=>{

    const mealId=props.navigation.getParam('mealId');
    const selectedMeal=MEALS.find(meal=>meal.id===mealId);

    return(
      <View style={styles.screen}>
          <Text>
              {selectedMeal.title}
          </Text>
          {/* <Button title="go to root" onPress={()=>{
              props.navigation.popToTop();//takes to categories screen

          }} /> */}
      </View>
    );
}

MealDetailsScreen.navigationOptions=navigationData=>{
    const mealId=navigationData.navigation.getParam('mealId');
    const selectedMeal=MEALS.find(meal=>meal.id===mealId);
    return{
        headerTitle:selectedMeal.title
    };
};

const styles=StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
}
})

export default MealDetailsScreen;