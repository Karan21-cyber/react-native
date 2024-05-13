import { swiperDTO } from "@/dtos/swiper-dto";
import React from "react";
import { Image, Text, View } from "react-native";

export const SwiperItem = ({ item }: { item: swiperDTO }) => {
  const title = item?.title?.split(" ");
  const highlight_title = title[1];
  const start_title = title[0];
  const remaining_title = title.slice(2).join(" ");

  return (
    <View className="flex justify-center  w-screen items-center">
      <View className=" w-[90%] h-[50vh] flex flex-col justify-center items-center gap-6 ">
        <Image source={item?.image} className="w-full h-full object-contain" />
        <View className="flex flex-col  justify-center items-center gap-2 ">
          <Text className="text-3xl text-center font-bold">
            {start_title}{" "}
            <Text className=" text-blue-500">{highlight_title}</Text>{" "}
            {remaining_title}
          </Text>
          <Text className="">{item?.description}</Text>
        </View>
      </View>
    </View>
  );
};
