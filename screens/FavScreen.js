import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {HeaderButton} from '../components/HeaderButton';

const FavScreen=props=>{
    const favoriteMeals=useSelector(state=>state.meals.favMeals);
  
    if(favoriteMeals.length===0 || !favoriteMeals)
    {
        return (
        <View style={styles.content}>
            <Text style={{fontFamily:'open-sans-bold'}}>No favorite meals found.Start adding some</Text>
        </View>
        )
    }

    return(
        <MealList listData={favoriteMeals} navigation={props.navigation} />
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
},
content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
});

export default FavScreen;