import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
export default function OtpPhoneScreen() {
  const [fullName, setFullName] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const router = useRouter();

  const handleGetOTP = () => {
    // Add validation if needed
    router.push("/verify"); // Navigate to next screen
  };
  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        className="flex-1 bg-black px-6 justify-center"
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

          <View className="border border-yellow-400 rounded-sm flex-row items-center px-4 py-1 mb-4">
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#888"
              keyboardType="default"
              maxLength={50}
              autoFocus={true}
              className="flex-1 text-white"
              ref={(ref) =>
                ref &&
                ref.setNativeProps({
                  style: { fontFamily: "PPFormulaCondensed-Bold" },
                })
              }
              style={{
                fontSize: 35,
                letterSpacing: 1,
              }}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>
          <View className="h-[66px]">
            <View className="relative w-full flex-1 my-1 bg-[#E5FF03] bg-opacity-30 rounded-sm">
              <Link href="/sign-up/social" asChild>
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
                      fontSize: 40,
                    }}>
                    NEXT
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
