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

const FeedReels = () => {
  const { videoUrl } = useLocalSearchParams<{ videoUrl: string }>();
  const [videoList, setVideoList] = useState<string[]>([]);
  const WindowHeight = Dimensions.get("window").height;
  const [currentVideoIndex, setCurrentVideoIndex] = useState<
    number | undefined
  >();

  useEffect(() => {
    if (videoUrl) {
      setVideoList([videoUrl]); // First video
      fetchVideos(); // Fetch rest
    }
  }, [videoUrl]);

  const fetchVideos = async () => {
    console.log(dummyFeeds);

    const result = dummyFeeds.filter((feed) => feed.videoUrl !== videoUrl);

    const videoUrls = result.map((feed) => feed.videoUrl);

    setVideoList((prev) => [...prev, ...videoUrls]);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          position: "absolute",
          zIndex: 10,
          padding: 20,
          paddingTop: 50,
        }}
        onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

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
        style={{ zIndex: -1 }}
        onScroll={(e) => {
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
