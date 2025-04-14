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

const Categorys = [
  "Gucci",
  "Louis Vuitton",
  "Chanel",
  "Prada",
  "Hermès",
  "Michael Kors",
  "Coach",
  "Kate Spade",
  "Fossil",
  "Ted Baker",
  "Off-White",
  "Supreme",
  "Stüssy",
  "A Bathing Ape (BAPE)",
];
interface CategoryModalProps {
  selectedCategory: string[];
  setSelectedCategory: (categories: string[]) => void;
  categoryModal: boolean;
  setCategoryModal: (modalState: boolean) => void;
}
const CategoryModal = ({
  selectedCategory,
  setSelectedCategory,
  categoryModal,
  setCategoryModal,
}: CategoryModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = React.useState(Categorys);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setData(
      Categorys.filter((Category) =>
        Category.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const toggleCategorySelection = (category: string) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((item) => item !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  return (
    <SafeAreaView>
      <Center className="h-fit">
        <Modal
          isOpen={categoryModal}
          closeOnOverlayClick={false}
          onClose={() => {
            setCategoryModal(false);
          }}
          size="md">
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
                  placeholder="Search Category name"
                  placeholderTextColor="#A0AEC0"
                  className="flex-1 text-white"
                  value={searchQuery}
                  onChangeText={(query) => handleSearch(query)}
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
            <ModalBody>
              <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((Category) => (
                  <Button
                    key={Category}
                    onPress={() => toggleCategorySelection(Category)}
                    className="flex-row justify-between items-center bg-transparent">
                    <ButtonText className="text-white text-base">
                      {Category}
                    </ButtonText>
                    {selectedCategory.includes(Category) && (
                      <Ionicons name="checkmark" size={20} color="white" />
                    )}
                  </Button>
                ))}
              </ScrollView>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                action="secondary"
                onPress={() => {
                  setCategoryModal(false);
                }}>
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                className="bg-yellow-400"
                onPress={() => {
                  setCategoryModal(false);
                }}>
                <ButtonText className="text-black">Save</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </SafeAreaView>
  );
};

export default CategoryModal;
