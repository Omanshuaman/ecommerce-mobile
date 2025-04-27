import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const FeedReels = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(id);
  return (
    <View>
      <Text>FeedReels</Text>
    </View>
  );
};

export default FeedReels;
