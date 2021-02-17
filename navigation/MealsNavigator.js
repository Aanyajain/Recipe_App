import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import FiltersScreen from '../screens/FiltersScreen';
import FavScreen from '../screens/FavScreen';
import {Platform,Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

const defaultStackNavOptions={
    headerStyle:{
        backgroundColor:Platform.OS==="android"?Colors.primaryColor:"",
    },
    headerTitleStyle:{
        fontFamily:'open-sans-bold'
    },
    headerTintColor:Platform.OS==="android"?'white':Colors.primaryColor,
};

const MealsNavigator=createStackNavigator({
    categories:CategoriesScreen,
    meals:CategoryMealsScreen,
    details:MealDetailsScreen,
},{
    // default options here are overridden by ones in screens 
    defaultNavigationOptions:defaultStackNavOptions});

const FavNavigator=createStackNavigator({
    Favorites:FavScreen,
    details:MealDetailsScreen,
},{
    defaultNavigationOptions:defaultStackNavOptions});

const tabScreenConfig={
    Meals:{screen:MealsNavigator,navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        },
        tabBarLabel:Platform.OS==="android"?<Text style={{fontFamily:'open-sans-bold'}}>Meals</Text>:"Meals",
        tabBarColor:Colors.primaryColor
    }
},
    Favorites:{screen:FavNavigator,navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        },
        tabBarLabel:Platform.OS==="android"?<Text style={{fontFamily:'open-sans-bold'}}>Favorites</Text>:"Favorites",
        tabBarColor:Colors.secondaryColor
    }
}}

const FavTabNavigator=Platform.OS==="android"?
createMaterialBottomTabNavigator(tabScreenConfig,{
    activeColor:'white',
    shifting:true,

}):createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions:{
        activeTintColor:Colors.secondaryColor
    }
});

const FiltersNavigator=createStackNavigator({
    Filters:FiltersScreen
},{
    navigationOptions:{
        drawerLabel:"Filters"
    },
    defaultNavigationOptions:defaultStackNavOptions});

const MainNavigator=createDrawerNavigator({
    MealsFav:FavTabNavigator,
    Filters:FiltersNavigator
});

export default createAppContainer(MainNavigator);