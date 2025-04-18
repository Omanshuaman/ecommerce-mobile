import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, usePathname, useRouter } from "expo-router";

import icons from "@/constants/icons";

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
    <Tabs
      backBehavior="history"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#161616",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          minHeight: 65,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,

          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon icon={icons.warehouse} focused={focused} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="addproduct"
        options={{
          title: "Add",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon icon={icons.PlusCircle} focused={focused} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Order",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon
              icon={icons.packageIcon}
              focused={focused}
              title="Explore"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon icon={icons.person} focused={focused} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
