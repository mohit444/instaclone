import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/posts";
import BottomTabs, { iconstabs } from "../components/home/BottomTabs";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={iconstabs} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
