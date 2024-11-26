import React, { useState } from "react";
import Input from "./components/Input";
import Task from "./components/Task";
import Logo from "./components/Logo";

const App = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="w-2/3 h-full flex flex-col justify-start items-center mx-auto mt-24">
      <Logo />
      <Input addTask={setTasks} />
      <div className="flex-grow overflow-hidden w-5/6">
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} taskInfo={task} updateTasks={setTasks}/>
        ))}
      </div>
    </div>
  );
};

export default App;
