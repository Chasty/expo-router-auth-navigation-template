import { Drawer } from "expo-router/drawer";

export default function MainLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerPosition: "left",
      }}
    >
      <Drawer.Screen name="home" />
    </Drawer>
  );
}
