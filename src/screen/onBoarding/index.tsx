import { SwiperItem } from "@/components/swiper/swiper-item";
import { CustomSwiperPagination } from "@/components/swiper/swiper-pagination";
import { swiperData } from "@/utils/swiper-data";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import { twJoin } from "tailwind-merge";

export default function OnBoardingScreen({ navigation }) {
  return (
    <View className="relative top-10  h-full bg-green-200 flex flex-col  gap-2 items-center justify-center ">
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className="absolute top-0 z-10 right-5"
      >
        <Text className="text-blue-500 font-bold">Skip</Text>
      </TouchableOpacity>

      <View className="flex flex-col pb-10  w-full h-screen ">
        <SwiperFlatList
          index={0}
          showPagination
          PaginationComponent={({ scrollToIndex, size, paginationIndex }) => (
            // pagination custom component
            <CustomSwiperPagination
              scrollToIndex={scrollToIndex}
              size={size}
              paginationIndex={paginationIndex}
              navigation={navigation}
            />
          )}
        >
          {/* swiper component */}
          {swiperData?.map((item, index) => (
            <SwiperItem key={index} item={item} />
          ))}
        </SwiperFlatList>
      </View>
    </View>
  );
}
