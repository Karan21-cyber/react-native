import ActivityOneScreen from "@/components/activity/ActivityOneScreen";
import { View } from "@/components/Themed";
import { StatusBar } from "expo-status-bar";

export default function Activity() {
  return (
    <View className="w-full flex-1 justify-center items-center ">
      <ActivityOneScreen />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
