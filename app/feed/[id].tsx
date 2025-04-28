import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import PlayVideoListItem from "@/components/PlayVideoListItem";
import { Ionicons } from "@expo/vector-icons";
import dummyFeeds from "@/constants/video";
import Carousal from "@/components/Carousal";

const FeedReels = () => {
  const { videoUrl } = useLocalSearchParams<{ videoUrl: string }>();
  const [videoList, setVideoList] = useState<string[]>([]);
  const WindowHeight = Dimensions.get("window").height;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (videoUrl) {
      setVideoList([videoUrl]); // First video
      fetchVideos(); // Fetch rest
    }
  }, [videoUrl]);

  const fetchVideos = async () => {
    const result = dummyFeeds.filter((feed) => feed.videoUrl !== videoUrl);

    const videoUrls = result.map((feed) => feed.videoUrl);

    setVideoList((prev) => [...prev, ...videoUrls]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <FlatList
        data={videoList}
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
    </View>
  );
};

export default FeedReels;
