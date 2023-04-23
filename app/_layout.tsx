import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack, useRouter, Slot } from "expo-router";
import { Provider } from "../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AuthLayout() {
  const [isReady, setIsReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const getUserFromStorage = async () => {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setIsAuthenticated(JSON.stringify(user));
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
    <Provider isAuthenticated={isAuthenticated}>
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