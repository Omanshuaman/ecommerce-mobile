import {
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Link } from "expo-router";
import {
  FontAwesome,
  Feather,
  MaterialIcons,
  Entypo,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@/components/ui/select";

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
      href: "/creator-store/payment-details",
    },
    {
      icon: <Entypo name="location-pin" size={24} />,
      text: "Your Delivery Address",
      href: "/creator-store/address",
    },
    {
      icon: <Feather name="bell" size={24} />,
      text: "Notifications",
      href: "/settings/notifications",
    },
  ];

  return <Text>Profile</Text>;
}
