import { View, Text, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import {
  FontAwesome,
  Feather,
  MaterialIcons,
  Entypo,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

export default function Profile() {
  const menuItems = [
    {
      icon: <AntDesign name="user" size={24} />,
      text: "Account Information",
      href: "/creator-store/account-info",
    },
    {
      icon: <Ionicons name="extension-puzzle-outline" size={24} />,
      text: "Connected Social Media",
      href: "/creator-store/social-media",
    },
    {
      icon: <Feather name="credit-card" size={24} />,
      text: "Payment Details",
      href: "/settings/payment",
    },
    {
      icon: <Entypo name="location-pin" size={24} />,
      text: "Your Delivery Address",
      href: "/settings/address",
    },
    {
      icon: <Feather name="bell" size={24} />,
      text: "Notifications",
      href: "/settings/notifications",
    },
    {
      icon: <MaterialIcons name="logout" size={24} />,
      text: "Log out",
      href: "/logout",
    },
  ];

  return (
    <View className="flex-1 bg-black px-6 py-12">
      <View className="flex-row justify-between items-center mb-10">
        <Text
          className="text-white"
          style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 42 }}>
          PROFILE SETTINGS
        </Text>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/1.jpg" }}
          className="size-9 rounded-full"
        />
      </View>

      {menuItems.map((item, index) => (
        <Link href={item.href} asChild key={index} withAnchor>
          <Pressable className="flex-row items-center justify-between py-5 border-b border-white/10">
            <View className="flex-row items-center gap-4">
              <Text className="text-white">{item.icon}</Text>
              <Text
                className="text-white"
                style={{ fontSize: 15, fontFamily: "HelveticaNeue-Medium" }}>
                {item.text}
              </Text>
            </View>
            {index === menuItems.length - 1 ? null : (
              <MaterialIcons name="navigate-next" size={18} color="white" />
            )}
          </Pressable>
        </Link>
      ))}
    </View>
  );
}
