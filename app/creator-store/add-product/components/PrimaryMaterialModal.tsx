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

const PrimaryMaterialModal = ({
  primaryMaterialModal,
  setPrimaryMaterialModal,
  selectedPrimaryMaterial,
  setSelectedPrimaryMaterial,
}: any) => {
  const materials = ["Cotton", "Silk", "Wool", "Polyester", "Linen"];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMaterials, setFilteredMaterials] = useState(materials);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilteredMaterials(
      materials.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleSave = () => {
    setPrimaryMaterialModal(false);
  };

  const handleCancel = () => {
    setPrimaryMaterialModal(false);
  };

  return (
    <SafeAreaView>
      <Center className="h-fit">
        <Modal
          isOpen={primaryMaterialModal}
          size="md"
          closeOnOverlayClick={false}
          onClose={() => {
            setPrimaryMaterialModal(false);
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
                  placeholder="Search Material name"
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
            <ModalCloseButton />
            <ModalBody className="space-y-4">
              <ScrollView
                style={{ maxHeight: 250 }}
                showsVerticalScrollIndicator={false}
                className="divide-y divide-neutral-700">
                {filteredMaterials.map((material) => (
                  <TouchableOpacity
                    key={material}
                    onPress={() => setSelectedPrimaryMaterial(material)}
                    className="flex-row justify-between items-center py-3">
                    <Text className="text-white text-base">{material}</Text>
                    {selectedPrimaryMaterial === material && (
                      <Ionicons name="checkmark" size={20} color="white" />
                    )}
                  </TouchableOpacity>
                ))}
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

export default PrimaryMaterialModal;
