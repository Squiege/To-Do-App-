"use client";

import { useState } from "react";
import { Trash2, CheckCircle, Edit3 } from "lucide-react"; // Import icons from lucide-react

export default function Home() {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);
  const [task, setTask] = useState<string>("");

  // Add a new task
  const addTask = (event: React.FormEvent) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  // Toggle Task Completion
  const toggleComplete = (index: number) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  // Delete a Task
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Update a Task prompt
  const updateTask = (index: number) => {
    const updatedText = prompt("Update your task:", tasks[index].text);
    if (updatedText) {
      setTasks(tasks.map((t, i) => (i === index ? { ...t, text: updatedText } : t)));
    }
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Left Section: Task Functions */}
      <div className="bg-white rounded-lg shadow-md border p-4 ml-6 mt-6 w-120 h-[150px]">
        <h2 className="text-xl text-green-700 font-bold">Task Functions</h2>
        <div>
          {/* Task Input Form */}
          <form onSubmit={addTask} className="mt-2">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="flex-1 border border-gray-300 p-2 rounded-l focus:outline-none focus:ring-2 focus:ring-green-400 text-green-600"
              placeholder="Add a new task..."
            />
            <button type="submit" className="bg-green-500 text-white p-2 m-2 rounded-md">
              Add Task
            </button>
          </form>
          <hr className="border-black mt-2 mb-2" />
        </div>
      </div>

      {/* Right Section: To-Do List */}
      <div className="bg-white rounded-lg shadow-md border p-4 mr-6 mt-6 col-span-2">
        <h2 className="text-2xl text-green-600 font-bold text-center">To Do List</h2>
        <ul className="mt-4 space-y-2">
          {tasks.length > 0 ? (
            tasks.map((t, index) => (
              <li
                key={index}
                className={`flex items-center justify-between bg-green-100 p-2 rounded-md text-green-800 ${
                  t.completed ? "line-through text-gray-500" : ""
                }`}
              >
                <span>{t.text}</span>
                <div className="flex gap-2">
                  {/* Complete Task Button */}
                  <button
                    onClick={() => toggleComplete(index)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <CheckCircle size={20} />
                  </button>

                  {/* Update Task Button */}
                  <button
                    onClick={() => updateTask(index)}
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    <Edit3 size={20} />
                  </button>

                  {/* Delete Task Button */}
                  <button
                    onClick={() => deleteTask(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-4">No tasks added yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
