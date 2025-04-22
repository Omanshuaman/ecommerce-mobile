import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
export default function OtpPhoneScreen() {
  const [profileLink, setProfileLink] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const router = useRouter();

  const handleGetOTP = () => {
    // Add validation if needed
    router.push("/verify"); // Navigate to next screen
  };
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("../../assets/bg-image.jpg")}
        style={{ flex: 1, paddingTop: 50 }}
        resizeMode="cover">
        <KeyboardAvoidingView
          className="flex-1 px-6 justify-center"
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View className="gap-2">
            <Text
              className="text-white mb-2 uppercase"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 50 }}>
              your social media links
            </Text>
            <Text className="mb-4 " style={{ fontSize: 16, color: "white" }}>
              This will help us identify your profile
            </Text>

            <View className="border border-[#E5FF03] rounded-sm flex-row items-center px-4 py-1 mb-4">
              <TextInput
                placeholder="Enter Profile Link"
                placeholderTextColor="#888"
                keyboardType="url"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={100}
                autoFocus={true}
                className="flex-1 text-white"
                ref={(ref) =>
                  ref &&
                  ref.setNativeProps({
                    style: { fontFamily: "PPFormulaCondensed-Bold" },
                  })
                }
                style={{
                  fontSize: 24,
                }}
                value={profileLink}
                onChangeText={setProfileLink}
              />
            </View>
            <View className="h-[60px]">
              <View className="relative w-full flex-1 my-1 bg-gray-400 bg-opacity-30 rounded-sm">
                <TouchableOpacity
                  className={`bg-black rounded-sm absolute -top-1 -left-1 w-full h-[98%] justify-center items-center border border-solid border-white ${
                    isPressed
                      ? "bg-[#E5FF03] translate-x-0.5 -translate-y-0.5"
                      : "bg-[#E5FF03] -translate-x-0.5 -translate-y-0.5"
                  }`}
                  onPressIn={() => setIsPressed(true)}
                  onPressOut={() => setIsPressed(false)}>
                  <Text
                    className="text-center text-white uppercase"
                    style={{
                      fontFamily: "PPFormulaCondensed-Bold",
                      fontSize: 35,
                    }}>
                    Add another link
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="h-[60px]">
              <View className="relative w-full flex-1 my-1 bg-[#E5FF03] bg-opacity-30 rounded-sm">
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
                    style={{
                      fontFamily: "PPFormulaCondensed-Bold",
                      fontSize: 35,
                    }}>
                    SEND FOR VERIFICATION
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
