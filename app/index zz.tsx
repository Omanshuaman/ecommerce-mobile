import { FlatList, StyleSheet, Text, View } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";
export default function HomeScreen() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
    // <Button>
    //   <Text style={{ fontFamily: "PPFormulaCondensed-Light" }}>Click Me</Text>
    // </Button>
  );
}
