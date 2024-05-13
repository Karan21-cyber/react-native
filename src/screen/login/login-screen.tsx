import {
  CommonInput,
  CommonInputPassword,
} from "@/components/common/common-input";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export const LoginScreen = () => {
  return (
    <View className="relative top-10 h-full px-10 bg-green-200 flex flex-1 gap-10 items-center justify-center ">
      <View className=" w-full  flex flex-col gap-2 items-center">
        <Text className="sign-in-text text-2xl font-black ">Sign In</Text>
        <Text>Hi! Welcome back , you've been missed </Text>
      </View>

      <SafeAreaView className="flex flex-col justify-center items-center ">
        <View className="flex flex-col  gap-3">
          <View className="flex flex-col ">
            <CommonInput
              label="Email"
              placeholder="example@gmail.com"
              type="email-address"
            />
            <CommonInputPassword
              label="Password"
              placeholder="Enter your Password"
              type="password"
            />
          </View>

          <View>
            <TouchableOpacity className=" w-full flex flex-row justify-end ">
              <Text className="text-sm underline font-semibold text-blue-500">
                ForgetPassowrd?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
