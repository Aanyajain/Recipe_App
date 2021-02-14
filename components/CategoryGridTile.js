import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native';

const CategoryGridTile=props=>{
    return(
        <TouchableOpacity style={styles.grid} onPress={props.onSelect}>
        <View syle={{...styles.cont,...{backgroundColor:props.color}}}>
            <Text>
                {props.title}
                
            </Text>
        </View>
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    grid:{
        flex:1,   
        margin:10,
        height:160
    },
    cont:{
        flex:1,
    }
});

export default CategoryGridTile;