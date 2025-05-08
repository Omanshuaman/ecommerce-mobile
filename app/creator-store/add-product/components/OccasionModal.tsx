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
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Center } from "@/components/ui/center";
import { CloseIcon, Icon } from "@/components/ui/icon";

const OccasionModal = ({
  occasionModal,
  setOccasionModal,
  selectedOccasion,
  setSelectedOccasion,
}: any) => {
  const occasions = ["Casual", "Formal", "Party", "Wedding", "Sports"];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOccasions, setFilteredOccasions] = useState(occasions);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilteredOccasions(
      occasions.filter((occasion) =>
        occasion.toLowerCase().includes(query.trim().toLowerCase())
      )
    );
  };

  const handleSave = () => {
    setOccasionModal(false);
  };

  const handleCancel = () => {
    setOccasionModal(false);
  };

  return (
    <Center className="h-fit">
      <Modal
        isOpen={occasionModal}
        size="full"
        closeOnOverlayClick={false}
        onClose={() => {
          setOccasionModal(false);
        }}>
        <SafeAreaView>
          <ImageBackground
            source={require("../../../../assets/bg-image.jpg")}
            style={{ flex: 1 }}
            resizeMode="cover">
            <ModalBackdrop />
            <ModalContent className="h-full bg-transparent border border-transparent">
              <View className="flex-row items-center justify-between px-2 mb-4">
                <TouchableOpacity
                  onPress={() => {
                    setOccasionModal(false);
                  }}>
                  <Ionicons name="chevron-back" size={18} color="white" />
                </TouchableOpacity>

                <Text
                  className="text-white text-center"
                  style={{
                    fontFamily: "HelveticaNeue-Bold",
                    fontSize: 18,
                  }}>
                  Occasion
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
                    placeholder="Search occasion"
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
                <ScrollView showsVerticalScrollIndicator={false} className="">
                  {filteredOccasions.length === 0 ? (
                    <Text className="text-white text-center py-4">
                      No occasions found
                    </Text>
                  ) : (
                    filteredOccasions.map((occasion) => (
                      <TouchableOpacity
                        key={occasion}
                        className="py-3 px-2"
                        onPress={() => setSelectedOccasion(occasion)}>
                        <View
                          key={occasion}
                          className="flex-row justify-between items-center bg-transparent">
                          <Text
                            className="text-white text-base"
                            style={{
                              fontFamily: "HelveticaNeue-Bold",
                              fontSize: 15,
                            }}>
                            {occasion}
                          </Text>
                          {selectedOccasion === occasion && (
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
                      paddingTop: 10,
                    }}>
                    SAVE
                  </ButtonText>
                </Button>
              </ModalFooter>
            </ModalContent>
          </ImageBackground>
        </SafeAreaView>
      </Modal>
    </Center>
  );
};

export default OccasionModal;
