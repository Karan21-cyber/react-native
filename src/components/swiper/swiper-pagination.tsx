import { Text, TouchableOpacity, View } from "react-native";
import { twJoin, twMerge } from "tailwind-merge";
import Icon from "react-native-vector-icons/FontAwesome5";

export const CustomSwiperPagination = ({
  size,
  paginationIndex,
  scrollToIndex,
  navigation,
}) => {
  return (
    <View
      className={twJoin(
        "relative flex flex-row  items-center  px-5 py-1   ",
        paginationIndex === 0 ? "justify-end" : "justify-between"
      )}
    >
      <TouchableOpacity
        onPress={() =>
          scrollToIndex({
            index: paginationIndex > 0 && paginationIndex - 1,
          })
        }
        disabled={paginationIndex === 0}
        className={twMerge(
          "px-3 py-2 rounded-full border-2 border-blue-500",
          paginationIndex === 0 ? "hidden" : " block"
        )}
      >
        <Icon name="arrow-left" size={30} color="#4290f5" />
      </TouchableOpacity>

      {paginationIndex === size - 1 ? (
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-blue-500 font-bold text-lg">Next</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            scrollToIndex({
              index: paginationIndex !== size - 1 && paginationIndex + 1,
            })
          }
          disabled={paginationIndex === size - 1}
          className={twMerge(
            "px-3 py-2 rounded-full border-2 border-blue-500",
            paginationIndex === size - 1 ? "hidden" : "block"
          )}
        >
          <Icon name="arrow-right" size={30} color="#4290f5" />
        </TouchableOpacity>
      )}
      <View className=" absolute  left-[50%] right-[50%] translate-x-[-50%] flex  flex-row justify-center gap-2 items-center">
        {Array.from({ length: size }).map((_, i) => (
          <TouchableOpacity key={i} onPress={() => scrollToIndex({ index: i })}>
            <View
              className={twMerge(
                " rounded-full",
                paginationIndex === i
                  ? "bg-[#4290f5] w-4 h-4"
                  : "bg-blue-200 w-[14px] h-[14px] "
              )}
            ></View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
