import { Text, View } from "@/components/Themed";
import React from "react";

export default function MainScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Home Page</Text>
      <View className="my-6 h-[1px] bg-gray-300 dark:bg-gray-800 w-4/5" />
    </View>
  );
}
