import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const SavedAddresses = () => {
  const addresses = [
    {
      title: "HOME",
      address:
        "Rd Number 1, near Bartel India Expo, Mada Manzil, Banjara Hills, Hyderabad, Telangana 500034",
    },
    {
      title: "HOME 2",
      address:
        "Rd Number 1, near Bartel India Expo, Mada Manzil, Banjara Hills, Hyderabad, Telangana 500034",
    },
  ];

  return (
    <View className="flex-1 bg-[#161616] px-4 pt-6 pb-4">
      <ScrollView className="flex-grow" showsVerticalScrollIndicator={false}>
        {addresses.map((item, index) => (
          <View key={index} className="border border-white p-4 rounded-sm mb-4">
            <View className="flex-row justify-between items-center">
              <Text
                className="text-white"
                style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 28 }}>
                {item.title}
              </Text>
              <Menu
                placement="top"
                offset={5}
                trigger={({ ...triggerProps }) => (
                  <Button
                    {...triggerProps}
                    className="bg-transparent items-start">
                    <ButtonText className="text-xl text-white">...</ButtonText>
                  </Button>
                )}>
                <MenuItem className="bg-[#161616] gap-2">
                  <MaterialIcons name="edit" size={18} color="yellow" />
                  <MenuItemLabel size="sm" className="text-white">
                    Edit
                  </MenuItemLabel>
                </MenuItem>
                <MenuItem className="bg-[#161616] gap-2">
                  <MaterialIcons name="delete" size={18} color="red" />
                  <MenuItemLabel size="sm" className="text-white">
                    Delete
                  </MenuItemLabel>
                </MenuItem>
              </Menu>
            </View>
            <Text
              className="text-gray-300 mt-2"
              style={{ fontFamily: "HelveticaNeue-Light", fontSize: 13 }}>
              {item.address}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Add New Address Button */}
      <TouchableOpacity
        className="bg-[#E5FF03] py-2 items-center mt-4 mx-3"
        onPress={() => {
          router.push("/creator-store/add-address");
        }}>
        <Text
          className="text-black"
          style={{
            fontFamily: "PPFormulaCondensed-Bold",
            fontSize: 32,
          }}>
          ADD NEW ADDRESS
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavedAddresses;
