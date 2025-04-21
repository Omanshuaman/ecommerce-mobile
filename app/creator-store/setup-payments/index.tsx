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
import { Button, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { AlertCircleIcon } from "@/components/ui/icon";
import React from "react";
const SetupPayments = () => {
  const [otp, setOtp] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const router = useRouter();

  const handleGetOTP = () => {
    // Add validation if needed
    router.push("/verify"); // Navigate to next screen
  };
  const [isAccountNumberInvalid, setIsAccountNumberInvalid] =
    React.useState(false);
  const [isIFSCNumberInvalid, setIsIFSCNumberInvalid] = React.useState(false);
  const [accountNumber, setAccountNumber] = React.useState("");
  const [IFSCNumber, setIFSCNumber] = React.useState("");
  const [GSTNumber, setGSTNumber] = React.useState("");
  const [isGSTNumberInvalid, setIsGSTNumberInvalid] = React.useState(false);
  const handleSubmit = () => {
    let accountNumberInvalid = accountNumber.length < 6;
    let IFSCNumberInvalid = IFSCNumber.length < 6;
    let GSTNumberInvalid = GSTNumber.length < 6;
    setIsAccountNumberInvalid(accountNumberInvalid);
    setIsIFSCNumberInvalid(IFSCNumberInvalid);
    setIsGSTNumberInvalid(GSTNumberInvalid);
    if (!accountNumberInvalid && !IFSCNumberInvalid && !GSTNumberInvalid) {
      // Proceed with form submission
    }
  };
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("../../../assets/bg-image.jpg")}
        style={{ flex: 1, paddingTop: 50 }} // Add padding to avoid overlap with the header
        resizeMode="cover">
        <KeyboardAvoidingView
          className="flex-1 px-6 justify-center"
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View className="gap-2">
            <Text
              className="text-white mb-2"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 50 }}>
              SETUP PAYMENTS
            </Text>
            <Text className="mb-20 " style={{ fontSize: 16, color: "white" }}>
              This will help us manage your payments{" "}
            </Text>

            <VStack className="w-full rounded-md">
              <FormControl
                isInvalid={isAccountNumberInvalid}
                size="md"
                isDisabled={false}
                isReadOnly={false}
                isRequired={false}>
                <FormControlLabel className="py-1">
                  <FormControlLabelText className="text-white">
                    Account number
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="bg-black h-fit" size="xl">
                  <TextInput
                    keyboardType="numeric"
                    placeholderTextColor="#888"
                    placeholder="ENTER YOUR ACCOUNT NUMBER"
                    className="text-white py-4 px-3"
                    ref={(ref) =>
                      ref &&
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      })
                    }
                    style={{
                      fontSize: 24,
                    }}
                    value={accountNumber}
                    onChangeText={(text) => setAccountNumber(text)}
                  />
                </Input>
                {isAccountNumberInvalid && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      Account number must be at least 6 characters.
                    </FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>
              <FormControl
                isInvalid={isIFSCNumberInvalid}
                size="md"
                isDisabled={false}
                isReadOnly={false}
                isRequired={false}>
                <FormControlLabel className="py-1">
                  <FormControlLabelText className="text-white">
                    IFSC Number
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="bg-black h-fit" size="xl">
                  <TextInput
                    keyboardType="numeric"
                    placeholder="ENTER YOUR IFSC NUMBER"
                    placeholderTextColor="#888"
                    className="text-white py-4 px-3"
                    ref={(ref) =>
                      ref &&
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      })
                    }
                    style={{
                      fontSize: 24,
                    }}
                    value={IFSCNumber}
                    onChangeText={(text) => setIFSCNumber(text)}
                  />
                </Input>
                {isIFSCNumberInvalid && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      IFSC number must be at least 6 characters.
                    </FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>
              <FormControl
                isInvalid={isGSTNumberInvalid}
                size="md"
                isDisabled={false}
                isReadOnly={false}
                isRequired={false}>
                <FormControlLabel className="py-1">
                  <FormControlLabelText className="text-white">
                    GST Number
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="bg-black h-fit" size="xl">
                  <TextInput
                    keyboardType="numeric"
                    placeholder="ENTER YOUR GST NUMBER"
                    placeholderTextColor="#888"
                    className="text-white py-4 px-3"
                    ref={(ref) =>
                      ref &&
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      })
                    }
                    style={{
                      fontSize: 24,
                    }}
                    value={GSTNumber}
                    onChangeText={(text) => setGSTNumber(text)}
                  />
                </Input>
                {isGSTNumberInvalid && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      GST number must be at least 6 characters.
                    </FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>
              <TouchableOpacity
                className="bg-yellow-400 py-2 mt-4 rounded-sm shadow-lg shadow-slate-50 items-center"
                onPress={handleSubmit}>
                <Text
                  className="text-black"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
                    fontSize: 34,
                  }}>
                  SUBMIT
                </Text>
              </TouchableOpacity>
            </VStack>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaProvider>
  );
};

export default SetupPayments;
