import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Add Product",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            fontFamily: "HelveticaNeue-Medium",
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
