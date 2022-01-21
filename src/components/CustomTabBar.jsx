import React from "react";
import { View, TouchableOpacity } from "react-native";

import { COLORS, icons } from "../../constants";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

const CustomTabBar = (props) => {
  return (
    <View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 30,
          backgroundColor: COLORS.white,
        }}
      ></View>
      <BottomTabBar {...props.props} />
    </View>
  );
};
export default CustomTabBar;
