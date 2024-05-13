import { CommpnInputDTO } from "@/dtos/input-dto";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export const CommonInput = ({
  label,
  id,
  error,
  type,
  register,
  className,
  placeholder,
}: CommpnInputDTO) => {
  return (
    <View className="flex flex-col gap-1 w-full">
      <Text className="text-lg ">{label}</Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={type}
        className="border pl-3  rounded w-full h-10 text-lg"
      />
    </View>
  );
};

export const CommonInputPassword = ({
  label,
  id,
  error,
  type,
  register,
  className,
  placeholder,
}: CommpnInputDTO) => {
  const [show, setShow] = useState(false);
  return (
    <View className="flex flex-col gap-1 w-full">
      <Text className="text-lg ">{label}</Text>

      <View className="relative w-full  ">
        <TextInput
          placeholder={placeholder}
          secureTextEntry={show}
          className="border px-4 rounded w-full h-10 text-lg"
        />
        <TouchableOpacity
          onPress={() => setShow(!show)}
          className="absolute top-0 right-0  w-10 h-10 flex justify-center items-center"
        >
          <Icon name={show ? "eye-slash" : "eye"} size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
