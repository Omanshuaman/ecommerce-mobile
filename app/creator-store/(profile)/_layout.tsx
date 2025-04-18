import { router, Stack, useRouter, Slot } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="account-info"
        options={{
          title: "Account Info",
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: "#161616",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPressIn={() => router.replace("/creator-store/profile")}>
              <Ionicons name="chevron-back" size={18} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="social-media"
        options={{
          title: "Account Info",
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: "#161616",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPressIn={() => router.replace("/creator-store/account-info")}>
              <Ionicons name="chevron-back" size={18} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="payment-details"
        options={{
          title: "Payment Details",
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: "#161616",
          },
          headerLeft: () => (
            <TouchableOpacity onPressIn={() => router.back()}>
              <Ionicons name="chevron-back" size={18} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="add-payments"
        options={{
          title: "Add new payment method",
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: "#161616",
          },
          headerLeft: () => (
            <TouchableOpacity onPressIn={() => router.back()}>
              <Ionicons name="chevron-back" size={18} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="address"
        options={{
          title: "Address",
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: "#161616",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPressIn={() => router.replace("/creator-store/profile")}>
              <Ionicons name="chevron-back" size={18} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="add-address"
        options={{
          title: "Add New Address",
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: "#161616",
          },
          headerLeft: () => (
            <TouchableOpacity onPressIn={() => router.back()}>
              <Ionicons name="chevron-back" size={18} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
