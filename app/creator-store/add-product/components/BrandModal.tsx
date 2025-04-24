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
  ImageBackground,
  TouchableOpacity,
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
          size="full">
          <ImageBackground
            source={require("../../../../assets/bg-image.jpg")}
            style={{ flex: 1 }} // Add padding to avoid overlap with the header
            resizeMode="cover">
            <ModalBackdrop />
            <ModalContent className="h-full bg-transparent border border-transparent">
              <View className="flex-row items-center justify-between px-2 mb-4">
                <TouchableOpacity
                  onPress={() => {
                    setBrandModal(false);
                  }}>
                  <Ionicons name="chevron-back" size={18} color="white" />
                </TouchableOpacity>

                <Text
                  className="text-white text-center"
                  style={{
                    fontFamily: "HelveticaNeue-Bold",
                    fontSize: 18,
                  }}>
                  Brand
                </Text>

                {/* Invisible placeholder for spacing */}
                <View style={{ width: 20 }} />
              </View>

              <ModalHeader>
                <View className="bg-black border border-white rounded-sm mb-4 px-3 flex-row items-center justify-center w-full">
                  <Ionicons
                    name="search"
                    size={16}
                    color="#A0AEC0"
                    className="mr-2"
                  />
                  <TextInput
                    placeholder="Search brand name"
                    placeholderTextColor="#A0AEC0"
                    className=" text-white"
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
              <ModalBody className="px-0">
                <ScrollView showsVerticalScrollIndicator={false} className="">
                  {data.map((brand) => (
                    <TouchableOpacity
                      key={brand}
                      className="py-3 px-2"
                      onPress={() => setSelectedBrand(brand)}>
                      <View
                        key={brand}
                        className="flex-row justify-between items-center bg-transparent">
                        <Text
                          className="text-white text-base"
                          style={{
                            fontFamily: "HelveticaNeue-Bold",
                            fontSize: 15,
                          }}>
                          {brand}
                        </Text>
                        {selectedBrand === brand && (
                          <Ionicons name="checkmark" size={20} color="white" />
                        )}
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#E5FF03] w-full h-[56px] rounded-sm shadow-lg shadow-slate-50"
                  onPress={() => {
                    setBrandModal(false);
                  }}>
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

export default BrandModal;
