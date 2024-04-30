import React from "react";
import { Text, View } from "../Themed";
import { Image, Touchable, TouchableOpacity } from "react-native";
import ImageView from "../common/ImageView";
import { router } from "expo-router";

export default function ActivityOneScreen() {
  return (
    <View className="w-full h-screen  flex-1 bg-green-200 flex-col px-4 items-center justify-center ">
      <View className="w-full h-[43vh] bg-transparent ">
        <ImageView
          url={require("../../assets/images/activity/activityOne.png")}
        />
      </View>

      <View className="w-[90%]  items-center justify-center bg-transparent  ">
        <Text className="text-2xl font-bold text-center text-green-800 ">
          Enjoy Resturant Quality Meals at Home{" "}
        </Text>
      </View>

      <View className="pt-24  items-center justify-center bg-transparent  ">
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text className="border px-10 py-4 rounded-lg bg-green-600 text-white text-xl font-semibold">
            Next
          </Text>
        </TouchableOpacity>
        <Text className=" w-[250px]  pt-5 text-2xl font-bold text-center text-green-800 ">
          Design By Karan Chaudhary
        </Text>
      </View>
    </View>
  );
}
