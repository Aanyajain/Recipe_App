import React from 'react';
import {View,Text,Button,Platform,TouchableOpacity,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoriesScreen=props=>{

    const renderGridItem=itemData=>{
        return(
            <TouchableOpacity style={styles.grid} onPress={()=>{
                props.navigation.navigate({routeName:'meals',params:{
                    categoryId:itemData.item.id
                }})
            }}>
            <View>
                <Text>
                    {itemData.item.title}
                </Text>
            </View>
            </TouchableOpacity>
        )
    }
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
grid:{
    flex:1,
    
    margin:10,
    height:160
}
})

export default CategoriesScreen;