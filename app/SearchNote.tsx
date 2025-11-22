import { NoteContext } from "@/context/NotesContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NewNote = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { note } = useContext(NoteContext);

  const filteredNotes =
    searchQuery.trim() === ""
      ? note
      : note.filter(
          (n) =>
            n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            n.content.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <View className="bg-[#252525] flex-1 py-12 px-8">
      <SafeAreaView className="flex-1">
        <View className="flex-row items-center gap-8">
          <Pressable
            className="bg-[#3B3B3B] p-3.5 rounded-2xl"
            onPress={() => router.push("/")}
          >
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>

          <TextInput
            placeholder="Search what you need..."
            className="placeholder:text-[#9A9A9A] text-white text-2xl border-2 border-gray-400 
            p-2 w-[80%] rounded-md"
            onChangeText={setSearchQuery}
          ></TextInput>
        </View>

        <View className="mt-8">
          {filteredNotes.map((n) => {
            return (
              <View className="bg-[#FD99FF] w-full p-4 rounded-md mb-5">
                <Text className="text-[#111] text-3xl font-semibold">
                  {n.title}
                </Text>
                <Text className="text-[#111] text-xl pt-1">{n.content}</Text>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NewNote;
