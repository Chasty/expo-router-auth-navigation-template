import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";
import { useAuth } from "../../context/auth";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const onLogin = async () => {
    await AsyncStorage.setItem("user", JSON.stringify({ name: "Willy" }));
    signIn();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={email}
        placeholder="Type email"
      />
      <TextInput
        style={styles.textInput}
        value={password}
        placeholder="Type password"
      />
      <Button onPress={onLogin} title="Login"></Button>
      <Button
        onPress={() => router.push("/register")}
        title="Register"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "red",
    marginTop: 8,
    width: "60%",
  },
});
