import { Image, Text, TouchableOpacity, View } from "react-native";

export default function OnBoardingScreen({ navigation }) {
  return (
    <View className="relative bg-gray-100 flex flex-col  justify-center items-center w-full h-full ">
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className="absolute top-1 right-1"
      >
        
        <Text>Skip</Text>
      </TouchableOpacity>
      <View className="w-[80%] h-[80vh] ">
        <Image
          source={require("../../images/welcome.jpg")}
          className="w-full h-full object-contain"
        />
        <View>Discover Experienced Doctors</View>
      </View>
    </View>
  );
}
