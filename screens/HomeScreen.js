import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
