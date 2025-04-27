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
import ProductCard from "../../../components/ProductCard";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import FeedCard from "@/components/FeedCard";

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
    const dummyFeeds: Feed[] = [
      {
        id: "1",
        title: "Big Buck Bunny",
        previewImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        duration: "8:18",
        uploadTime: "May 9, 2011",
        views: "24,969,123",
        author: "Vlc Media Player",
        videoUrl:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description:
          "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        subscriber: "25254545 Subscribers",
        isLive: true,
      },
      {
        id: "2",
        title: "The first Blender Open Movie from 2006",
        previewImage:
          "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        duration: "12:18",
        uploadTime: "May 9, 2011",
        views: "24,969,123",
        author: "Blender Inc.",
        videoUrl:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        description:
          "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        subscriber: "25254545 Subscribers",
        isLive: true,
      },
      {
        id: "3",
        title: "For Bigger Blazes",
        previewImage: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
        duration: "8:18",
        uploadTime: "May 9, 2011",
        views: "24,969,123",
        author: "T-Series Regional",
        videoUrl:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        description:
          "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        subscriber: "25254545 Subscribers",
        isLive: true,
      },
      {
        id: "4",
        title: "For Bigger Escape",
        previewImage:
          "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        duration: "8:18",
        uploadTime: "May 9, 2011",
        views: "24,969,123",
        author: "T-Series Regional",
        videoUrl:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        description:
          " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        subscriber: "25254545 Subscribers",
        isLive: false,
      },
      {
        id: "5",
        title: "Big Buck Bunny",
        previewImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        duration: "8:18",
        uploadTime: "May 9, 2011",
        views: "24,969,123",
        author: "Vlc Media Player",
        videoUrl:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description:
          "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        subscriber: "25254545 Subscribers",
        isLive: true,
      },
      {
        id: "6",
        title: "For Bigger Blazes",
        previewImage: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
        duration: "8:18",
        uploadTime: "May 9, 2011",
        views: "24,969,123",
        author: "T-Series Regional",
        videoUrl:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        description:
          "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        subscriber: "25254545 Subscribers",
        isLive: false,
      },
      {
        id: "7",
        title: "For Bigger Escape",
        previewImage:
          "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        duration: "8:18",
        uploadTime: "May 9, 2011",
        views: "24,969,123",
        author: "T-Series Regional",
        videoUrl:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        description:
          " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        subscriber: "25254545 Subscribers",
        isLive: true,
      },
      {
        id: "8",
        title: "The first Blender Open Movie from 2006",
        previewImage:
          "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        duration: "12:18",
        uploadTime: "May 9, 2011",
        views: "24,969,123",
        author: "Blender Inc.",
        videoUrl:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        description:
          "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        subscriber: "25254545 Subscribers",
        isLive: false,
      },
    ];

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
  const navigation = useNavigation();
  const focused = navigation.isFocused();
  const path = usePathname();

  useEffect(() => {
    console.log(
      `Current page is focused: ${focused}, current page name: ${path}`
    );
  }, [focused]);
  const [index, setIndex] = useState(0);
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
      {/* Top section for 'Warehouse' text */}
      <ImageBackground
        source={require("../../../assets/bg-image.jpg")}
        style={{ flex: 1, paddingHorizontal: 15 }} // Add padding to avoid overlap with the header
        resizeMode="cover">
        <View className="flex-row justify-between items-center px-4 py-4">
          {/* Left: Profile Info */}
          <View className="flex-row items-center gap-3">
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/1.jpg",
              }}
              className="w-9 h-9 rounded-full"
            />
            <View>
              <Text className="text-white font-bold text-lg">
                Samuil Sadovsky
              </Text>
              <Text className="text-gray-400 text-sm">5.2k followers</Text>
            </View>
          </View>
          {/* Right: Share Icon */}
          <TouchableOpacity>
            <Feather name="share-2" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <Select className="py-2">
          <SelectTrigger
            size="lg"
            className="border border-transparent bg-gray-500/20 px-2 text-white flex-row items-center justify-between">
            <SelectInput
              placeholder="Active"
              className="text-white text-base"
              placeholderTextColor="white"
            />
            <Entypo name="chevron-down" size={16} color="white" />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Active" value="active" />
              <SelectItem label="Unactive" value="unactive" />
            </SelectContent>
          </SelectPortal>
        </Select>
        <View className="flex-row bg-black  rounded-md">
          {stats.map((item, index) => (
            <View
              key={index}
              className="flex-1 items-center justify-center gap-2 py-3"
              style={
                index !== stats.length - 1
                  ? {
                      borderRightColor: "gray",
                      borderRightWidth: 1,
                      borderStyle: "dashed",
                    }
                  : {}
              }>
              <View className="flex-row items-center justify-center w-full gap-4">
                <Text className="text-white font-bold text-xl">
                  {item.count}
                </Text>
                <Feather name="arrow-down-left" size={16} color="white" />
              </View>
              <Text className="text-sm text-gray-400 mt-1">{item.label}</Text>
            </View>
          ))}
        </View>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
        <View className=" mb-20 ">
          <Button
            onPress={() => console.log("Perform action for:", selectedOption)}
            className="h-16 bg-[#E5FF03] flex-row justify-between items-center rounded-sm w-full">
            <Link href={`/creator-store/${selectedOption[1]}`}>
              <Text
                className="uppercase text-black"
                style={{ fontFamily: "PPFormulaCondensed-Bold", fontSize: 24 }}>
                {selectedOption[0]}
              </Text>
            </Link>
            <TouchableOpacity onPress={() => setShowActionsheet(true)}>
              <View className="flex-row items-center gap-1">
                <Text
                  className="uppercase text-black"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
                    fontSize: 24,
                  }}>
                  {selectedOption[2]}/4
                </Text>
                <Entypo name="chevron-down" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </Button>
        </View>

        <Actionsheet
          isOpen={showActionsheet}
          onClose={handleClose}
          className="">
          <ActionsheetBackdrop className="" />
          <ActionsheetContent className="bg-black border border-black pb-0 absolute -top-36">
            <ActionsheetDragIndicatorWrapper className="pb-4">
              <ActionsheetDragIndicator className="w-12 h-[5px]" />
            </ActionsheetDragIndicatorWrapper>
            <View className="border border-white rounded-sm">
              <ActionsheetItem
                onPress={() =>
                  handleOptionSelect("Add first product", "/add-product", 1)
                }
                className="flex-row justify-between items-center border-[0.5px] border-b-white/40 px-5 py-5 active:bg-[#E5FF03] ">
                <Text
                  className="text-white"
                  style={{ fontSize: 16, fontFamily: "HelveticaNeue-Medium" }}>
                  Add first product
                </Text>
                <Feather
                  name="box"
                  size={26}
                  color="white"
                  activeColor="black"
                />
              </ActionsheetItem>

              <ActionsheetItem
                onPress={() =>
                  handleOptionSelect("Setup Payments", "/setup-payments", 2)
                }
                className="flex-row justify-between items-center border-[0.5px] border-b-white/40 px-5 py-5 active:bg-[#E5FF03] ">
                <Text
                  className="text-white"
                  style={{ fontSize: 16, fontFamily: "HelveticaNeue-Medium" }}>
                  Setup Payments
                </Text>
                <MaterialIcons name="payment" size={26} color="white" />
              </ActionsheetItem>

              <ActionsheetItem
                onPress={() =>
                  handleOptionSelect(
                    "Setup pickup address",
                    "/setup-pickup-address",
                    3
                  )
                }
                className="flex-row justify-between items-center border-[0.5px] border-b-white/40 px-5 py-5 active:bg-[#E5FF03] ">
                <Text
                  className="text-white"
                  style={{ fontSize: 16, fontFamily: "HelveticaNeue-Medium" }}>
                  Setup pickup address
                </Text>
                <Ionicons name="location-outline" size={26} color="white" />
              </ActionsheetItem>

              <ActionsheetItem
                onPress={() =>
                  handleOptionSelect("Make store live", "/make-store-live", 4)
                }
                className="flex-row justify-between items-center px-5 py-5 active:bg-[#E5FF03]">
                <Text
                  className="text-white"
                  style={{ fontSize: 16, fontFamily: "HelveticaNeue-Medium" }}>
                  Make store live
                </Text>
                <Ionicons name="storefront-outline" size={26} color="white" />
              </ActionsheetItem>
            </View>
          </ActionsheetContent>
        </Actionsheet>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Warehouse;
