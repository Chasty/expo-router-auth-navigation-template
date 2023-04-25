import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { Provider, UserCredentials } from "../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AuthLayout() {
  const [isReady, setIsReady] = useState(false);
  const [loadedUser, setLoadedUser] = useState<UserCredentials | null>(null);

  const getUserFromStorage = async () => {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setLoadedUser(JSON.parse(user));
    }
    setIsReady(true);
  };

  useEffect(() => {
    getUserFromStorage();
  }, []);

  if (!isReady)
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <Provider userCredentials={loadedUser}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
    </Provider>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
