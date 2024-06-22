import { Dimensions, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { BANNERS } from "../../mock/banners";

const { width } = Dimensions.get("window");

const BannerCarusel = () => {
  const [banners, setBanners] = useState(BANNERS);

  return (
    <FlatList
      data={banners}
      renderItem={(item) => (
        <Image source={{ uri: item.item }} style={styles.image} />
      )}
      showsHorizontalScrollIndicator={false}
      horizontal
      snapToInterval={width}
      snapToAlignment={"center"}
      decelerationRate={"fast"}
    />
  );
};

export default BannerCarusel;
