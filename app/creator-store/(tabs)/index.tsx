import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  Image,
} from "react-native";
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
} from "@/components/ui/actionsheet";
import { Button, ButtonText } from "@/components/ui/button";
import { TabView, SceneMap } from "react-native-tab-view";
import React, { useState } from "react";
import { Entypo, MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@/components/ui/select";
import { Link } from "expo-router";
const FirstRoute = () => (
  <View className="flex-1 bg-[#161616]">
    <View className="flex-1 justify-center items-center">
      <Text className="text-white text-lg">Your Feed is Empty</Text>
    </View>
  </View>
);

const SecondRoute = () => <View className="flex-1 bg-purple-700" />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
const routes = [
  { key: "first", title: "Product" },
  { key: "second", title: "Feed" },
];
const Warehouse = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState([
    "Tap to add first product",
    "/add-product",
    1,
  ]);
  const handleClose = () => setShowActionsheet(false);
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map(
      (_: unknown, i: number) => i
    );

    return (
      <View className="flex-row justify-center items-center bg-[#161616] p-1 rounded-full mx-4 my-2">
        {props.navigationState.routes.map((route: any, i: number) => {
          const isActive = index === i;

          return (
            <TouchableOpacity
              key={route.key}
              className={`flex-1 items-center py-2 rounded-md ${
                isActive ? "bg-white/10" : ""
              }`}
              onPress={() => setIndex(i)}>
              <Text
                className={`text-white font-semibold ${
                  isActive ? "opacity-100" : "opacity-50"
                }`}>
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const handleOptionSelect = (option: string, pages: string, num: any) => {
    setSelectedOption([option, pages, num]);
    setShowActionsheet(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#161616]">
      {/* Top section for 'Warehouse' text */}
      <View className="flex-row justify-between items-center px-4 py-4">
        {/* Left: Profile Info */}
        <View className="flex-row items-center gap-3">
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740",
            }}
            className="w-9 h-9 rounded-full"
          />
          <View>
            <Text className="text-white font-bold text-lg">
              Samuil Sadovsky
            </Text>
            <Text className="text-gray-400 text-sm">5.2k followers</Text>
          </View>
        </View>
        {/* Right: Share Icon */}
        <TouchableOpacity>
          <Feather name="share-2" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <Select className="px-4 mb-2">
        <SelectTrigger
          size="lg"
          className="border border-[#161616] bg-[#4646464D] px-2 text-white flex-row items-center justify-between">
          <SelectInput placeholder="Active" className="text-white text-base" />
          <Entypo name="chevron-down" size={16} color="white" />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="UX Research" value="ux" />
            <SelectItem label="Web Development" value="web" />
          </SelectContent>
        </SelectPortal>
      </Select>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      <View className="p-4 mb-16">
        <Button
          onPress={() => console.log("Perform action for:", selectedOption)}
          className="h-16 bg-[#E5FF03] flex-row justify-between items-center rounded-sm w-full">
          <Link href={`/creator-store/${selectedOption[1]}`}>
            <Text
              className="uppercase text-black"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 22 }}>
              {selectedOption[0]}
            </Text>
          </Link>
          <TouchableOpacity onPress={() => setShowActionsheet(true)}>
            <View className="flex-row items-center gap-1">
              <Text
                className="uppercase text-black"
                style={{
                  fontFamily: "PPFormulaCondensed-Bold",
                  fontSize: 24,
                }}>
                {selectedOption[2]}/4
              </Text>
              <Entypo name="chevron-down" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </Button>
      </View>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose} className="">
        <ActionsheetBackdrop />
        <ActionsheetContent className="bg-black border border-dashed pb-0">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem
            onPress={() =>
              handleOptionSelect("Add first product", "/add-product", 1)
            }
            className="flex-row justify-between items-center border-[0.5px] border-b-white/40 h-20">
            <Text
              className="text-white"
              style={{ fontSize: 16, fontFamily: "HelveticaNeue-Medium" }}>
              Add first product
            </Text>
            <Feather name="box" size={26} color="white" />
          </ActionsheetItem>

          <ActionsheetItem
            onPress={() =>
              handleOptionSelect("Setup Payments", "/setup-payments", 2)
            }
            className="flex-row justify-between items-center border-[0.5px] border-b-white/40 h-20">
            <Text
              className="text-white"
              style={{ fontSize: 16, fontFamily: "HelveticaNeue-Medium" }}>
              Setup Payments
            </Text>
            <MaterialIcons name="payment" size={26} color="white" />
          </ActionsheetItem>

          <ActionsheetItem
            onPress={() =>
              handleOptionSelect(
                "Setup pickup address",
                "/setup-pickup-address",
                3
              )
            }
            className="flex-row justify-between items-center border-[0.5px] border-b-white/40 h-20">
            <Text
              className="text-white"
              style={{ fontSize: 16, fontFamily: "HelveticaNeue-Medium" }}>
              Setup pickup address
            </Text>
            <Ionicons name="location-outline" size={26} color="white" />
          </ActionsheetItem>

          <ActionsheetItem
            onPress={() =>
              handleOptionSelect("Make store live", "/make-store-live", 4)
            }
            className="flex-row justify-between items-center h-20">
            <Text
              className="text-white"
              style={{ fontSize: 16, fontFamily: "HelveticaNeue-Medium" }}>
              Make store live
            </Text>
            <Ionicons name="storefront-outline" size={26} color="white" />
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </SafeAreaView>
  );
};

export default Warehouse;
