import { LoginScreen } from "@/components/login/login-screen";
import { View } from "react-native";

export default function page() {
  return (
    <View className="w-full flex-1 justify-center items-center ">
      <LoginScreen />
    </View>
  );
}
