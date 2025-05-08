import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from "@/components/ui/form-control";
import { Input } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { AlertCircleIcon } from "@/components/ui/icon";

const AddAddress = () => {
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const [errors, setErrors] = useState({
    addressLine1: false,
    addressLine2: false,
    city: false,
    state: false,
    pincode: false,
  });

  const handleSave = () => {
    const newErrors = {
      addressLine1: addressLine1.trim() === "",
      addressLine2: addressLine2.trim() === "",
      city: city.trim() === "",
      state: state.trim() === "",
      pincode: pincode.trim().length !== 6,
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((e) => e);
    if (!hasErrors) {
      console.log("Address saved!");
      // Add your save logic here
    }
  };

  return (
    <View className="flex-1 bg-[#161616] px-2 pt-6 pb-4">
      <ScrollView className="flex-grow" showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 px-4 justify-center">
          <VStack className="w-full space-y-4">
            {/* Address Line 1 */}
            <FormControl isInvalid={errors.addressLine1}>
              <FormControlLabel className="pt-3">
                <FormControlLabelText
                  className="text-white"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  Address Line 1
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit" size="xl">
                <TextInput
                  placeholder="House No, Street"
                  placeholderTextColor="#888"
                  className="text-white py-4 px-4"
                  style={{ fontSize: 26 }}
                  ref={(ref) => {
                    if (ref) {
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      });
                    }
                  }}
                  value={addressLine1}
                  onChangeText={setAddressLine1}
                />
              </Input>
              {errors.addressLine1 && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>Required field.</FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            {/* Address Line 2 */}
            <FormControl isInvalid={errors.addressLine2}>
              <FormControlLabel className="pt-3">
                <FormControlLabelText
                  className="text-white"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  Address Line 2
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit" size="xl">
                <TextInput
                  placeholder="Area, Locality"
                  placeholderTextColor="#888"
                  className="text-white py-4 px-4"
                  style={{ fontSize: 26 }}
                  ref={(ref) => {
                    if (ref) {
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      });
                    }
                  }}
                  value={addressLine2}
                  onChangeText={setAddressLine2}
                />
              </Input>
              {errors.addressLine2 && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>Required field.</FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            {/* City */}
            <FormControl isInvalid={errors.city}>
              <FormControlLabel className="pt-3">
                <FormControlLabelText
                  className="text-white"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  City
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit" size="xl">
                <TextInput
                  placeholder="City Name"
                  placeholderTextColor="#888"
                  className="text-white py-4 px-4"
                  ref={(ref) => {
                    if (ref) {
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      });
                    }
                  }}
                  style={{ fontSize: 26 }}
                  value={city}
                  onChangeText={setCity}
                />
              </Input>
              {errors.city && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>Required field.</FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            {/* State */}
            <FormControl isInvalid={errors.state}>
              <FormControlLabel className="pt-3">
                <FormControlLabelText
                  className="text-white"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  State
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit" size="xl">
                <TextInput
                  placeholder="State"
                  placeholderTextColor="#888"
                  className="text-white py-4 px-4"
                  style={{ fontSize: 26 }}
                  ref={(ref) => {
                    if (ref) {
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      });
                    }
                  }}
                  value={state}
                  onChangeText={setState}
                />
              </Input>
              {errors.state && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>Required field.</FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            {/* Pincode */}
            <FormControl isInvalid={errors.pincode}>
              <FormControlLabel className="pt-3">
                <FormControlLabelText
                  className="text-white"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  Pincode
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit" size="xl">
                <TextInput
                  keyboardType="numeric"
                  maxLength={6}
                  placeholder="000000"
                  placeholderTextColor="#888"
                  className="text-white py-4 px-4"
                  style={{ fontSize: 26 }}
                  ref={(ref) => {
                    if (ref) {
                      ref.setNativeProps({
                        style: { fontFamily: "PPFormulaCondensed-Bold" },
                      });
                    }
                  }}
                  value={pincode}
                  onChangeText={setPincode}
                />
              </Input>
              {errors.pincode && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    Enter valid 6-digit pincode.
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
          </VStack>
        </KeyboardAvoidingView>
      </ScrollView>

      {/* SAVE Button */}
      <TouchableOpacity
        className="bg-[#E5FF03] py-1 mt-4 mx-4 rounded-sm shadow-lg shadow-slate-50 items-center"
        onPress={handleSave}>
        <Text
          className="text-black"
          style={{
            fontFamily: "PPFormulaCondensed-Bold",
            fontSize: 38,
          }}>
          SAVE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddAddress;
