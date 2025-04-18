import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function OrderCard() {
  const [isPacked, setIsPacked] = useState(false);

  return (
    <View className="p-4 bg-[#161616] h-full">
      <View className="border border-gray-100 rounded-sm mb-2 bg-black">
        <View className="flex-col justify-between items-start p-2">
          <View className="flex-row items-center gap-3">
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/1.jpg",
              }}
              className="w-7 h-7 rounded-full"
            />
            <View>
              <Text className="text-white font-bold text-base">
                Samuil Sadovsky
              </Text>
            </View>
          </View>
        </View>
        <View className="border-t border-dashed border-white mb-2" />
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/men/6.jpg",
            }}
            className="h-14 w-14 rounded mr-3"
          />
          <View className="flex-1 mr-2">
            <Text className="text-white font-bold text-sm">
              VisionCapture X1
            </Text>
            <Text className="text-white text-xs">Like New</Text>
          </View>
          <View className="items-end">
            <Text className="text-white font-bold text-sm">$25.00</Text>
            <Text className="text-white text-xs">x16</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setIsPacked(true)}
          disabled={isPacked}
          style={{
            borderWidth: 1,
            borderRadius: 8,
            paddingVertical: 8,
            borderColor: isPacked ? "green" : "white",
            backgroundColor: isPacked ? "green" : "transparent",
          }}>
          <Text className="text-center font-bold text-white">
            {isPacked ? "PACKED" : "MARK AS PACKED"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        disabled={!isPacked}
        style={{
          backgroundColor: isPacked ? "white" : "#2d2d2d",
        }}
        className="rounded p-3 my-2">
        <Text
          style={{
            color: isPacked ? "black" : "#7d7d7d",
          }}
          className="text-center font-bold">
          PRINT DELIVERY SLIP
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={!isPacked}
        style={{
          backgroundColor: isPacked ? "#facc15" : "#854d0e",
        }}
        className="rounded p-3 mt-8">
        <Text
          style={{
            color: isPacked ? "black" : "#d97706",
          }}
          className="text-center font-bold">
          MARK FOR DELIVERY
        </Text>
      </TouchableOpacity>
    </View>
  );
}
