import { ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import BannerCarusel from "../../components/BannerCarusel";
import { styles } from "./styles";
import MainCategories from "../../components/MainCategories";

const HomeScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.container}>
      <Header />
      <BannerCarusel />
      <MainCategories />
    </ScrollView>
  );
};

export default HomeScreen;
