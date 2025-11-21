import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View className="flex-1 bg-[#252525] px-7 py-14">
      <SafeAreaView className="flex-1">
        <View className="flex-row items-center">
          <Text className="text-5xl font-semibold text-white mr-auto">
            Notes
          </Text>
          <Pressable className="bg-[#3B3B3B] p-3.5 rounded-2xl ml-5">
            <MaterialIcons name="search" size={24} color="white" />
          </Pressable>
          <Pressable className="bg-[#3B3B3B] p-3.5 rounded-2xl ml-5">
            <MaterialIcons name="info-outline" size={24} color="white" />
          </Pressable>
        </View>

        <View className="flex-1 items-center relative">
          <Image
            source={require("../assets/images/home-screen-empty.png")}
            className="w-full"
            resizeMode="contain"
          ></Image>
          <Text className="font-light text-xl text-white absolute top-125 sm:top-175 text-center">
            Create your first note!
          </Text>
        </View>
      </SafeAreaView>
      <View className="bg-blue-500 justify-center items-center size-18 sm:size-20 elevation-2xl shadow-2xl p-2 rounded-full absolute bottom-[10%] right-[10%]">
        <FontAwesome6 name="plus" size={36} color="white" />
      </View>
    </View>
  );
}
