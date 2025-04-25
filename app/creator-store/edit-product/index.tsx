import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import AddProduct from "../add-product";
import { useLocalSearchParams } from "expo-router";
import { useProduct } from "@/store/productStore";

const EditProduct = () => {
  return <AddProduct />;
};

export default EditProduct;
