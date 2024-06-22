import React from "react";
import { Image, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Address Section */}
      <View style={styles.addressContainer}>
        <Image
          style={styles.houseIcon}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.addressTextContainer}>
          <Text style={styles.addressTitle}>EV</Text>
          <Text
            style={styles.addressDescription}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Dedepaşa Blv. Yenişehir Mahallesi...
          </Text>
        </View>
        <AntDesign
          name="right"
          size={16}
          color="#5E38C0"
        />
      </View>

      {/* Delivery Info Section */}
      <View style={styles.deliveryInfoContainer}>
        <Text style={styles.deliveryTitle}>TVS</Text>
        <Text style={styles.deliveryTime}>
          17<Text style={styles.deliveryUnit}>dk</Text>
        </Text>
      </View>
    </View>
  );
};

export default Header;
