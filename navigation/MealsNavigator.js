import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import FavScreen from '../screens/FavScreen';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const MealsNavigator=createStackNavigator({
    categories:CategoriesScreen,
    meals:CategoryMealsScreen,
    details:MealDetailsScreen,
},{
    // default options here are overridden by ones in screens 
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS==="android"?Colors.primaryColor:"",
        },
        headerTintColor:Platform.OS==="android"?'white':Colors.primaryColor,
    }
});

const FavTabNavigator=createBottomTabNavigator({
    Meals:MealsNavigator,
    Favorites:FavScreen
});

export default createAppContainer(FavTabNavigator);