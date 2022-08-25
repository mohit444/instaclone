import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/images/Instagram_Logo_2016.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={{
              uri: "https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/344/external-plus-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={{
              uri: "https://img.icons8.com/sf-regular/344/like.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={{
              uri: "https://img.icons8.com/material-outlined/344/facebook-messenger--v1.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    marginLeft: 10,
    width: 30,
    height: 30,
  },
});
