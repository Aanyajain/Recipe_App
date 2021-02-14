import React from 'react';
import {View,Text,Button,StyleSheet,Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen=props=>{

   const catId=props.navigation.getParam('categoryId');
   const selectedCategory=CATEGORIES.find(cat=>cat.id===catId);

    return(
      <View style={styles.screen}>
          <Text>
              {selectedCategory.title}
          </Text>
          <Button title="Details"  onPress={()=>{
            //   props.navigation.push('meals')//it helps to take to sam escreen
            // used when on sam escreen diff content is loaded
            
            props.navigation.navigate({routeName:'details'})
          }} />
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