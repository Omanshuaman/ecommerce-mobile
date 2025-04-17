import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  BackHandler,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

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
  };

  return (
    <SafeAreaProvider>
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
                <InputField
                  type="text"
                  placeholder="FULL NAME"
                  className="text-white py-4 px-3"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
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
                <InputField
                  type="text"
                  placeholder="EMAIL"
                  className="text-white py-4 px-3"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
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
                <InputField
                  type="text"
                  placeholder="PHONE NUMBER"
                  className="text-white py-4 px-3"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
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
          <VStack className="w-full rounded-md">
            {/* Add Social Media */}
            <TouchableOpacity
              className="bg-black mt-6 py-2 border border-white items-center shadow-lg shadow-slate-50 rounded-sm"
              onPress={handleAddSocialMedia}>
              <Text
                className="text-white"
                style={{
                  fontFamily: "PPFormulaCondensed-Bold",
                  fontSize: 36,
                }}>
                ADD SOCIAL MEDIA
              </Text>
            </TouchableOpacity>

            {/* Update Button */}
            <TouchableOpacity
              className="bg-yellow-400 py-1 mt-3 items-center shadow-lg shadow-slate-50 rounded-sm"
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
    </SafeAreaProvider>
  );
};

export default AccountInfo;
