import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [errors, setErrors] = useState({
    title: false,
    content: false,
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    event.preventDefault();

    const isTitleEmpty = !note.title.trim();
    const isContentEmpty = !note.content.trim();

    if (isTitleEmpty || isContentEmpty) {
      setErrors({
        title: isTitleEmpty,
        content: isContentEmpty,
      });

      return;
    }

    props.onAdd(note);

    setNote({
      title: "",
      content: "",
    });

    setErrors({
      title: false,
      content: false,
    });
  };

  return (
    <section className="w-full flex justify-center py-8 px-4">
      
      <form className="relative flex flex-col gap-4 w-full max-w-[500px] items-center">
        
        {/* Title Input */}
        <input
          name="title"
          placeholder={errors.title ? "Title must be filled" : "Title"}
          value={note.title}
          onChange={handleOnChange}
          spellCheck="false"
          className={`text-sm rounded-xl block w-full p-3 border transition-all duration-300
          
          ${
            errors.title
              ? "border-red-500 placeholder-red-400 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 dark:border-zinc-700 focus:ring-blue-500 focus:border-blue-500"
          }

          bg-white dark:bg-zinc-800
          text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400
          shadow-sm`}
        />

        {/* Content Textarea */}
        <textarea
          name="content"
          placeholder={
            errors.content ? "Note must be filled" : "Take a note..."
          }
          rows="4"
          value={note.content}
          onChange={handleOnChange}
          spellCheck="false"
          className={`block text-sm rounded-xl w-full p-3 border resize-none transition-all duration-300
          
          ${
            errors.content
              ? "border-red-500 placeholder-red-400 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 dark:border-zinc-700 focus:ring-blue-500 focus:border-blue-500"
          }

          bg-white dark:bg-zinc-800
          text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400
          shadow-sm`}
        />

        {/* Add Button */}
        <button
          onClick={submitNote}
          className="absolute -bottom-5 -right-2 font-medium text-sm rounded-full p-3 text-center inline-flex items-center w-max cursor-pointer border border-gray-300 dark:border-zinc-700 bg-white hover:bg-gray-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-all duration-300 shadow-md"
        >
          <box-icon
            name="plus"
            class="fill-gray-900 dark:fill-white w-5 h-5"
          ></box-icon>
        </button>

      </form>
    </section>
  );
};

export default CreateArea;