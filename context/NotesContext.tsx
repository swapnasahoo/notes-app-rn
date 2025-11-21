import { createContext, useState } from "react";

interface Note {
  id: number;
  title: string;
  content: string;
}

interface NoteContextType {
  note: Note[];
  addNote: (title: string, content: string) => void;
}

export const NoteContext = createContext<NoteContextType>({
  note: [],
  addNote: () => {},
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

  return <NoteContext value={{ note, addNote }}>{children}</NoteContext>;
}

export default NoteContextProvider;
