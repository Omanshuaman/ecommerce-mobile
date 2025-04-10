import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
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
import Entypo from "@expo/vector-icons/Entypo";

const FirstRoute = () => <View className="flex-1 bg-pink-500" />;

const SecondRoute = () => <View className="flex-1 bg-purple-700" />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
const routes = [
  { key: "first", title: "First" },
  { key: "second", title: "Second" },
];
const Warehouse = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  return (
    <View className="flex-1 bg-[#161616]">
      {/* Top section for 'Warehouse' text */}
      <View className=" items-center justify-center">
        <Text className="text-2xl text-white">Warehouse</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      {/* Bottom button */}
      <View className="p-4 mb-16">
        <Button
          onPress={() => setShowActionsheet(true)}
          className="h-14 bg-[#E5FF03] flex-row justify-between rounded-sm">
          <Text
            className="uppercase text-black"
            style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 22 }}>
            Tap to add first product
          </Text>
          <View className="flex-row items-center gap-1">
            <Text
              className="uppercase text-black"
              style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 24 }}>
              1/4
            </Text>
            <Entypo name="chevron-down" size={24} color="black" />
          </View>
        </Button>
      </View>

      {/* Actionsheet */}
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Edit Message</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Mark Unread</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Remind Me</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem isDisabled onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default Warehouse;
