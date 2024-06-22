import { View } from "react-native";
import React, { useState } from "react";
import CategoryItem from "../CategoryItem";
import { styles } from "./styles";
import { Category } from "../../models/category";
import { CATEGORIES } from "../../mock/categories";

const MainCategories = () => {
  const [categories, setCategories] = useState<Category[]>(CATEGORIES);

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </View>
  );
};

export default MainCategories;
