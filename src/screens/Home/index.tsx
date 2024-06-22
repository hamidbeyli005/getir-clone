import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import BannerCarusel from "../../components/BannerCarusel";
import { styles } from "./styles";

const Home = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.container}>
      <Header />
      <BannerCarusel />
    </ScrollView>
  );
};

export default Home;
