import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { Text } from "@/components/ui/text";
import { Icon, CloseIcon } from "@/components/ui/icon";
import { Ionicons } from "@expo/vector-icons"; // For back arrow and checkmark

import React, { useEffect, useState } from "react";
import {
  Image,
  TextInput,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
const API_ENDPOINT = "https://randomuser.me/api/?results=50";
const ProductConditions = ["New", "Like New", "Used", "Worn"];

interface ProductConditionModalProps {
  selectedProductCondition: string | null;
  setSelectedProductCondition: (ProductCondition: string) => void;
  productConditionModal: boolean;
  setProductConditionModal: (modalState: boolean) => void;
  conditionDescription: string;
  setConditionDescription: (desc: string) => void;
}

const ProductConditionModal = ({
  selectedProductCondition,
  setSelectedProductCondition,
  productConditionModal,
  setProductConditionModal,
  conditionDescription,
  setConditionDescription,
}: ProductConditionModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(ProductConditions);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setData(
      ProductConditions.filter((condition) =>
        condition.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <SafeAreaView>
      <Center className="h-fit">
        <Modal
          isOpen={productConditionModal}
          closeOnOverlayClick={false}
          onClose={() => setProductConditionModal(false)}
          size="md">
          <ModalBackdrop />
          <ModalContent className="max-h-[90%] bg-[#161616]">
            <ModalHeader>
              <View className="bg-neutral-800 rounded-md mb-4 px-3 py-1 flex-row items-center">
                <Ionicons name="search" size={16} color="#A0AEC0" />
                <TextInput
                  placeholder="Search Product Condition"
                  placeholderTextColor="#A0AEC0"
                  className="flex-1 text-white ml-2"
                  value={searchQuery}
                  onChangeText={handleSearch}
                />
              </View>
              <ModalCloseButton>
                <Icon as={CloseIcon} size="md" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((condition) => (
                  <Button
                    key={condition}
                    onPress={() => setSelectedProductCondition(condition)}
                    className="flex-row justify-between items-center bg-transparent">
                    <ButtonText className="text-white text-base">
                      {condition}
                    </ButtonText>
                    {selectedProductCondition === condition && (
                      <Ionicons name="checkmark" size={20} color="white" />
                    )}
                  </Button>
                ))}

                <View className="mt-6">
                  <Text className="text-white mb-2">Condition Description</Text>
                  <TextInput
                    multiline
                    numberOfLines={4}
                    placeholder="Describe the condition"
                    placeholderTextColor="#A0AEC0"
                    value={conditionDescription}
                    onChangeText={setConditionDescription}
                    className="border border-gray-600 text-white p-2 rounded-md"
                    style={{ textAlignVertical: "top" }}
                  />
                </View>
              </ScrollView>
            </ModalBody>

            <ModalFooter>
              <Button
                variant="outline"
                action="secondary"
                onPress={() => {
                  setProductConditionModal(false);
                }}>
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                className="bg-[#f6ff00]"
                onPress={() => setProductConditionModal(false)}>
                <ButtonText className="text-black font-bold text-base">
                  SAVE
                </ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </SafeAreaView>
  );
};

export default ProductConditionModal;
