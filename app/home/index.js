import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  const router = useRouter();
  const goToHome = () => {
    router.back();
  };
  const goToPage = () => {
    router.push("home/detail");
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text onPress={goToPage} style={styles.title}>
          Hello Worldxd
        </Text>
        <Text onPress={goToHome} style={styles.subtitle}>
          Go Back
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
