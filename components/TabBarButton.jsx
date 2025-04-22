import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import tabicons from "@/constants/tabicons";
import { SvgUri } from "react-native-svg";

const TabBarButton = (props) => {
  const { isFocused, label, routeName, color } = props;
  const icons = {
    index: (props) => (
      <Image
        source={tabicons.warehouse}
        tintColor="white"
        resizeMode="contain"
        className="size-8"
      />
    ),
    addproduct: (props) => (
      <Image
        source={tabicons.PlusCircle}
        tintColor="white"
        resizeMode="contain"
        className="size-8"
      />
    ),
    orders: (props) => (
      <Image
        source={tabicons.packageIcon}
        tintColor="white"
        resizeMode="contain"
        className="size-8"
      />
    ),
    profile: (props) => (
      <Image
        source={{
          uri: "https://randomuser.me/api/portraits/men/1.jpg",
        }}
        resizeMode="contain"
        className="size-9 rounded-full"
      />
    ),
  };
  const backgroundColor = useSharedValue("rgba(0,0,0,0)");

  useEffect(() => {
    backgroundColor.value = withSpring(
      isFocused ? "#323232" : "rgba(0,0,0,0)",
      {
        duration: 0,
      }
    );
  }, [backgroundColor, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value,
    };
  });

  return (
    <Pressable {...props} style={styles.container}>
      <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
        {icons[routeName]({
          color,
        })}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  iconContainer: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 4,
  },
});

export default TabBarButton;
