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
      <View
        className="flex-1 justify-center items-center"
        style={{ height: "70%" }}>
        <Image
          source={require("../assets/onboarding.png")}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Bottom buttons */}
      <View
        className="justify-center items-center px-8 py-6"
        style={{ height: "30%" }}>
        <Link href="/sign-up/otp-phone" asChild>
          <TouchableOpacity
            className={`bg-[#E5FF03] rounded-md w-full py-2 justify-center items-center shadow-lg shadow-slate-50  ${
              isPressed
                ? "translate-x-0.5 -translate-y-0.5"
                : "-translate-x-0.5 -translate-y-0.5"
            }`}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}>
            <Text
              className="text-center text-black uppercase"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 32 }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/creator-store" asChild>
          <TouchableOpacity className="bg-black border border-white rounded-md flex-row items-center justify-center w-full py-3 my-2 gap-4">
            <Image
              source={require("../assets/google.png")}
              className="w-8 h-8"
              resizeMode="contain"
            />
            <Text
              className="text-white uppercase"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 26 }}>
              Log in with Google
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/buyer-experience/homepage" asChild>
          <TouchableOpacity className="bg-black border border-white rounded-md flex-row items-center justify-center w-full py-3 my-2 gap-4">
            <Image
              source={require("../assets/facebook.png")}
              className="w-8 h-8"
              resizeMode="contain"
            />
            <Text
              className="text-white uppercase"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 26 }}>
              Log in with Facebook
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default OnboardingScreen;
