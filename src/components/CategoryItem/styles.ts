import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  categoryItem: {
    width: width * 0.25,
    height: width * 0.28,
    alignItems: "center",
    paddingVertical: 12,
  },
  imageContainer: {
    width: "80%",
    height: "90%",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  categoryName: {
    fontWeight: 600,
    fontSize: 12,
    color: "#616161",
    marginTop: 4,
  },
});
