import { StyleSheet, Text, View } from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
