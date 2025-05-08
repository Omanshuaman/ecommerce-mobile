import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
  StatusBar,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function OtpPhoneScreen() {
  const [fullName, setFullName] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const router = useRouter();

  const handleGetOTP = () => {
    // Add validation if needed
    router.push("/verify"); // Navigate to next screen
  };

  return (
    <SafeAreaProvider className="flex-1" style={{}}>
      <ImageBackground
        source={require("../../assets/bg-image.jpg")}
        style={{ flex: 1, paddingTop: 50 }} // Add padding to avoid overlap with the header
        resizeMode="cover">
        <KeyboardAvoidingView
          className="flex-1 px-6 justify-center"
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View className="gap-2">
            <Text
              className="text-white mb-2 uppercase"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 50 }}>
              what is your full name?
            </Text>
            <Text className="mb-32 " style={{ fontSize: 16, color: "white" }}>
              You won’t be able to change this later.{" "}
            </Text>

            <View className="border border-[#E5FF03] rounded-sm flex-row items-center px-4 mb-4">
              <TextInput
                placeholder="ENTER NAME"
                placeholderTextColor="#888"
                keyboardType="default"
                maxLength={50}
                autoFocus={true}
                className="flex-1 text-white mt-1"
                ref={(ref) => {
                  if (ref) {
                    ref.setNativeProps({
                      style: { fontFamily: "PPFormulaCondensed-Bold" },
                    });
                  }
                }}
                style={{
                  fontSize: 32,
                  letterSpacing: 1,
                }}
                value={fullName}
                onChangeText={setFullName}
              />
            </View>
            <View className="h-[66px]">
              <Link href="/sign-up/email" asChild>
                <TouchableOpacity
                  className={`bg-[#E5FF03] rounded-sm w-full py-2 justify-center items-center shadow-lg shadow-slate-50 ${
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
                      fontSize: 38,
                    }}>
                    NEXT
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
