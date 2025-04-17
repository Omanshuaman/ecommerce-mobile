import { View, Text } from "react-native";
import React from "react";
import AddProduct from "../add-product/index";

const AddProductTab = () => {
  return (
    <View className="flex-1 bg-black">
      <View className="mb-20 flex-1">
        <AddProduct />
      </View>
    </View>
  );
};

export default AddProductTab;
