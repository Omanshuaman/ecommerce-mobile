import { FlatList, StyleSheet, Text, View } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";
export default function HomeScreen() {
  return (
    // <FlatList
    //   data={products}
    //   renderItem={({ item }) => <ProductListItem product={item} />}
    // />
    <Button>
      <ButtonText>Click Me</ButtonText>
    </Button>
  );
}
