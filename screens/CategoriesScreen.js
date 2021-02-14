import React from 'react';
import {View,Text,Button,Platform,TouchableOpacity,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen=props=>{

    const renderGridItem=itemData=>{
        return(
            <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={()=>{
                    props.navigation.navigate({routeName:'meals',
                    params:{
                        categoryId:itemData.item.id
                    }
                });
            }} />
        )
        };

    return(
     
       <FlatList 
       data={CATEGORIES} 
       renderItem={renderGridItem}
       numColumns={2}
       />
    );
}

CategoriesScreen.navigationOptions={
    headerTitle:"Meal Categories",
};

const styles=StyleSheet.create({

})

export default CategoriesScreen;