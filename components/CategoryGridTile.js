import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet,Platform,TouchableNativeFeedback, TouchableNativeFeedbackBase} from 'react-native';

const CategoryGridTile=props=>{
    let Comp=TouchableOpacity;

    if(Platform.OS==="android" && Platform.version>=21)
    {
        Comp=TouchableNativeFeedback;
    }

    return(
        <View style={styles.grid}>
        <Comp style={{flex:1}} onPress={props.onSelect}>
        <View style={{...styles.cont,...{backgroundColor:props.color}}}>
            <Text style={styles.title} numberOfLines={2}>
                {props.title}                
            </Text>
        </View>
        </Comp>
        </View>
    );
};

const styles=StyleSheet.create({
    grid:{
        flex:1,   
        margin:10,
        height:160,
        borderRadius:10,
        elevation:4,//for android
        //for IOS,no need for eleevation 
        overflow:Platform.OS==="android" && Platform.Version>=21 ?'hidden':"visible"
    },
    cont:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5,
        shadowRadius:10,
        justifyContent:'center',
        alignItems:'center'

    },
    title:{
        fontSize:24,
        color:'white',
        fontFamily:'open-sans-bold'
    }
});

export default CategoryGridTile;