import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
      <View style={styles.separator} />
      <Pressable onPress={onLogin} style={styles.button}>
        <Text style={{ color: "white" }}>Login</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/register")} style={styles.button}>
        <Text style={{ color: "white" }}>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginTop: 16,
  },
  textInput: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 8,
    width: "60%",
    borderRadius: 32,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "60%",
    backgroundColor: "blue",
    marginTop: 8,
    borderRadius: 32,
    alignItems: "center",
  },
});
