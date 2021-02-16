import React,{useState} from 'react';
import {View,Text,Switch,StyleSheet} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {HeaderButton} from '../components/HeaderButton';

const FiltersScreen=props=>{
    return(
      <View style={styles.screen}>
          <Text style={styles.title}>
             Available Filters / Restrictions
          </Text>
          <View style={styles.filterCont}>
              <Text>Gluten-Free</Text>
          </View>
          <Switch />
      </View>
    );
}

FiltersScreen.navigationOptions=navData=>{
    return{
    headerTitle:"Filter Meal",
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
    alignItems: 'center',
    margin:20
},
title:{
    fontFamily:'open-sans-bold',
    fontSize:20,
    margin:10,
    textAlign:'center'
},
filterCont:{
    margin:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
}
})

export default FiltersScreen;