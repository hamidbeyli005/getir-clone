import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import BannerCarusel from "./src/components/BannerCarusel";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <BannerCarusel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
});
