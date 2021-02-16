import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {HeaderButton} from '../components/HeaderButton';

const FavScreen=props=>{
    const FavMeals=MEALS.filter(meal=>meal.id==="m1" || meal.id==="m2");
    return(
        <MealList listData={FavMeals} navigation={props.navigation} />
    );
}

FavScreen.navigationOptions=navData=>{
    return{
    headerTitle:"Your favorites!",
    headerLeft:(
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" 
        onPress={()=>{
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
    )
    }
};

const styles=StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
}
})

export default FavScreen;