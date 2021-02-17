import React, { useState } from "react";
import { View, Text, Platform, Switch, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterCont}>
      <Text style={{ fontSize: 18 }}>{props.label}</Text>

      <Switch
        trackColor={{
          true:
            Platform.OS === "android"
              ? Colors.secondaryColor
              : Colors.primaryColor,
        }}
        thumbColor={Platform.OS === "android" ? Colors.secondaryColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactose,setLactose]=useState(false);
  const [isVegan,setVegan]=useState(false);
  const [isVeg,setVeg]=useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={(newVal) => setGlutenFree(newVal)}
      />
       <FilterSwitch
        label="Lactose"
        state={isLactose}
        onChange={(newVal) => setLactose(newVal)}
      />
       <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newVal) => setVegan(newVal)}
      />
       <FilterSwitch
        label="vegetarian"
        state={isVeg}
        onChange={(newVal) => setVeg(newVal)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meal",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
  filterCont: {
    // margin:20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});

export default FiltersScreen;
