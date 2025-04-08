// OnboardingScreen.tsx
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const OnboardingScreen = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View className="flex-1 bg-black">
      {/* Top image with content */}
      <View className="flex-1 justify-center items-center h-[65%]">
        <Image
          source={require("../assets/onboarding.png")}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Bottom buttons */}
      <View className="h-[35%] justify-center items-center px-8 py-6">
        <View className="relative w-full flex-1 my-2 bg-[#E5FF03] bg-opacity-30 rounded-sm">
          <TouchableOpacity
            className={`bg-[#E5FF03] rounded-sm absolute -top-1 -left-1 w-full h-[98%] justify-center items-center ${
              isPressed
                ? "bg-[#E5FF03] translate-x-0.5 -translate-y-0.5"
                : "bg-[#E5FF03] -translate-x-0.5 -translate-y-0.5"
            }`}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}>
            <Text className="text-center font-bold text-black uppercase text-2xl">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-black border border-white rounded-sm flex-row items-center justify-center w-full flex-1 my-2 gap-2">
          <Image
            source={require("../assets/google.png")}
            className="w-8 h-8"
            resizeMode="cover"
          />
          <Text className="text-white font-bold text-2xl uppercase">
            Log in with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-black border border-white rounded-sm flex-row items-center justify-center w-full flex-1 my-2 gap-2">
          <Image
            source={require("../assets/facebook.png")}
            className="w-8 h-8"
            resizeMode="cover"
          />
          <Text className="text-white font-bold text-2xl uppercase">
            Log in with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
