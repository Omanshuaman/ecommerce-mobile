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
    <SafeAreaView style={{ flex: 1 }}>
      <Center className="h-fit">
        <Modal
          isOpen={primaryMaterialModal}
          size="full"
          closeOnOverlayClick={false}
          onClose={() => {
            setPrimaryMaterialModal(false);
          }}>
          <ImageBackground
            source={require("../../../../assets/bg-image.jpg")}
            style={{ flex: 1 }}
            resizeMode="cover">
            <ModalBackdrop />
            <ModalContent className="h-full bg-transparent border border-transparent">
              <View className="flex-row items-center justify-between px-2 mb-2">
                <TouchableOpacity
                  onPress={() => {
                    setPrimaryMaterialModal(false);
                  }}>
                  <Ionicons name="chevron-back" size={18} color="white" />
                </TouchableOpacity>

                <Text
                  className="text-white text-center"
                  style={{
                    fontFamily: "HelveticaNeue-Bold",
                    fontSize: 18,
                  }}>
                  Select Primary Material
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
                    placeholder="Search Material name"
                    placeholderTextColor="#A0AEC0"
                    className=" text-white"
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
              <ModalBody className="px-0">
                <ScrollView showsVerticalScrollIndicator={false} className="">
                  {filteredMaterials.map((material) => (
                    <TouchableOpacity
                      key={material}
                      onPress={() => setSelectedPrimaryMaterial(material)}
                      className="py-3 px-2">
                      <View
                        key={material}
                        className="flex-row justify-between items-center bg-transparent">
                        <Text
                          className="text-white text-base"
                          style={{
                            fontFamily: "HelveticaNeue-Bold",
                            fontSize: 15,
                          }}>
                          {material}
                        </Text>
                        {selectedPrimaryMaterial === material && (
                          <Ionicons name="checkmark" size={20} color="white" />
                        )}
                      </View>
                    </TouchableOpacity>
                  ))}
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

export default PrimaryMaterialModal;
