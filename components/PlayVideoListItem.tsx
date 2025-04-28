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
import { router } from "expo-router";
import { Box } from "./ui/box";
import Carousal from "./Carousal";
import { Feather } from "@expo/vector-icons";
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
import { useProduct } from "@/store/productStore";
const PlayVideoListItem = ({ video, index, activeIndex }: any) => {
  const [status, setStatus] = useState({});
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  console.log(activeIndex, index);
  const reel = useProduct((state: any) => state.addReel);
  const addReel = () => {
    reel(video);
  };
  return (
    <View>
      <View className="flex-row absolute top-5 z-10 w-full justify-between items-center px-4 py-4">
        {/* Left: Profile Info */}
        <View className="flex-row items-center gap-3">
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/men/1.jpg",
            }}
            className="w-9 h-9 rounded-full"
          />
          <View>
            <Text className="text-white font-bold text-lg">
              Samuil Sadovsky
            </Text>
            <Text className="text-gray-300 text-base">End of reason sale</Text>
          </View>
        </View>
        <TouchableOpacity className="border border-white px-2 py-1 rounded-sm">
          <Text
            className="text-white"
            style={{ fontFamily: "HelveticaNeue-Light" }}>
            View Store
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          bottom: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "flex-end",
        }}>
        <Carousal />
        <Box className="flex-row gap-2 px-4">
          <TouchableOpacity
            className="flex-1 border border-white bg-transparent justify-center items-center py-1 rounded-sm  "
            onPress={() => setShowActionsheet(true)}>
            <Text
              className="text-white"
              style={{
                fontFamily: "PPFormulaCondensed-Bold",
                fontSize: 36,
              }}>
              UNPUBLISH
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push(`/creator-store/add-reel`);
              addReel();
            }}
            className="flex-1 bg-[#E5FF03] justify-center items-center py-1 rounded-sm shadow-lg shadow-white ">
            <Text
              className="text-black"
              style={{
                fontFamily: "PPFormulaCondensed-Bold",
                fontSize: 36,
              }}>
              EDIT PRODUCT
            </Text>
          </TouchableOpacity>
        </Box>
        <Select className="">
          <SelectPortal isOpen={showActionsheet} onClose={handleClose}>
            <SelectBackdrop />
            <SelectContent className="bg-black border border-dashed p-4">
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <Text
                className="text-white py-2"
                style={{ fontSize: 15, fontFamily: "HelveticaNeue-Medium" }}>
                Are you sure you want to unpublish?
              </Text>
              <Text
                className=" text-typography-400 pb-6 text-center "
                style={{ fontSize: 14, fontFamily: "HelveticaNeue-Light" }}>
                Unpublishing will remove it from people who have added it to
                their bag
              </Text>
              <TouchableOpacity className="bg-black py-2 border border-white items-center shadow-lg shadow-slate-50 rounded-sm w-full">
                <Text
                  className="text-white"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
                    fontSize: 36,
                  }}>
                  UNPUBLISH
                </Text>
              </TouchableOpacity>

              {/* Update Button */}
              <TouchableOpacity className="bg-[#E5FF03] py-1 mt-3 items-center shadow-lg shadow-slate-50 rounded-sm w-full">
                <Text
                  className="text-black"
                  style={{
                    fontFamily: "PPFormulaCondensed-Bold",
                    fontSize: 36,
                  }}>
                  CANCEL
                </Text>
              </TouchableOpacity>
            </SelectContent>
          </SelectPortal>
        </Select>
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
