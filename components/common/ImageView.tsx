import React from "react";
import { View } from "../Themed";
import { Image } from "react-native";

export default function ImageView({
  url,
  width,
  height,
}: {
  url: any;
  width?: string;
  height?: string;
}) {
  return (
    <View className={`relative flex-col w-full h-full bg-transparent `}>
      <Image source={url} className={`object-center w-full h-full`} />
    </View>
  );
}
