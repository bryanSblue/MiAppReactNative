import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://image.api.playstation.com/cdn/UP0006/CUSA00110_00/VaulrBDwbGorU7Ykfjg5sNrJ5X9resKm.png",
        }}
        style={{ width: 200, height: 200 }}
        resizeMode="cover"
      />
      <Text style={{ color: "yellow" }}>BATTLEFIELD 4</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
