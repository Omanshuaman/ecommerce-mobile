import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
  BackHandler,
  ImageBackground,
} from "react-native";
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
} from "@/components/ui/actionsheet";
import { Button, ButtonText } from "@/components/ui/button";
import { TabView, SceneMap } from "react-native-tab-view";
import React, { useEffect, useState } from "react";
import { Entypo, MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@/components/ui/select";
import { FontAwesome } from "@expo/vector-icons";
import { Link, useNavigation, usePathname } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductCard from "../../../../components/ProductCard";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import FeedCard from "@/components/FeedCard";
import dummyFeeds from "@/constants/video";
import { backState } from "@/store/productStore";
const FirstRoute = () => {
  interface Product {
    image: string;
    selectedBrand: string;
    selectedCategory: string[];
    discountedPrice: number;
    originalPrice: number;
    pieces: number;
    description: string;
    selectedProductCondition: string[];
    selectedPrimaryMaterial: string;
    selectedPrimaryColor: string;
    selectedOccasion: string;
  }

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem("myData");
        console.log("object");
        if (value !== null) {
          setProducts(JSON.parse(value));
          return JSON.parse(value);
        }
      } catch (e) {
        console.log("Loading error", e);
      }
    };
    fetchData();
  }, []);
  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  }) as number;

  return (
    <View className="flex-1">
      {products.length > 0 ? (
        <FlatList
          data={products}
          numColumns={numColumns}
          contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
          columnWrapperClassName="gap-2"
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      ) : (
        <View className="flex-1 justify-center items-center">
          <Image
            source={require("@/assets/empty-screen.png")}
            resizeMode="contain"
            className="w-96"
          />
        </View>
      )}
    </View>
  );
};

const SecondRoute = () => {
  interface Feed {
    previewImage: string;
    videoUrl: string;
    title: string;
    id: string;
    duration: string;
    uploadTime: string;
    views: string;
    author: string;
    description: string;
    subscriber: string;
    isLive: boolean;
  }

  const [feeds, setFeeds] = useState<Feed[]>([]);

  useEffect(() => {
    setFeeds(dummyFeeds);
  }, []);

  const numColumns = 2;

  return (
    <View className="flex-1">
      {feeds.length > 0 ? (
        <FlatList
          data={feeds}
          numColumns={numColumns}
          contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
          columnWrapperClassName="gap-2"
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <FeedCard feed={item} />}
        />
      ) : (
        <View className="flex-1 justify-center items-center">
          <Image
            source={require("@/assets/empty-screen.png")}
            resizeMode="contain"
            className="w-96"
          />
        </View>
      )}
    </View>
  );
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
const routes = [
  { key: "first", title: "Products" },
  { key: "second", title: "Feed" },
];
const Warehouse = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState([
    "Tap to add first product",
    "/add-product",
    1,
  ]);
  const handleClose = () => setShowActionsheet(false);
  const layout = useWindowDimensions();
  // useEffect(() => {
  //   const backAction = () => {
  //     BackHandler.exitApp();
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);
  const backIndex = backState((state: any) => state.back);
  console.log("backIndex", backIndex);
  const navigation = useNavigation();
  const focused = navigation.isFocused();
  const path = usePathname();

  const [index, setIndex] = useState(backIndex);

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map(
      (_: unknown, i: number) => i
    );

    return (
      <View className="flex-row justify-center items-center p-1 rounded-full my-2">
        {props.navigationState.routes.map((route: any, i: number) => {
          const isActive = index === i;

          return (
            <TouchableOpacity
              key={route.key}
              className={`flex-1 items-center py-2 rounded-md ${
                isActive ? "bg-white/10" : ""
              }`}
              onPress={() => setIndex(i)}>
              <Text
                className={`text-white font-semibold ${
                  isActive ? "opacity-100" : "opacity-50"
                }`}>
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const handleOptionSelect = (option: string, pages: string, num: any) => {
    setSelectedOption([option, pages, num]);
    setShowActionsheet(false);
  };
  const stats = [
    { label: "Total Views", count: 200 },
    { label: "Total Sold", count: 200 },
    { label: "Wishlisted", count: 200 },
  ];
  return (
    <SafeAreaView className="flex-1">
      <Text>Warehouse</Text>
    </SafeAreaView>
  );
};

export default Warehouse;
