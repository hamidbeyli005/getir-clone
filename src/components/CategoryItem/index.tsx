import { Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Category } from "../../models/category";

const CategoryItem = ({ category }: { category: Category }) => {
  return (
    <TouchableOpacity style={styles.categoryItem}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.categoryImage}
          source={{
            uri: category.src,
          }}
        />
      </View>
      <Text style={styles.categoryName}>{category.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
