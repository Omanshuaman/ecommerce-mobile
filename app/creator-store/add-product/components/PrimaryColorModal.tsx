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
    <SafeAreaView>
      <Center className="h-fit">
        <Modal
          isOpen={primaryColorModal}
          size="md"
          closeOnOverlayClick={false}
          onClose={() => {
            setPrimaryColorModal(false);
          }}>
          <ModalBackdrop />
          <ModalContent className="max-h-[90%] bg-[#161616]">
            <ModalHeader>
              <View className="bg-neutral-800 rounded-md mb-4 px-3 py-1 flex-row items-center">
                <Ionicons
                  name="search"
                  size={16}
                  color="#A0AEC0"
                  className="mr-2"
                />
                <TextInput
                  placeholder="Search color"
                  placeholderTextColor="#A0AEC0"
                  className="flex-1 text-white"
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

            <ModalBody className="space-y-4">
              <ScrollView
                style={{ maxHeight: 250 }}
                showsVerticalScrollIndicator={false}
                className="divide-y divide-neutral-700">
                {filteredColors.length === 0 ? (
                  <Text className="text-white text-center py-4">
                    No colors found
                  </Text>
                ) : (
                  filteredColors.map((color) => (
                    <TouchableOpacity
                      key={color}
                      onPress={() => setSelectedPrimaryColor(color)}
                      className={`flex-row justify-between items-center py-3 px-2 rounded-md`}>
                      <Text className="text-white text-base">{color}</Text>
                      {selectedPrimaryColor === color && (
                        <Ionicons name="checkmark" size={20} color="white" />
                      )}
                    </TouchableOpacity>
                  ))
                )}
              </ScrollView>
            </ModalBody>

            <ModalFooter>
              <Button
                onPress={handleCancel}
                variant="outline"
                action="secondary">
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button onPress={handleSave} className="bg-[#E5FF03]">
                <ButtonText className="text-black">Save</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </SafeAreaView>
  );
};

export default PrimaryColorModal;
