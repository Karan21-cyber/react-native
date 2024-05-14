import React from "react";
import { Text, View } from "react-native";

export const CommonLoginHeader = ({title}) => {
  return (
    <View className=" w-full  flex flex-col gap-2 items-center">
      <Text className="sign-in-text text-2xl font-black ">{title}</Text>
      <Text className="text-base text-gray-600">
        Hi! Welcome back , you've been missed{" "}
      </Text>
    </View>
  );
};
