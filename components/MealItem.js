import React from 'react';
import {View,Text,StyleSheet,Platform,FlatList,ImageBackground,TouchableOpacity,TouchableNativeFeedback} from 'react-native';
import Meal from '../models/meal';

const MealItem=props=>{
  let Comp=TouchableOpacity;

  if(Platform.OS==="android" && Platform.version>=21)
  {
      Comp=TouchableNativeFeedback;
  }
    return(
      <View style={styles.screen}>
       <Comp onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow,...styles.mealHeader}}>
            <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
          <View style={styles.titleCont}>
          <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>
        </View>
        </ImageBackground>
          </View>
       <View style={{...styles.mealRow,...styles.mealData}}>
         <Text>
           {props.duration}m
         </Text>
         <Text>
           {props.complexity.toUpperCase()}
         </Text>
         <Text>
           {props.affordability.toUpperCase()}
         </Text>
       </View>
      </View>
      </Comp>
      </View>
    );
};

const styles=StyleSheet.create({
  screen:{
    height:200,
    width:'100%',
    backgroundColor:'#f5f5f5',
    borderRadius:10,
    overflow:'hidden',
  },
  mealRow:{
    flexDirection:'row'
  },
  mealHeader:{
height:'85%',
  },
  mealData:{
    height:'15%',
    paddingHorizontal:10,
    justifyContent:'space-between',
    alignItems:'center',
  },
  bgImage:{
    height:'100%',
    width:'100%',
    justifyContent:'flex-end'
  },
  titleCont:{
    paddingVertical:6,
    backgroundColor:'rgba(0,0,0,0.4)',
    paddingHorizontal:14,
  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize:20,
    color:'white',
    textAlign:'center',
  }
});

export default MealItem;