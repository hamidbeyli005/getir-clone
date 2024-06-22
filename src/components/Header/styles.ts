import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#FDD200",
  },
  addressContainer: {
    flex: 9,
    padding: 10,
    backgroundColor: "#fff",
    height: height * 0.06,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  houseIcon: {
    width: 26,
    height: 26,
    marginRight: 6,
  },
  addressTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingLeft: 6,
    borderLeftColor: "#EFEDF7",
    borderLeftWidth: 1,
  },
  addressTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  addressDescription: {
    fontSize: 12,
    color: "#666",
  },
  deliveryInfoContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  deliveryTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#5E38C0",
  },
  deliveryTime: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5E38C0",
  },
  deliveryUnit: {
    fontSize: 14,
  },
});
