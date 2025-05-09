import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  StatusBar,
} from "react-native";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ThankYouScreen() {
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter();

  const handleSetupProfile = () => {
    router.push("/profile-setup"); // Replace with your actual route
  };

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor={"#3b2c2d"} barStyle="light-content" />

      <ImageBackground
        source={require("../../assets/bg-image.jpg")} // Ensure this matches your background
        style={{ flex: 1, paddingTop: 50 }}
        resizeMode="cover">
        <KeyboardAvoidingView
          className="flex-1 px-6 justify-between pb-6"
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View className="flex-1 items-center justify-center">
            <Text
              className="text-white text-center mb-2 uppercase"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 48 }}>
              THANK YOU FOR
            </Text>
            <Text
              className="text-white text-center uppercase"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 48 }}>
              APPLYING
            </Text>
            <Text
              className="text-white mt-2 text-center"
              style={{ fontSize: 14 }}>
              This will help us verify your profile
            </Text>
          </View>

          <View className="h-[60px]">
            <Link href="/creator-store" asChild>
              <TouchableOpacity
                className={`bg-black rounded-sm w-full h-[98%] justify-center items-center border border-solid border-white ${
                  isPressed
                    ? "translate-x-0.5 -translate-y-0.5"
                    : "-translate-x-0.5 -translate-y-0.5"
                }`}
                onPress={handleSetupProfile}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}>
                <Text
                  className="text-center text-white uppercase"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
                    fontSize: 33,
                  }}>
                  SETUP PROFILE
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}
