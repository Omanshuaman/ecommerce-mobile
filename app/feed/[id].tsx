import { View, FlatList, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import PlayVideoListItem from "@/components/PlayVideoListItem";
import dummyFeeds from "@/constants/video";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

const FeedReels = () => {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar backgroundColor={"#3b2c2d"} barStyle="light-content" />

      <FlatList
        ref={flatListRef}
        data={dummyFeeds}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <PlayVideoListItem
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
    </SafeAreaView>
  );
};

export default FeedReels;
