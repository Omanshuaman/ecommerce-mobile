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
import { StatusBar } from "react-native";

export default function OtpPhoneScreen() {
  const [otp, setOtp] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const router = useRouter();

  const handleGetOTP = () => {
    // Add validation if needed
    router.push("/verify"); // Navigate to next screen
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require("../../assets/bg-image.jpg")}
        style={{ flex: 1, paddingTop: 50 }} // Add padding to avoid overlap with the header
        resizeMode="cover">
        <KeyboardAvoidingView
          className="flex-1 px-6 justify-center"
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
            <View className="gap-2">
              <Text
                className="text-white mb-2"
                style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 50 }}>
                VERIFY YOUR PHONE NUMBER
              </Text>
              <Text className="mb-24 " style={{ fontSize: 16, color: "white" }}>
                Enter the OTP sent to +91 9422345432 Change number
              </Text>

              <View className="border border-[#E5FF03] rounded-sm flex-row items-center px-4 mb-4">
                <TextInput
                  placeholder="0000"
                  placeholderTextColor="#888"
                  keyboardType="default"
                  maxLength={4}
                  className="flex-1 text-white"
                  autoFocus={true}
                  ref={(ref) => {
                    if (ref) {
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      });
                    }
                  }}
                  style={{
                    fontSize: 32,
                    letterSpacing: 8,
                    paddingTop: 12,
                  }}
                  value={otp}
                  onChangeText={setOtp}
                />
              </View>
              <View className="h-[66px]">
                <Link href="/sign-up/name" asChild>
                  <TouchableOpacity
                    className={`bg-[#E5FF03] rounded-sm w-full py-2 justify-center items-center shadow-lg shadow-slate-50`}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}>
                    <Text
                      className="text-center text-black uppercase"
                      style={{
                        fontFamily: "PPFormulaCondensed-Bold",
                        fontSize: 36,
                      }}>
                      Get OTP
                    </Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
