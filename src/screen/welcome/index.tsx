import React from "react";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View className="relative    bg-gray-100 flex flex-col  justify-center items-center w-full h-full ">
      <View className="w-[80%] h-[80vh] ">
        <Image
          source={require("../../images/welcome.jpg")}
          className="w-full h-full object-contain"
        />
      </View>

      <View className=" absolute rounded-[40px_40px_0px_0px] shadow-2xl  shadow-black bottom-0 w-full h-[45vh] bg-white z-10 flex flex-col gap-6 justify-center items-center ">
        <View className="w-[80%] flex flex-col gap-4">
          <Text className="text-2xl text-center font-bold text-gray-800">
            Your <Text className="text-blue-600">Ultimate Doctor</Text>{" "}
            Appointment Booking App
          </Text>
          <Text className="text-center text-gray-500">
            Book your appointments effortlessly and manage your health journey
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("onBoarding")}
          className="w-[70%]"
        >
          <Text className="button text-white text-bold  bg-blue-700 w-full text-center py-4 text-lg rounded-full">
            Let's Get Started
          </Text>
        </TouchableOpacity>

        <View className="text-center  text-base text-gray-500 flex flex-row gap-2  items-center justify-center ">
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="button text-bold  text-blue-700 w-full text-center  rounded-full">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
