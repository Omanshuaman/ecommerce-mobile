import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEvent } from "expo";
import { ResizeMode, Video } from "expo-av";

const PlayVideoListItem = ({ video, index, activeIndex }: any) => {
  const [status, setStatus] = useState({});

  return (
    <View>
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          bottom: 20,
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "flex-end",
        }}>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/2.jpg",
                }}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#000",
                  borderRadius: 99,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Video
        style={[styles.video]}
        source={{
          uri: video,
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay={activeIndex == index}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default PlayVideoListItem;
const styles = StyleSheet.create({
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignSelf: "center",
  },
});
