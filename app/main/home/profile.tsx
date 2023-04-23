import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Profile() {
  const { signOut } = useAuth();
  const router = useRouter();

  const onLogOut = async () => {
    await AsyncStorage.removeItem("user");
    signOut();
  };

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button onPress={onLogOut} title="LogOut"></Button>
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
