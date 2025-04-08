import { Text, View } from "react-native";

interface Product {
  name: string;
}

function ProductListItem({ product }: { product: Product }) {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
}
export default ProductListItem;
