import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Image,
  Platform,
} from "react-native";

import { Search } from "../../../../components/Search/Search";

const extraProps = Platform.select({
  android: {},
  ios: { zIndex: 5, elevation: 5 },
});
const AddProduct = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 100, ...extraProps }}>
          <View style={{ height: "100%" }}>
            <Search />
          </View>
        </View>

        <ScrollView
          alwaysBounceVertical={false}
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ alignItems: "center" }}
          style={{ flex: 1, marginHorizontal: 16 }}>
          <Image
            style={{ width: "100%", height: 500, borderRadius: 16 }}
            source={require("../../../../assets/coffee.jpg")}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AddProduct;
