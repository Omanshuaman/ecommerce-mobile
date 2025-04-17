// OnboardingScreen.tsx
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const OnboardingScreen = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View className="flex-1 bg-black">
      {/* Top image with content */}
      <View className="flex-1 justify-center items-center h-[70%]">
        <Image
          source={require("../assets/onboarding.png")}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Bottom buttons */}
      <View className="h-[30%] justify-center items-center px-8 py-6">
        <View className="relative w-full flex-1 my-1 bg-[#E5FF03] bg-opacity-30 rounded-sm">
          <Link href="/sign-up/otp-phone" asChild>
            <TouchableOpacity
              className={`bg-[#E5FF03] rounded-sm absolute -top-1 -left-1 w-full h-[98%] justify-center items-center ${
                isPressed
                  ? "bg-[#E5FF03] translate-x-0.5 -translate-y-0.5"
                  : "bg-[#E5FF03] -translate-x-0.5 -translate-y-0.5"
              }`}
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}>
              <Text
                className="text-center text-black uppercase"
                style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 30 }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Link href="/creator-store" asChild>
          <TouchableOpacity className="bg-black border border-white rounded-sm flex-row items-center justify-center w-full flex-1 my-1 gap-4">
            <Image
              source={require("../assets/google.png")}
              className="w-8 h-8"
              resizeMode="cover"
            />
            <Text
              className="text-white uppercase"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 30 }}>
              Log in with Google
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/creator-store/payment-details" asChild>
          <TouchableOpacity className="bg-black border border-white rounded-sm flex-row items-center justify-center w-full flex-1 my-1 gap-4">
            <Image
              source={require("../assets/facebook.png")}
              className="w-8 h-8"
              resizeMode="cover"
            />
            <Text
              className="text-white uppercase"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 30 }}>
              Log in with Facebook
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default OnboardingScreen;
