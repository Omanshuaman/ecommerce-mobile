import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export default function OrderCard() {
  const [isPacked, setIsPacked] = useState(false);
  const [isShipped, setIsShipped] = useState(false);
  return (
    <View className="p-4 bg-[#161616] h-full flex-1">
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="border border-gray-100 rounded-md bg-black py-1">
          <View className="flex-col justify-between items-start px-4 py-3">
            <View className="flex-row items-center gap-3">
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/1.jpg",
                }}
                className="w-7 h-7 rounded-full"
              />
              <View>
                <Text className="text-white font-bold text-lg">
                  Samuil Sadovsky
                </Text>
              </View>
            </View>
          </View>
          <View className="border-t border-dashed border-white mb-2" />
          <View className="flex-row items-center px-4 py-2">
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/6.jpg",
              }}
              className="size-16 rounded-sm mr-3"
            />
            <View className="flex-1 gap-1">
              <Text
                className="text-white text-lg"
                style={{ fontFamily: "HelveticaNeue-Medium" }}>
                VisionCapture X1
              </Text>
              <Text
                className="text-white text-base"
                style={{ fontFamily: "HelveticaNeue-Light" }}>
                Like New
              </Text>
            </View>
            <View className="items-end gap-1">
              <Text
                className="text-white text-lg"
                style={{ fontFamily: "HelveticaNeue-Medium" }}>
                $25.00
              </Text>
              <Text
                className="text-white text-base"
                style={{ fontFamily: "HelveticaNeue-Light" }}>
                x16
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setIsPacked(true)}
            disabled={isPacked}
            className="border border-white rounded-md py-2 my-3 mx-4"
            style={{
              borderColor: isPacked ? "green" : "white",
            }}>
            <Text
              className="text-center p-1"
              style={{
                fontFamily: "PPFormulaCondensed-Bold",
                fontSize: 28,
                color: isPacked ? "#A3FAC7" : "white",
              }}>
              {isPacked ? "PACKED" : "MARK AS PACKED"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => setIsShipped(true)}
          disabled={!isPacked}
          className="border border-white rounded-sm py-2 my-3"
          style={{
            borderColor: isPacked ? "green" : "white",
            opacity: isPacked ? 1 : 0.5,
          }}>
          <Text
            style={{
              color: isShipped ? "#A3FAC7" : "white",
              fontFamily: "PPFormulaCondensed-Bold",
              fontSize: 28,
            }}
            className="text-center p-1 uppercase">
            {isShipped ? "Delivery slip printed" : "PRINT DELIVERY SLIP"}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity
        disabled={!isShipped}
        className="bg-[#E5FF03] rounded-sm w-full py-3 justify-center items-center shadow-lg shadow-slate-50"
        style={{
          opacity: isShipped ? 1 : 0.5,
        }}>
        <Text
          style={{
            fontFamily: "PPFormulaCondensed-Bold",
            fontSize: 30,
          }}
          className="text-center text-black uppercase">
          Mark for delivery
        </Text>
      </TouchableOpacity>
    </View>
  );
}
