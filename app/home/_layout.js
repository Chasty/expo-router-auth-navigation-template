import { View, Text } from "react-native";
import { Slot } from "expo-router";

const Header = () => {
  return (
    <View style={{ height: 100, width: "100%", backgroundColor: "red" }}>
      <Text style={{ textAlign: "center" }}>My App</Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={{ height: 100, width: "100%", backgroundColor: "green" }}>
      <Text style={{ textAlign: "center" }}>My Footer</Text>
    </View>
  );
};

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
}
