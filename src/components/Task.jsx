import { useState } from "react";

const Task = ({ taskInfo, id, updateTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(taskInfo.task);

  return (
    <div className="font-mono flex justify-between w-full p-5 border-2 border-zinc-500 rounded-2xl mt-3">
      <div>
        <input
          onClick={() => {
            updateTasks((prevTasks) =>
              prevTasks.map((task) => {
                if (task.id === id) {
                  return { ...task, isComplete: !task.isComplete };
                } else {
                  return task;
                }
              })
            );
          }}
          className="scale-125 inline"
          type="checkbox"
          checked={taskInfo.isComplete}
        />

        {isEditing ? (
          <input
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(event) => {
              event.key === "Enter" ? setIsEditing(false) : null;
            }}
            autoFocus
            className="focus:outline-none bg-transparent text-white ml-3 text-center border-b-2 border-b-white"
          />
        ) : (
          <p
            className={`text-white inline-block px-3 ${
              taskInfo.isComplete ? "line-through opacity-60" : ""
            }`}
          >
            {newTask}
          </p>
        )}
      </div>

      <div>
        <button
          className="px-2 rounded-lg mr-2 border-2 border-blue-300 hover:bg-blue-400 transition"
          onClick={() => setIsEditing(true)}
        >
          <i class="ri-edit-fill EDIT"></i>
        </button>
        <button
          className="px-2 rounded-lg border-2 border-red-300 hover:bg-red-400 transition"
          onClick={() =>
            updateTasks((prevTasks) =>
              prevTasks.filter((task) => task.id !== id)
            )
          }
        >
          <i class="ri-delete-bin-5-fill DELETE"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;