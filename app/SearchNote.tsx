import { NoteContext } from "@/context/NotesContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useContext, useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NewNote = () => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const { addNote } = useContext(NoteContext);

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
          ></TextInput>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NewNote;
