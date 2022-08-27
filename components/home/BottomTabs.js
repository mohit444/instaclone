import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

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
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <View>
      {icons.map((icon, index) => (
        <Icon key={index} name={icon.active} />
      ))}
    </View>
  );
};

const Icon = (props) => <Ionicons name={props.name} size={30} />;

export default BottomTabs;

const styles = StyleSheet.create({});
