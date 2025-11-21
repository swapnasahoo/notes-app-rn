import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NewNote = () => {
  return (
    <View className="bg-[#252525] flex-1 py-12 px-8">
      <SafeAreaView className="flex-1">
        <View className="flex-row">
          <View className="bg-[#3B3B3B] p-3.5 rounded-2xl mr-auto">
            <Ionicons name="chevron-back" size={24} color="white" />
          </View>
          <View className="bg-[#3B3B3B] p-3.5 rounded-2xl mr-6 sm:mr-8">
            <MaterialIcons name="visibility" size={24} color="white" />
          </View>
          <View className="bg-[#3B3B3B] p-3.5 rounded-2xl">
            <Ionicons name="save-outline" size={24} color="white" />
          </View>
        </View>

        <View className="mt-10">
          <TextInput
            placeholder="Title"
            className="text-5xl text-white caret-blue-500 placeholder:text-[#9A9A9A]"
          ></TextInput>
          <TextInput
            placeholder="Type something..."
            multiline
            numberOfLines={18}
            className="text-2xl text-white caret-blue-500 placeholder:text-[#9A9A9A] 
            mt-1 sm:mt-4 min-h-10"
          ></TextInput>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NewNote;
