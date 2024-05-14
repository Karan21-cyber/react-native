import {
  CommonInput,
  CommonInputPassword,
} from "@/components/common/common-input";
import { CommonLoginHeader } from "@/components/common/common-login-header";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const SignUpScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View className="relative top-10 h-full px-10 flex flex-1 gap-10 items-center justify-center ">
      <CommonLoginHeader title="Sign Up" />

      <SafeAreaView className="flex flex-col justify-center items-center ">
        <View className="flex flex-col  ">
          <View className="flex flex-col   ">
            <CommonInput label="Name" placeholder="John Doe" type="text" />
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

          <TouchableOpacity className=" w-full flex flex-row justify-end ">
            {/* <CheckBox value={isSelected} onValueChange={setSelection} /> */}
            <Text className="text-sm underline font-semibold text-blue-500">
              Terms & condition
            </Text>
          </TouchableOpacity>

          <View className="pt-5">
            <TouchableOpacity className="w-full  bg-blue-500 rounded-full flex flex-row justify-center items-center">
              <Text className="w-full text-center py-2 text-lg text-white font-bold">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <View className="w-full px-10 flex flex-row justify-between items-center">
        <View className="w-[30%] h-[1px]  bg-gray-300"></View>
        <View>
          <Text className="text-base ">Or sign up with</Text>
        </View>
        <View className="w-[30%] h-[1px] bg-gray-300"></View>
      </View>

      <View>
        <View className="flex flex-row gap-5 justify-center items-center">
          <TouchableOpacity className=" w-14 h-14 p-2 rounded-full flex border border-gray-400   justify-center items-center">
            <Image
              source={require("../../images/icons/google.png")}
              className="w-full h-full object-contain"
            />
          </TouchableOpacity>
          <TouchableOpacity className=" w-14 h-14 p-2 rounded-full  flex justify-center items-center border border-gray-400">
            <Image
              source={require("../../images/icons/facebook.png")}
              className="w-full h-full object-contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View className="flex flex-row gap-1 justify-center items-center">
          <Text className="text-base ">Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="text-blue-500 underline">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
