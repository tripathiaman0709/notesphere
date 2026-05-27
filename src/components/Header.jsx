import React from "react";

const Header = ({ darkMode, notesCount }) => {
  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        darkMode
          ? "bg-zinc-900/80 border-zinc-800 backdrop-blur-md text-white"
          : "bg-white/80 border-gray-200 backdrop-blur-md text-black shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        
        {/* Logo Section */}
        <a
          href="/"
          className="flex items-center space-x-2"
        >
          <box-icon
            name="notepad"
            class="fill-blue-500 w-8 h-8"
          ></box-icon>

          <span className="text-2xl font-bold tracking-tight">
            Keeper
          </span>
        </a>

        {/* Notes Counter */}
        <div
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
            darkMode
              ? "bg-zinc-800 text-gray-200 border border-zinc-700"
              : "bg-gray-100 text-gray-700 border border-gray-200"
          }`}
        >
          {notesCount} {notesCount === 1 ? "Note" : "Notes"}
        </div>

      </div>
    </nav>
  );
};

export default Header;