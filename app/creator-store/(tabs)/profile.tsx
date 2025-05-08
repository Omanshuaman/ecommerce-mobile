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

  return (
    <ImageBackground
      source={require("../../../assets/bg-image.jpg")}
      style={{ flex: 1, paddingTop: 25 }} // Add padding to avoid overlap with the header
      resizeMode="cover">
      <View className="flex-1 px-6 py-12">
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
            <TouchableOpacity className="flex-row items-center justify-between py-5 border-b border-white/10">
              <View className="flex-row items-center gap-4">
                <Text className="text-white">{item.icon}</Text>
                <Text
                  className="text-white"
                  style={{ fontSize: 15, fontFamily: "HelveticaNeue-Medium" }}>
                  {item.text}
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={18} color="white" />
            </TouchableOpacity>
          </Link>
        ))}
        <Select className="py-4">
          <SelectTrigger
            size="lg"
            className="flex-row items-center justify-between border border-[#161616] text-white">
            <View className="flex-row items-center gap-4 w-full">
              <MaterialIcons name="logout" size={24} color="white" />
              <Text
                className="text-white"
                style={{ fontSize: 15, fontFamily: "HelveticaNeue-Medium" }}>
                Logout
              </Text>
            </View>
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent className="bg-black border border-dashed p-4">
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <Text
                className="text-white text-center py-6 text-lg font-semibold"
                style={{ fontSize: 14, fontFamily: "HelveticaNeue-Medium" }}>
                Are you sure you want to log out?
              </Text>
              <TouchableOpacity className="bg-black py-2 border border-white items-center shadow-lg shadow-slate-50 rounded-sm w-full">
                <Text
                  className="text-white"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
                    fontSize: 36,
                  }}>
                  LOGOUT
                </Text>
              </TouchableOpacity>

              {/* Update Button */}
              <TouchableOpacity className="bg-[#E5FF03] py-1 mt-3 items-center shadow-lg shadow-slate-50 rounded-sm w-full">
                <Text
                  className="text-black"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
                    fontSize: 36,
                  }}>
                  CANCEL
                </Text>
              </TouchableOpacity>
            </SelectContent>
          </SelectPortal>
        </Select>
      </View>
    </ImageBackground>
  );
}
