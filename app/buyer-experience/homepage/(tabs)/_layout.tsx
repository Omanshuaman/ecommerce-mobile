import { View, Text, Image, Modal } from "react-native";
import React from "react";
import { router, Tabs, usePathname, useRouter } from "expo-router";
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
import tabicons from "@/constants/tabicons";

const TabsLayout = () => {
  const pathname = usePathname();
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  const tabIcons = {
    index: tabicons.MonitorIcon,
    addproduct: tabicons.magnifyingGlass,
    orders: tabicons.shoppingBag,
    profile: "https://randomuser.me/api/portraits/men/1.jpg",
  };
  return (
    <>
      <Tabs
        backBehavior="history"
        tabBar={(props: any) => <TabBar {...props} tabIcons={tabIcons} />}>
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
    </>
  );
};

export default TabsLayout;
