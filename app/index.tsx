import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [notes, setNotes] = useState<
    { id: number; title: string; content: string }[]
  >([
    {
      id: 0,
      title: "Note App",
      content: "This is a simple app.",
    },
  ]);

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

        {notes.length === 0 ? (
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
        ) : (
          <View className="mt-8">
            <FlatList
              data={notes}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View className="bg-[#FD99FF] w-full p-4 rounded-md">
                  <Text className="text-[#111] text-3xl font-semibold">
                    {item.title}
                  </Text>
                  <Text className="text-[#111] text-xl pt-1">
                    {item.content}
                  </Text>
                </View>
              )}
            />
          </View>
        )}
      </SafeAreaView>
      <View className="bg-blue-500 justify-center items-center size-18 sm:size-20 elevation-2xl shadow-2xl p-2 rounded-full absolute bottom-[10%] right-[10%]">
        <FontAwesome6 name="plus" size={36} color="white" />
      </View>
    </View>
  );
}
