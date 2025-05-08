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
import { SafeAreaView } from "react-native-safe-area-context";

export default function OtpPhoneScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const router = useRouter();

  const handleGetOTP = () => {
    // Add validation if needed
    router.push("/verify"); // Navigate to next screen
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/bg-image.jpg")}
        style={{ flex: 1, paddingTop: 50 }} // Add padding to avoid overlap with the header
        resizeMode="cover">
        <KeyboardAvoidingView
          className="flex-1 px-6 justify-center"
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="gap-2 pt-20">
              <Text
                className="text-white mb-2"
                style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 50 }}>
                WHAT IS YOUR PHONE NUMBER?
              </Text>
              <Text
                className="mb-24 "
                style={{
                  fontSize: 16,
                  color: "white",
                  fontFamily: "HelveticaNeue-Light",
                }}>
                We will not share with anyone and won’t be on your profile.
              </Text>

              <View className="border border-[#E5FF03] rounded-sm flex-row items-center px-4 mb-4">
                <Text
                  className="text-white"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
                    fontSize: 34,
                  }}>
                  +91
                </Text>
                <TextInput
                  placeholder="000 000 0000"
                  placeholderTextColor="#888"
                  keyboardType="phone-pad"
                  autoFocus={true}
                  maxLength={10}
                  className="flex-1 text-white mt-[6px]"
                  ref={(ref) => {
                    if (ref) {
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      });
                    }
                  }}
                  style={{
                    fontSize: 34,
                  }}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />

                <Ionicons name="call-outline" size={28} color="white" />
              </View>
              <View className="">
                <Link href="/sign-up/otp" asChild>
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
    </SafeAreaView>
  );
}
