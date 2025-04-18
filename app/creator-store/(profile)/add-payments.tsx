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

const AddPayments = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [nickname, setNickname] = useState("");

  const [errors, setErrors] = useState({
    cardNumber: false,
    expiry: false,
    cvv: false,
    nameOnCard: false,
    nickname: false,
  });

  const handleSave = () => {
    const newErrors = {
      cardNumber: cardNumber.length < 16,
      expiry: expiry.length < 4,
      cvv: cvv.length < 3,
      nameOnCard: nameOnCard.trim() === "",
      nickname: nickname.trim() === "",
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((e) => e);
    if (!hasErrors) {
      // Proceed to save
      console.log("All good!");
    }
  };

  return (
    <View className="flex-1 bg-[#161616] px-2 pt-6 pb-4">
      <ScrollView className="flex-grow" showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 px-4 justify-center">
          <VStack className="w-full space-y-4">
            {/* Card Number */}
            <FormControl
              isInvalid={errors.cardNumber}
              size="md"
              isDisabled={false}
              isReadOnly={false}
              isRequired={false}>
              <FormControlLabel className="pt-3">
                <FormControlLabelText
                  className="text-white"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  Card Number
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit" size="xl">
                <TextInput
                  keyboardType="numeric"
                  maxLength={16}
                  placeholder="0000 0000 0000 0000"
                  placeholderTextColor="#888"
                  className="text-white py-4 px-4"
                  style={{
                    fontSize: 26,
                  }}
                  ref={(ref) =>
                    ref &&
                    ref.setNativeProps({
                      style: { fontFamily: "PPFormulaCondensed-Bold" },
                    })
                  }
                  value={cardNumber}
                  onChangeText={setCardNumber}
                />
              </Input>
              {errors.cardNumber && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    Enter valid 16-digit card number.
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            {/* Expiry Date */}
            <FormControl isInvalid={errors.expiry}>
              <FormControlLabel className="pt-3">
                <FormControlLabelText
                  className="text-white"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  Valid Through
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit" size="xl">
                <TextInput
                  keyboardType="numeric"
                  maxLength={5}
                  placeholder="MM/YY"
                  placeholderTextColor="#888"
                  className="text-white px-3 py-4"
                  style={{
                    fontSize: 26,
                  }}
                  ref={(ref) =>
                    ref &&
                    ref.setNativeProps({
                      style: { fontFamily: "PPFormulaCondensed-Bold" },
                    })
                  }
                  value={expiry}
                  onChangeText={setExpiry}
                />
              </Input>
              {errors.expiry && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    Enter valid expiry date.
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            {/* CVV */}
            <FormControl isInvalid={errors.cvv}>
              <FormControlLabel className="pt-3">
                <FormControlLabelText
                  className="text-white"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  CVV
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit" size="xl">
                <TextInput
                  keyboardType="numeric"
                  maxLength={4}
                  placeholder="000"
                  placeholderTextColor="#888"
                  className="text-white px-3 py-4"
                  style={{
                    fontSize: 26,
                  }}
                  ref={(ref) =>
                    ref &&
                    ref.setNativeProps({
                      style: { fontFamily: "PPFormulaCondensed-Bold" },
                    })
                  }
                  value={cvv}
                  onChangeText={setCvv}
                />
              </Input>
              {errors.cvv && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>Enter valid CVV.</FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            {/* Name on Card */}
            <FormControl isInvalid={errors.nameOnCard}>
              <FormControlLabel className="pt-3">
                <FormControlLabelText
                  className="text-white"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  Name on card
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit" size="xl">
                <TextInput
                  placeholder="ENTER NAME AS ON CARD"
                  placeholderTextColor="#888"
                  className="text-white px-3 py-4"
                  style={{
                    fontSize: 26,
                  }}
                  ref={(ref) =>
                    ref &&
                    ref.setNativeProps({
                      style: { fontFamily: "PPFormulaCondensed-Bold" },
                    })
                  }
                  value={nameOnCard}
                  onChangeText={setNameOnCard}
                />
              </Input>
              {errors.nameOnCard && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    This field is required.
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            {/* Card Nickname */}
            <FormControl isInvalid={errors.nickname}>
              <FormControlLabel className="pt-3">
                <FormControlLabelText
                  className="text-white"
                  style={{ fontFamily: "HelveticaNeue-Medium" }}>
                  Card Nickname
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="bg-black h-fit" size="xl">
                <TextInput
                  placeholder="WHAT YOU WANT TO SAVE IT AS"
                  placeholderTextColor="#888"
                  className="text-white px-3 py-4"
                  style={{
                    fontSize: 26,
                  }}
                  ref={(ref) =>
                    ref &&
                    ref.setNativeProps({
                      style: { fontFamily: "PPFormulaCondensed-Bold" },
                    })
                  }
                  value={nickname}
                  onChangeText={setNickname}
                />
              </Input>
              {errors.nickname && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    This field is required.
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
          </VStack>
        </KeyboardAvoidingView>
      </ScrollView>
      {/* Save Button */}
      <TouchableOpacity
        className="bg-yellow-400 py-1 mt-4 mx-4 rounded-sm shadow-lg shadow-slate-50 items-center"
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

export default AddPayments;
