import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { AlertCircleIcon } from "@/components/ui/icon";
import React from "react";

const SetupAddress = () => {
  const router = useRouter();

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");

  const [address1Invalid, setAddress1Invalid] = useState(false);
  const [address2Invalid, setAddress2Invalid] = useState(false);
  const [cityInvalid, setCityInvalid] = useState(false);
  const [stateInvalid, setStateInvalid] = useState(false);
  const [pinInvalid, setPinInvalid] = useState(false);

  const handleSubmit = () => {
    const isAddress1Invalid = address1.trim() === "";
    const isAddress2Invalid = address2.trim() === "";
    const isCityInvalid = city.trim() === "";
    const isStateInvalid = state.trim() === "";
    const isPinInvalid = pinCode.length !== 6;

    setAddress1Invalid(isAddress1Invalid);
    setAddress2Invalid(isAddress2Invalid);
    setCityInvalid(isCityInvalid);
    setStateInvalid(isStateInvalid);
    setPinInvalid(isPinInvalid);

    if (
      !isAddress1Invalid &&
      !isAddress2Invalid &&
      !isCityInvalid &&
      !isStateInvalid &&
      !isPinInvalid
    ) {
      // Submit the form
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/bg-image.jpg")}
      style={{ flex: 1, paddingTop: 50 }} // Add padding to avoid overlap with the header
      resizeMode="cover">
      <ScrollView className="flex-1">
        <KeyboardAvoidingView
          className="flex-1 px-6 justify-center"
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View className="gap-2">
            <Text
              className="text-white mb-2"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 50 }}>
              SETUP ADDRESS
            </Text>
            <Text className="mb-16" style={{ fontSize: 16, color: "white" }}>
              This will help us deliver your products
            </Text>

            <VStack className="w-full rounded-md gap-2">
              <FormControl isInvalid={address1Invalid}>
                <FormControlLabel className="py-1">
                  <FormControlLabelText className="text-white">
                    Address line 1
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="bg-black h-fit" size="xl">
                  <TextInput
                    keyboardType="default"
                    placeholder="HOUSE NUMBER & STREET NAME"
                    placeholderTextColor="#888"
                    className="text-white py-5 px-3"
                    ref={(ref) =>
                      ref &&
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      })
                    }
                    style={{
                      fontSize: 20,
                    }}
                    value={address1}
                    onChangeText={(text) => setAddress1(text)}
                  />
                </Input>
                {address1Invalid && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      Address line 1 is required.
                    </FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>

              <FormControl isInvalid={address2Invalid}>
                <FormControlLabel className="py-1">
                  <FormControlLabelText className="text-white">
                    Address line 2
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="bg-black h-fit" size="xl">
                  <TextInput
                    keyboardType="default"
                    placeholder="APARTMENT OR BUILDING"
                    placeholderTextColor="#888"
                    className="text-white py-5 px-3"
                    ref={(ref) =>
                      ref &&
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      })
                    }
                    style={{
                      fontSize: 20,
                    }}
                    value={address2}
                    onChangeText={(text) => setAddress2(text)}
                  />
                </Input>
                {address2Invalid && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      Address line 2 is required.
                    </FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>

              <FormControl isInvalid={cityInvalid}>
                <FormControlLabel className="py-1">
                  <FormControlLabelText className="text-white">
                    City
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="bg-black h-fit" size="xl">
                  <TextInput
                    keyboardType="default"
                    placeholder="CITY OR TOWN NAME"
                    placeholderTextColor="#888"
                    className="text-white py-5 px-3"
                    ref={(ref) =>
                      ref &&
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      })
                    }
                    style={{
                      fontSize: 20,
                    }}
                    value={city}
                    onChangeText={(text) => setCity(text)}
                  />
                </Input>
                {cityInvalid && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      City is required.
                    </FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>

              <FormControl isInvalid={stateInvalid}>
                <FormControlLabel className="py-1">
                  <FormControlLabelText className="text-white">
                    State
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="bg-black h-fit" size="xl">
                  <TextInput
                    keyboardType="default"
                    placeholder="STATE OR REGION"
                    className="text-white py-5 px-3"
                    placeholderTextColor="#888"
                    ref={(ref) =>
                      ref &&
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      })
                    }
                    style={{
                      fontSize: 20,
                    }}
                    value={state}
                    onChangeText={(text) => setState(text)}
                  />
                </Input>
                {stateInvalid && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      State is required.
                    </FormControlErrorText>
                  </FormControlError>
                )}
              </FormControl>

              <FormControl isInvalid={pinInvalid}>
                <FormControlLabel className="py-1">
                  <FormControlLabelText className="text-white">
                    PIN Code
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="bg-black h-fit" size="xl">
                  <TextInput
                    keyboardType="numeric"
                    placeholder="6 DIGIT PIN CODE"
                    className="text-white py-5 px-3"
                    placeholderTextColor="#888"
                    ref={(ref) =>
                      ref &&
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      })
                    }
                    style={{
                      fontSize: 20,
                    }}
                    value={pinCode}
                    onChangeText={(text) => setPinCode(text)}
                  />
                </Input>
                {pinInvalid && (
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      PIN code must be exactly 6 digits.
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
      </ScrollView>
    </ImageBackground>
  );
};

export default SetupAddress;
