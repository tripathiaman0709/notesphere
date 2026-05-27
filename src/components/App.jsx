import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [darkMode, setDarkMode] = useState(true);

  // Load Notes
  useEffect(() => {
    const data = window.localStorage.getItem("NOTES");

    if (data !== null) {
      setNotes(JSON.parse(data));
    }
  }, []);

  // Save Notes
  useEffect(() => {
    window.localStorage.setItem("NOTES", JSON.stringify(notes));
  }, [notes]);

  // Add Note
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  // Delete Note
  const deleteNote = (noteId) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((_, index) => index !== noteId);
    });
  };

  // Filter Notes
  const filteredNotes = notes.filter((note) => {
    return (
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-[#0f1117] text-white"
          : "bg-[#f5f7fb] text-black"
      }`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 px-5 py-2 rounded-xl border z-50 transition-all duration-300 hover:scale-105 ${
          darkMode
            ? "bg-zinc-800 text-white border-zinc-700"
            : "bg-white text-black border-gray-300 shadow-md"
        }`}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* Header */}
      <Header
        darkMode={darkMode}
        notesCount={notes.length}
      />

      {/* Create Area */}
      <CreateArea
        onAdd={addNote}
        darkMode={darkMode}
      />

      {/* Search Bar */}
      <div className="flex justify-center px-4 mb-8">
        <div className="relative w-full max-w-xl">

          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full p-3 pl-12 rounded-2xl border outline-none transition-all duration-300 ${
              darkMode
                ? "bg-zinc-800 border-zinc-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-black placeholder-gray-500 shadow-sm"
            }`}
          />

          <box-icon
            name="search"
            class="absolute left-4 top-1/2 -translate-y-1/2 fill-gray-400 w-5 h-5"
          ></box-icon>

        </div>
      </div>

      {/* Notes Section */}
      <div className="flex gap-4 flex-wrap justify-center px-4 pb-10">

        {/* Empty State */}
        {filteredNotes.length === 0 && (
          <div
            className={`mt-20 flex flex-col items-center gap-4 transition-all duration-300 ${
              darkMode
                ? "text-gray-400"
                : "text-gray-500"
            }`}
          >
            <box-icon
              name="notepad"
              class="fill-gray-400 w-20 h-20"
            ></box-icon>

            <h2 className="text-2xl font-semibold">
              {searchTerm
                ? "No matching notes"
                : "No notes yet"}
            </h2>

            <p className="text-sm">
              {searchTerm
                ? "Try searching something else"
                : "Create your first note to get started"}
            </p>
          </div>
        )}

        {/* Notes */}
        {filteredNotes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
            darkMode={darkMode}
          />
        ))}
      </div>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;