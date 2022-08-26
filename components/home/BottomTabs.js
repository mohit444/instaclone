import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const iconstabs = [
  {
    name: "Home",
    active: "md-home-sharp",
    inactive: "md-home-outline",
  },
  {
    name: "Search",
    active: "search-sharp",
    inactive: "search-outline",
  },
  {
    name: "Reels",
    active: "play-circle",
    inactive: "play-circle-outline",
  },
  {
    name: "Heart",
    active: "heart-sharp",
    inactive: "heart-outline",
  },
  {
    name: "User",
    active: "person-circle-sharp",
    inactive: "person-circle-outline",
  },
];

const BottomTabs = ({ icons }) => {
  return (
    <View>
      <Text>BottomTabs</Text>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
