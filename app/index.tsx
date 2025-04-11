import { FlatList, StyleSheet, View } from "react-native";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";
import { ActivityIndicator } from "react-native";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { Text } from "@/components/ui/text";
import { useQuery } from "@tanstack/react-query";
import { listProducts } from "@/api/products";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: listProducts,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error fetching products</Text>;
  }
  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });

  return (
    <FlatList
      key={numColumns}
      data={products}
      numColumns={numColumns}
      contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
