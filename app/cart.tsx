import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { useCart } from "@/store/cartStore";
import { Redirect } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function CartScreen() {
  const items = useCart((state) => state.items);
  const resetCart = useCart((state) => state.resetCart);
  const onCheckout = async () => {
    //  createOrderMutation.mutateAsync();
    resetCart();
    // openPaymentSheet();
  };

  if (items.length === 0) {
    return <Redirect href={"/"} />;
  }
  return (
    <FlatList
      data={items}
      contentContainerClassName="gap-2 max-w-[960px] w-full mx-auto p-2"
      renderItem={({ item }) => (
        <HStack className="bg-white p-3">
          <VStack space="sm">
            <Text className="font-bold">{item.product.title}</Text>
            <Text>$ {item.product.price}</Text>
          </VStack>
          <Text className="ml-auto">{item.quantity}</Text>
        </HStack>
      )}
      ListFooterComponent={() => (
        <Button onPress={onCheckout}>
          <ButtonText>Checkout</ButtonText>
        </Button>
      )}
    />
  );
}
