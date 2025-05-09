import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  BackHandler,
  TextInput,
} from "react-native";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import React, { useEffect } from "react";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

const AccountInfo = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [errors, setErrors] = React.useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const router = useRouter();
  useEffect(() => {
    const backAction = () => {
      router.replace("/creator-store/profile");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const validateFields = () => {
    const newErrors = { fullName: "", email: "", phone: "" };
    if (!fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Valid Email is required.";
    if (!phone.trim() || !/^\d+$/.test(phone))
      newErrors.phone = "Valid Phone Number is required.";
    setErrors(newErrors);
    return !newErrors.fullName && !newErrors.email && !newErrors.phone;
  };

  const handleUpdate = () => {
    if (validateFields()) {
      // Handle update logic
    }
  };

  const handleAddSocialMedia = () => {
    // Handle social media linking
    router.push("/creator-store/social-media");
  };

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor={"#3b2c2d"} barStyle="light-content" />

      <KeyboardAvoidingView
        className="flex-1 bg-[#161616] px-6"
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View className="gap-2 flex-1 justify-between">
          <VStack className="w-full rounded-md gap-2">
            {/* Full Name */}
            <FormControl className="">
              <FormControlLabel className="py-1">
                <FormControlLabelText
                  className="text-white text-sm"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  Full Name
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit border border-white" size="xl">
                <TextInput
                  placeholder="FULL NAME"
                  keyboardType="default"
                  placeholderTextColor="#888"
                  className="text-white py-4 px-3"
                  ref={(ref) => {
                    if (ref) {
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      });
                    }
                  }}
                  style={{
                    fontSize: 24,
                  }}
                  value={fullName}
                  onChangeText={(text) => setFullName(text)}
                />
              </Input>
              {errors.fullName ? (
                <Text
                  className="text-red-500 text-sm mt-1"
                  style={{ fontFamily: "HelveticaNeue-Light" }}>
                  {errors.fullName}
                </Text>
              ) : null}
            </FormControl>

            {/* Email Address */}
            <FormControl>
              <FormControlLabel className="py-1">
                <FormControlLabelText
                  className="text-white text-sm"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  Email Address
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit border border-white" size="xl">
                <TextInput
                  keyboardType="default"
                  placeholder="EMAIL"
                  placeholderTextColor="#888"
                  className="text-white py-4 px-3"
                  ref={(ref) => {
                    if (ref) {
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      });
                    }
                  }}
                  style={{
                    fontSize: 24,
                  }}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </Input>
              {errors.email ? (
                <Text
                  className="text-red-500 text-sm mt-1"
                  style={{ fontFamily: "HelveticaNeue-Light" }}>
                  {errors.email}
                </Text>
              ) : null}
            </FormControl>

            {/* Phone Number */}
            <FormControl>
              <FormControlLabel className="py-1">
                <FormControlLabelText
                  className="text-white text-sm"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  Phone number
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit border border-white" size="xl">
                <TextInput
                  keyboardType="numeric"
                  placeholder="PHONE NUMBER"
                  placeholderTextColor="#888"
                  className="text-white py-4 px-3"
                  ref={(ref) => {
                    if (ref) {
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      });
                    }
                  }}
                  style={{
                    fontSize: 24,
                  }}
                  value={phone}
                  onChangeText={(text) => setPhone(text)}
                />
              </Input>
              {errors.phone ? (
                <Text
                  className="text-red-500 text-sm mt-1"
                  style={{ fontFamily: "HelveticaNeue-Light" }}>
                  {errors.phone}
                </Text>
              ) : null}
            </FormControl>
          </VStack>
          <VStack className="w-full rounded-md mb-4">
            {/* Add Social Media */}
            <Link href="/creator-store/social-media" asChild>
              <TouchableOpacity className="bg-black mt-6 py-2 border border-white items-center shadow-lg shadow-slate-50 rounded-sm">
                <Text
                  className="text-white"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
                    fontSize: 36,
                  }}>
                  ADD SOCIAL MEDIA
                </Text>
              </TouchableOpacity>
            </Link>

            {/* Update Button */}
            <TouchableOpacity
              className="bg-[#E5FF03] py-1 mt-3 items-center shadow-lg shadow-slate-50 rounded-sm"
              onPress={handleUpdate}>
              <Text
                className="text-black"
                style={{
                  fontFamily: "PPFormulaCondensed-Bold",
                  fontSize: 36,
                }}>
                UPDATE
              </Text>
            </TouchableOpacity>
          </VStack>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AccountInfo;
