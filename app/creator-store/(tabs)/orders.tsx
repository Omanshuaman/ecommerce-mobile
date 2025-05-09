import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TABS = ["All", "New order", "Shipped", "Returns"];

const orders = [
  { id: 1, status: "New order" },
  { id: 2, status: "Shipped" },
  { id: 3, status: "Shipped" },
  { id: 4, status: "New order" },
  { id: 5, status: "New order" },
];

export default function OrdersScreen() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#3b2c2d"} barStyle="light-content" />

      <ImageBackground
        source={require("../../../assets/bg-image.jpg")}
        style={{ flex: 1 }} // Add padding to avoid overlap with the header
        resizeMode="cover">
        <View className="flex-1 px-4 pt-2">
          {/* Tabs */}
          <View className="flex-row mb-4">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {TABS.map((tab, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveTab(tab)}
                  className="flex-row items-center mr-3 py-3 rounded-md justify-center"
                  style={{
                    backgroundColor:
                      activeTab === tab ? "#4B3F3F" : "transparent",
                    paddingHorizontal: activeTab === tab ? 16 : 4,
                  }}>
                  <Text
                    className="text-base"
                    style={{
                      color: activeTab === tab ? "yellow" : "white",
                      fontFamily: "HelveticaNeue-Medium",
                    }}>
                    {tab}
                  </Text>

                  <View
                    className="ml-2 px-2 py-1 rounded-sm"
                    style={{
                      backgroundColor:
                        activeTab === tab ? "#facc15" : "#404040", // [#E5FF03] or Gray-700
                    }}>
                    <Text
                      className="text-sm"
                      style={{
                        color: activeTab === tab ? "black" : "white",
                        fontWeight: "bold",
                      }}>
                      22
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Orders List */}
          <ScrollView showsVerticalScrollIndicator={false} className="mb-20">
            {orders.map((order, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => router.push("/creator-store/order-info")}
                className="bg-black border border-white rounded-sm py-3 mb-4">
                {/* Top Section: Image + Order Info */}
                <View className="flex-row items-start py-2 px-4 ">
                  <Image
                    source={{
                      uri: "https://randomuser.me/api/portraits/men/3.jpg",
                    }}
                    className="h-16 w-16 rounded-sm mr-3"
                    resizeMode="cover"
                  />
                  <View className="flex-1 gap-1">
                    <Text
                      className="text-white mb-1"
                      style={{
                        fontFamily: "HelveticaNeue-Medium",
                        fontSize: 16,
                      }}>
                      Order #1234
                    </Text>
                    <Text
                      className="text-white"
                      style={{
                        fontFamily: "HelveticaNeue-Light",
                        fontSize: 14,
                      }}>
                      20/12/25, 4:00pm
                    </Text>
                  </View>
                </View>

                {/* Dotted Line */}
                <View className="border-t border-dashed border-white my-2" />

                {/* Status */}
                <Text
                  className="text-white pl-4"
                  style={{
                    fontFamily: "HelveticaNeue-Light",
                    fontSize: 14,
                  }}>
                  New order
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
