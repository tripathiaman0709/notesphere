import React from "react";

const Note = (props) => {
  const deleteNote = () => {
    props.onDelete(props.id);
  };

  return (
    <section className="flex flex-col items-end w-full max-w-50 max-h-min max-[446px]:max-w-none p-3 gap-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg transition-all duration-300">
      
      <div className="w-full">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white break-words">
          {props.title}
        </h2>

        <p className="font-normal text-gray-700 dark:text-gray-300 break-words mt-1">
          {props.content}
        </p>
      </div>

      <button
        onClick={deleteNote}
        className="font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center w-max cursor-pointer bg-gray-800 hover:bg-gray-700 dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-all duration-300"
      >
        <box-icon
          name="trash-alt"
          class="fill-white w-5 h-5"
        ></box-icon>
      </button>

    </section>
  );
};

export default Note;