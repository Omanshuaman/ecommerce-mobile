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
import React, { useEffect } from "react";
import {
  Image,
  TextInput,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
const API_ENDPOINT = "https://randomuser.me/api/?results=50";
const ModalComponent = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [fullData, setFullData] = React.useState([]);

  const [searchQuery, setSearchQuery] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = fullData.filter((item) => {
      const fullName = `${item.name.first} ${item.name.last}`.toLowerCase();
      return (
        fullName.includes(formattedQuery) ||
        item.email.toLowerCase().includes(formattedQuery)
      );
    });
    setData(filteredData);
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(API_ENDPOINT);
        const json = await response.json();
        setData(json.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <SafeAreaView>
      <Center className="h-fit">
        <Button onPress={() => setShowModal(true)}>
          <ButtonText>Show Modal</ButtonText>
        </Button>
        <Modal
          isOpen={showModal}
          closeOnOverlayClick={false}
          onClose={() => {
            setShowModal(false);
          }}
          size="md">
          <ModalBackdrop />
          <ModalContent className="max-h-[90%]">
            <ModalHeader>
              <TextInput
                placeholder="Search"
                className="px-3 py-3 bg-background-100 rounded-md text-typography-700 w-[90%]"
                placeholderTextColor="#A0AEC0"
                autoCapitalize="none"
                autoCorrect={false}
                value={searchQuery}
                onChangeText={(query) => handleSearch(query)}
                clearButtonMode="always"></TextInput>
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
                {data.map((item) => (
                  <View
                    key={item.login.uuid}
                    className="flex-row items-center gap-2 mb-4">
                    <Image
                      source={{ uri: item.picture.thumbnail }}
                      className="w-8 h-8 rounded-full"
                      alt="User Image"
                    />
                    <View className="flex-1">
                      <Text className="text-typography-600">
                        {item.name.first} {item.name.last}
                      </Text>
                      <Text className="text-typography-400 text-sm">
                        {item.email}
                      </Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                action="secondary"
                onPress={() => {
                  setShowModal(false);
                }}>
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}>
                <ButtonText>Explore</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </SafeAreaView>
  );
};

export default ModalComponent;
