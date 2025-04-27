import { Image, View, Text, Pressable } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

const FeedCard = ({ feed }: any) => (
  <Link
    href={`/feed/${feed.id}?previewImage=${encodeURIComponent(
      feed.previewImage
    )}`}
    asChild>
    <Pressable className="w-1/2">
      <View className=" ">
        <View className="relative">
          <Image
            source={{ uri: feed.previewImage }}
            className="w-full h-60 "
            resizeMode="cover"
          />

          <View className="absolute bottom-1 left-1 flex-row items-center space-x-1 px-2 py-1 rounded-md gap-1">
            <View className="bg-white flex-row border border-black px-1 py-0.5 gap-1 justify-center items-center rounded-sm  ">
              <AntDesign name="eyeo" size={18} color="black" />
              <Text
                className="text-black"
                style={{ fontFamily: "HelveticaNeue-Medium", fontSize: 18 }}>
                3
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  </Link>
);

export default FeedCard;
