import React from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";

export default function ActivityScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Activity Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("onBoarding")}>
        <Text>Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
}
