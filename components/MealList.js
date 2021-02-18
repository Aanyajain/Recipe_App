import React from 'react';
import {FlatList,View,Text,StyleSheet} from 'react-native';
import MealItem from './MealItem';

const MealList=props=>{
    const renderMealItem=itemData=>{
        return(
         <MealItem title={itemData.item.title} 
         duration={itemData.item.duration}
         complexity={itemData.item.complexity}
         affordability={itemData.item.affordability}
         image={itemData.item.imageUrl}
         onSelectMeal={()=>{
           props.navigation.navigate({routeName:'details',params:{
             mealId:itemData.item.id,
             mealTitle:itemData.item.title
           }})
         }} />
        )
      }
    return(
<View style={styles.list}>
        <FlatList style={{width:'100%'}}
         data={props.listData}
          renderItem={renderMealItem} />
    </View>
    );
};

const styles=StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
});


export default MealList;