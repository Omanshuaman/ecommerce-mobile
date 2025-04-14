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

const brands = [
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
interface BrandModalProps {
  selectedBrand: string | null;
  setSelectedBrand: (brand: string) => void;
  brandModal: boolean;
  setBrandModal: (modalState: boolean) => void;
}
const BrandModal = ({
  selectedBrand,
  setSelectedBrand,
  brandModal,
  setBrandModal,
}: BrandModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = React.useState(brands);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setData(
      brands.filter((brand) =>
        brand.toLowerCase().includes(query.toLowerCase())
      )
    );
  };
  return (
    <SafeAreaView>
      <Center className="h-fit">
        <Modal
          isOpen={brandModal}
          closeOnOverlayClick={false}
          onClose={() => {
            setBrandModal(false);
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
                  placeholder="Search brand name"
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
                {data.map((brand) => (
                  <Button
                    key={brand}
                    onPress={() => setSelectedBrand(brand)}
                    className="flex-row justify-between items-center bg-transparent">
                    <ButtonText className="text-white text-base">
                      {brand}
                    </ButtonText>
                    {selectedBrand === brand && (
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
                  setBrandModal(false);
                }}>
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                className="bg-yellow-400"
                onPress={() => {
                  setBrandModal(false);
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

export default BrandModal;
