import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const PaymentDetails = () => {
  const savedCards = [
    {
      cardType: "MASTERCARD",
      maskedNumber: "*****8843",
      name: "Sanjay Khanna",
    },
    {
      cardType: "MASTERCARD",
      maskedNumber: "*****8843",
      name: "Sanjay Khanna",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <View className="flex-1 bg-[#161616] px-4 pt-6 pb-4">
        <ScrollView className="flex-grow" showsVerticalScrollIndicator={false}>
          {/* Saved UPI */}
          <Text
            className="text-white py-2"
            style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 14 }}>
            Saved UPI
          </Text>
          <View className="border border-white p-4 rounded-sm mb-4 flex-row justify-between items-center">
            <Text
              className="text-white"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 30 }}>
              SANJAYKHANNA@OKCICI
            </Text>
            <Menu
              placement="top"
              offset={5}
              disabledKeys={["Settings"]}
              trigger={({ ...triggerProps }) => {
                return (
                  <Button {...triggerProps} className="bg-transparent">
                    <ButtonText className="text-xl">...</ButtonText>
                  </Button>
                );
              }}>
              <MenuItem
                key="Add account"
                textValue="Add account"
                className="bg-[#161616] gap-2 ">
                <MaterialIcons
                  name="edit"
                  size={18}
                  color="yellow"
                  className="mr-2"
                />
                <MenuItemLabel size="sm" className="text-white">
                  Edit
                </MenuItemLabel>
              </MenuItem>
              <MenuItem
                key="Community"
                textValue="Community"
                className="bg-[#161616] gap-2">
                <MaterialIcons
                  name="delete"
                  size={18}
                  color="red"
                  className="mr-2"
                />
                <MenuItemLabel size="sm" className="text-white">
                  Delete
                </MenuItemLabel>
              </MenuItem>
            </Menu>
          </View>

          {/* Saved Cards */}
          <Text
            className="text-white py-2"
            style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 14 }}>
            Saved Cards
          </Text>

          {savedCards.map((card, index) => (
            <View
              key={index}
              className="border border-white rounded-sm p-4 mb-3">
              <View className="flex-row justify-between items-center">
                <Text
                  className="text-white"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
                    fontSize: 30,
                  }}>
                  {card.cardType} {card.maskedNumber}
                </Text>
                <Menu
                  placement="top"
                  offset={5}
                  disabledKeys={["Settings"]}
                  trigger={({ ...triggerProps }) => {
                    return (
                      <Button {...triggerProps} className="bg-transparent">
                        <ButtonText className="text-xl">...</ButtonText>
                      </Button>
                    );
                  }}>
                  <MenuItem
                    key="Add account"
                    textValue="Add account"
                    className="bg-[#161616] gap-2">
                    <MaterialIcons
                      name="edit"
                      size={18}
                      color="yellow"
                      className="mr-2"
                    />
                    <MenuItemLabel size="sm" className="text-white">
                      Edit
                    </MenuItemLabel>
                  </MenuItem>
                  <MenuItem
                    key="Community"
                    textValue="Community"
                    className="bg-[#161616] gap-2">
                    <MaterialIcons
                      name="delete"
                      size={18}
                      color="red"
                      className="mr-2"
                    />
                    <MenuItemLabel size="sm" className="text-white">
                      Delete
                    </MenuItemLabel>
                  </MenuItem>
                </Menu>
              </View>
              <Text
                className="text-gray-300 mt-1"
                style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 13 }}>
                {card.name}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Add New Payment Button */}
        <TouchableOpacity
          className="bg-[#E5FF03] py-2 items-center mt-4 mx-2"
          onPress={() => {
            router.push("/creator-store/add-payments");
          }}>
          <Text
            className="text-black"
            style={{
              fontFamily: "PPFormulaCondensed-Bold",
              fontSize: 32,
            }}>
            ADD NEW PAYMENT METHOD
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentDetails;
