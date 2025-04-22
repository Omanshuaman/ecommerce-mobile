import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, usePathname, useRouter } from "expo-router";

import icons from "@/constants/icons";
import TabBar from "@/components/TabBar";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View
    className={`flex flex-col mt-5 items-center justify-center ${
      focused ? "" : "bg-transparent"
    }`}>
    <Image
      source={icon}
      tintColor={focused ? "white" : "gray"}
      resizeMode="contain"
      className={focused ? "size-9" : "size-8"}
    />
  </View>
);

const TabsLayout = () => {
  const pathname = usePathname();
  return (
    <Tabs backBehavior="history" tabBar={(props: any) => <TabBar {...props} />}>
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
  );
};

export default TabsLayout;
