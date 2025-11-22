import { NoteContext } from "@/context/NotesContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NewNote = () => {
  const [opened, setOpened] = useState(false);

  const { id } = useLocalSearchParams();
  const { note, deleteNote } = useContext(NoteContext);

  const noteFound = note.find((n) => n.id === Number(id));

  const [newTitle, setNewTitle] = useState(noteFound?.title ?? "");
  const [newContent, setNewContent] = useState(noteFound?.content ?? "");

  // HANDLING TypeScipt undefined WARNING
  if (!noteFound) {
    return null;
  }

  return (
    <View className="bg-[#252525] flex-1 py-12 px-8">
      <SafeAreaView className="flex-1">
        <View className="flex-row">
          <Pressable
            className="bg-[#3B3B3B] p-3.5 rounded-2xl mr-auto"
            onPress={() => router.push("/")}
          >
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>

          <Pressable
            className="bg-[#3B3B3B] p-3.5 rounded-2xl mr-6 sm:mr-8"
            onPress={() => setOpened(!opened)}
          >
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </Pressable>

          <Pressable className="bg-[#3B3B3B] p-3.5 rounded-2xl">
            <Ionicons name="save-outline" size={24} color="white" />
          </Pressable>
        </View>

        <View className="mt-10">
          {/* TITLE */}
          <TextInput
            placeholder="Title"
            className="text-5xl text-white caret-blue-500 placeholder:text-[#9A9A9A]"
            value={newTitle}
          ></TextInput>

          {/* CONTENT */}
          <TextInput
            placeholder="Type something..."
            multiline
            numberOfLines={18}
            className="text-2xl text-white caret-blue-500 placeholder:text-[#9A9A9A] 
            mt-1 sm:mt-4 min-h-10"
            value={newContent}
          ></TextInput>
        </View>
      </SafeAreaView>

      <View
        className={`absolute top-[20%] sm:top-[16%] right-8  w-44 py-2 rounded-xl bg-[#3B3B3B] shadow-lg elevation-lg transition-all ease-in-out
  ${opened ? "opacity-100" : "opacity-0"}`}
      >
        <Text className="text-white px-4 py-2">Delete</Text>
      </View>
    </View>
  );
};

export default NewNote;
