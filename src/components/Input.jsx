import { useState } from "react";
import { v4 as uuid } from "uuid";

const Input = ({ addTask }) => {
  const [input, setInput] = useState("");
  return (
    <div className="text-white p-5 border-2 border-brown-400 border-zinc-500 rounded-3xl w-10/12 mt-5">
      <form onSubmit={(event) => event.preventDefault()}>
        <h1 className="mb-5 font-semibold font-mono text-xl text-zinc-300">
          Hello! Feeling Productive today?
        </h1>
        <div className="flex w-full">
          <input
            type="text"
            className="flex-grow font-mono p-3 h-10 ring-1 ring-gray-400 bg-zinc-800 rounded-2xl mr-3 focus:outline-none"
            placeholder="New Task"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            onClick={() => {
              addTask((prevTasks) => 
                (input.trim().length > 0) ? (
                  [
                    ...prevTasks,
                    { id: uuid(), task: input.trim(), isComplete: false },
                  ]
                ) : (
                  prevTasks
                )
              );
              setInput("");
            }}
            className="h-10 border-2 border-blue-300 rounded-2xl px-3 hover:bg-blue-300 hover:text-black transition"
          >
            <i class="ri-add-large-line"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
