import { createContext, useState } from "react";

interface Note {
  id: number;
  title: string;
  content: string;
}

interface NoteContextType {
  note: Note[];
  addNote: (title: string, content: string) => void;
  deleteNote: (id: number) => void;
}

export const NoteContext = createContext<NoteContextType>({
  note: [],
  addNote: () => {},
  deleteNote: () => {},
});

function NoteContextProvider({ children }: { children: React.ReactNode }) {
  const [note, setNote] = useState<Note[]>([]);

  function addNote(title: string, content: string) {
    setNote((n) => [
      ...n,
      {
        id: n.length,
        title: title,
        content: content,
      },
    ]);
  }

  function deleteNote(id: number) {
    setNote(note.filter((n) => n.id !== id));
  }

  return (
    <NoteContext value={{ note, addNote, deleteNote }}>{children}</NoteContext>
  );
}

export default NoteContextProvider;
