import { Text, TouchableOpacity, View } from "react-native";

export default function OnBoardingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>OnBoardingScreen Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
}
