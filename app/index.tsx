import { NoteContext } from "@/context/NotesContext";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useContext } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { note, deleteNote } = useContext(NoteContext);

  function rightSwipeDelete() {
    return (
      <View className="bg-red-600 p-4 h-26 w-50 justify-center items-center rounded-md">
        <Text className="text-white font-semibold text-2xl">Delete</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#252525] px-7 py-14">
      <SafeAreaView className="flex-1">
        <View className="flex-row items-center">
          <Text className="text-5xl font-semibold text-white mr-auto">
            Notes
          </Text>
          <Pressable
            className="bg-[#3B3B3B] p-3.5 rounded-2xl ml-5"
            onPress={() => router.push("/SearchNote")}
          >
            <MaterialIcons name="search" size={24} color="white" />
          </Pressable>
          <Pressable className="bg-[#3B3B3B] p-3.5 rounded-2xl ml-5">
            <MaterialIcons name="info-outline" size={24} color="white" />
          </Pressable>
        </View>

        {note.length === 0 ? (
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
              data={note}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Swipeable
                  renderLeftActions={() => rightSwipeDelete()}
                  onSwipeableOpen={() => deleteNote(item.id)}
                >
                  <Pressable
                    className="bg-[#FD99FF] w-full p-4 rounded-md mb-5"
                    onPress={() =>
                      router.push({
                        pathname: "/NoteDetails",
                        params: { id: item.id },
                      })
                    }
                  >
                    <Text className="text-[#111] text-3xl font-semibold">
                      {item.title}
                    </Text>
                    <Text className="text-[#111] text-xl pt-1">
                      {item.content}
                    </Text>
                  </Pressable>
                </Swipeable>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </SafeAreaView>
      <Pressable
        className="bg-blue-500 justify-center items-center size-18 sm:size-20 elevation-2xl shadow-2xl p-2 rounded-full absolute bottom-[10%] right-[10%]"
        onPress={() => router.push("/NewNote")}
      >
        <FontAwesome6 name="plus" size={36} color="white" />
      </Pressable>
    </View>
  );
}
