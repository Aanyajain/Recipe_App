import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';

const MealDetailsScreen=props=>{
    return(
      <View style={styles.screen}>
          <Text>
              The meal details screen!
          </Text>
          {/* <Button title="go to root" onPress={()=>{
              props.navigation.popToTop();//takes to categories screen

          }} /> */}
      </View>
    );
}

const styles=StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
}
})

export default MealDetailsScreen;