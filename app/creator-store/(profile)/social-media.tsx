import {
  View,
  Text,
  BackHandler,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import { VStack } from "@/components/ui/vstack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

const SocialMedia = () => {
  const socialPlatforms = [
    "Facebook",
    "Instagram",
    "X",
    "Linkedin",
    "Pinterest",
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <View className="flex-1 bg-[#161616] px-6 py-2">
        <ScrollView className="flex-grow">
          {socialPlatforms.map((platform, index) => (
            <View
              key={index}
              className="flex-row items-center justify-between py-5 border-b border-white/10">
              <Text
                className="text-white"
                style={{
                  fontSize: 15,
                  fontFamily: "HelveticaNeue-Medium",
                }}>
                {platform}
              </Text>
              <TouchableOpacity className="border border-white px-2 py-1 rounded-sm">
                <Text
                  className="text-white"
                  style={{
                    fontSize: 14,
                    fontFamily: "HelveticaNeue-Medium",
                  }}>
                  Connect
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <VStack className="w-full mb-2">
          <TouchableOpacity className="bg-[#E5FF03] py-1 items-center shadow-lg shadow-slate-50 rounded-sm">
            <Text
              className="text-black"
              style={{
                fontFamily: "PPFormulaCondensed-Bold",
                fontSize: 38,
              }}>
              SAVE
            </Text>
          </TouchableOpacity>
        </VStack>
      </View>
    </SafeAreaView>
  );
};

export default SocialMedia;
