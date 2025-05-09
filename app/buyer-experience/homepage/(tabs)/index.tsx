import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductCard from "../../../../components/ProductCard";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import FeedCard from "@/components/FeedCard";
import dummyFeeds from "@/constants/video";
import { backState } from "@/store/productStore";
import FeedReels from "@/app/feed/[id]";
import PlayVideoListItem from "@/components/PlayVideoListItem";
import PlayVideoListItemBuyer from "@/components/PlayVideoListItemBuyer";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
const FirstRoute = () => {
  interface Populars {
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

  const [populars, setPopulars] = useState<Populars[]>([]);
  useEffect(() => {
    setPopulars(dummyFeeds);
  }, []);
  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  }) as number;
  const { videoUrl } = useLocalSearchParams<{ videoUrl: string }>();
  const [videoList, setVideoList] = useState<string[]>([]);
  const WindowHeight = Dimensions.get("window").height;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (videoUrl) {
      const index = dummyFeeds.findIndex((feed) => feed.videoUrl === videoUrl);
      setCurrentVideoIndex(index);
      setTimeout(() => {
        flatListRef?.current?.scrollToIndex({ index, animated: false });
      }, 0);
    }
  }, [videoUrl]);

  const flatListRef = React.useRef<FlatList>(null);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <FlatList
        ref={flatListRef}
        data={dummyFeeds}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <PlayVideoListItemBuyer
            video={item}
            index={index}
            activeIndex={currentVideoIndex}
          />
        )}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.y / WindowHeight
          );
          setCurrentVideoIndex(index);
        }}
        pagingEnabled={true}
      />
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
  { key: "first", title: "Popular" },
  { key: "second", title: "Following" },
];
const Warehouse = () => {
  const layout = useWindowDimensions();

  const backIndex = backState((state: any) => state.back);
  const navigation = useNavigation();

  const [index, setIndex] = useState(backIndex);

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map(
      (_: unknown, i: number) => i
    );

    return (
      <View className="flex-row justify-center items-center p-2 rounded-full my-2">
        {props.navigationState.routes.map((route: any, i: number) => {
          const isActive = index === i;

          return (
            <TouchableOpacity
              key={route.key}
              className={`flex-1 items-center py-2 rounded-sm mx-2 ${
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

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor={"#3b2c2d"} barStyle="light-content" />

      <ImageBackground
        source={require("../../../../assets/bg-image.jpg")}
        style={{ flex: 1 }} // Add padding to avoid overlap with the header
        resizeMode="cover">
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Warehouse;
