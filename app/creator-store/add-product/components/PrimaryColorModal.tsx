import React, { useState } from "react";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { Button, ButtonText } from "@/components/ui/button";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Center } from "@/components/ui/center";
import { CloseIcon, Icon } from "@/components/ui/icon";

const PrimaryColorModal = ({
  primaryColorModal,
  setPrimaryColorModal,
  selectedPrimaryColor,
  setSelectedPrimaryColor,
}: any) => {
  const colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredColors, setFilteredColors] = useState(colors);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilteredColors(
      colors.filter((color) =>
        color.toLowerCase().includes(query.trim().toLowerCase())
      )
    );
  };

  const handleSave = () => {
    setPrimaryColorModal(false);
  };

  const handleCancel = () => {
    setPrimaryColorModal(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center className="h-fit">
        <Modal
          isOpen={primaryColorModal}
          size="full"
          closeOnOverlayClick={false}
          onClose={() => {
            setPrimaryColorModal(false);
          }}>
          <ImageBackground
            source={require("../../../../assets/bg-image.jpg")}
            style={{ flex: 1 }}
            resizeMode="cover">
            <ModalBackdrop />
            <ModalContent className="h-full bg-transparent border border-transparent">
              <View className="flex-row items-center justify-between px-2 mb-4">
                <TouchableOpacity
                  onPress={() => {
                    setPrimaryColorModal(false);
                  }}>
                  <Ionicons name="chevron-back" size={18} color="white" />
                </TouchableOpacity>

                <Text
                  className="text-white text-center"
                  style={{
                    fontFamily: "HelveticaNeue-Bold",
                    fontSize: 18,
                  }}>
                  Select Primary Color
                </Text>

                {/* Invisible placeholder for spacing */}
                <View style={{ width: 20 }} />
              </View>
              <ModalHeader>
                <View className="bg-black border border-white rounded-sm mb-2 my-4 px-3 flex-row items-center justify-center w-full">
                  <Ionicons
                    name="search"
                    size={16}
                    color="#A0AEC0"
                    className="mr-2"
                  />
                  <TextInput
                    placeholder="Search color"
                    placeholderTextColor="#A0AEC0"
                    className=" text-white"
                    value={searchQuery}
                    onChangeText={handleSearch}
                  />
                </View>
                <ModalCloseButton>
                  <Icon
                    as={CloseIcon}
                    size="md"
                    className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
                  />
                </ModalCloseButton>
              </ModalHeader>

              <ModalBody className="px-0">
                <ScrollView showsVerticalScrollIndicator={false}>
                  {filteredColors.length === 0 ? (
                    <Text className="text-white text-center py-4">
                      No colors found
                    </Text>
                  ) : (
                    filteredColors.map((color) => (
                      <TouchableOpacity
                        key={color}
                        onPress={() => setSelectedPrimaryColor(color)}
                        className="py-3 px-2">
                        <View
                          key={color}
                          className="flex-row justify-between items-center bg-transparent">
                          <Text
                            className="text-white text-base"
                            style={{
                              fontFamily: "HelveticaNeue-Bold",
                              fontSize: 15,
                            }}>
                            {color}
                          </Text>
                          {selectedPrimaryColor === color && (
                            <Ionicons
                              name="checkmark"
                              size={20}
                              color="white"
                            />
                          )}
                        </View>
                      </TouchableOpacity>
                    ))
                  )}
                </ScrollView>
              </ModalBody>

              <ModalFooter>
                <Button
                  onPress={handleSave}
                  className="bg-[#E5FF03] w-full h-[52px] rounded-sm shadow-lg shadow-slate-50">
                  <ButtonText
                    className="text-black"
                    style={{
                      fontFamily: "PPFormulaCondensed-Bold",
                      fontSize: 36,
                      paddingTop: 30,
                    }}>
                    SAVE
                  </ButtonText>
                </Button>
              </ModalFooter>
            </ModalContent>
          </ImageBackground>
        </Modal>
      </Center>
    </SafeAreaView>
  );
};

export default PrimaryColorModal;
