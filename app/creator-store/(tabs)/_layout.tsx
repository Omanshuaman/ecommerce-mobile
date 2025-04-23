import { View, Text, Image, Modal } from "react-native";
import React from "react";
import { Tabs, usePathname, useRouter } from "expo-router";
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
import TabBar from "@/components/TabBar";
import { Feather } from "@expo/vector-icons";

const TabsLayout = () => {
  const pathname = usePathname();
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  return (
    <>
      <Tabs
        backBehavior="history"
        tabBar={(props: any) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="addproduct"
          options={{
            title: "Add",
            headerShown: false,
          }}
          listeners={({}) => ({
            tabPress: (e: any) => {
              e.preventDefault(); // stop default behavior
              setShowActionsheet(true);
            },
          })}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Order",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
          }}
        />
      </Tabs>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent className="bg-black border border-black">
          <ActionsheetDragIndicatorWrapper className="pb-6">
            <ActionsheetDragIndicator className="w-12 h-[5px]" />
          </ActionsheetDragIndicatorWrapper>
          <View className="border border-white/90 rounded-md">
            <ActionsheetItem
              onPress={() => {
                // Handle "Add a new product" action
                handleClose();
              }}
              className="flex-row justify-between items-center px-5 py-6 active:bg-[#E5FF03]">
              <Text
                className="text-white"
                style={{ fontSize: 17, fontFamily: "HelveticaNeue-Medium" }}>
                Add a new product
              </Text>
              <Feather name="camera" size={23} color="white" />
            </ActionsheetItem>
            <View className="border-t border-dashed border-white" />

            <ActionsheetItem
              onPress={() => {
                // Handle "Upload reel" action
                handleClose();
              }}
              className="flex-row justify-between items-center px-5 py-6 active:bg-[#E5FF03]">
              <Text
                className="text-white"
                style={{ fontSize: 17, fontFamily: "HelveticaNeue-Medium" }}>
                Upload reel
              </Text>
              <Feather
                name="film"
                size={23}
                color="white"
                activeColor="black"
              />
            </ActionsheetItem>
          </View>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
};

export default TabsLayout;
