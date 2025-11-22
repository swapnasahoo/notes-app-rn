import NoteContextProvider from "@/context/NotesContext";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <NoteContextProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="index"
            options={{ animation: "slide_from_left" }}
          />
          <Stack.Screen
            name="NewNote"
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="NoteDetails"
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="SearchNote"
            options={{ animation: "slide_from_right" }}
          />
        </Stack>
      </NoteContextProvider>
    </GestureHandlerRootView>
  );
}
