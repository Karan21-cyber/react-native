import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabThreeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Tab Three</Text>
      <View className="my-6 h-[1px] bg-gray-300 dark:bg-gray-800 w-4/5" />
      <EditScreenInfo path="app/(tabs)/three.tsx" />
    </View>
  );
}
