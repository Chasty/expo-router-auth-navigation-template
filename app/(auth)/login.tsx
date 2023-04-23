import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";
import { useAuth } from "../../context/auth";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("user123");
  const [password, setPassword] = useState("password123");
  const { signIn } = useAuth();

  const onLogin = async () => {
    await AsyncStorage.setItem("user", JSON.stringify({ email, password }));
    signIn({ email, password });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={email}
        placeholder="Type email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Type password"
        secureTextEntry
      />
      <View style={styles.separator} />
      <Pressable onPress={onLogin} style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/register")} style={styles.button}>
        <Text style={styles.text}>Register</Text>
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
  text: {
    color: "white",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "60%",
    backgroundColor: "#05BFDB",
    marginTop: 8,
    borderRadius: 32,
    alignItems: "center",
  },
});
