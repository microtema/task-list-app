import { useState } from "react";

export default function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "React project setup", done: false },
        { id: 2, text: "Implement task list", done: false },
        { id: 3, text: "Write tests", done: false },
    ]);

    const toggleDone = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        ));
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Task List</h1>
            <ul className="space-y-2">
                {tasks.map(task => (
                    <li
                        key={task.id}
                        className="flex items-center justify-between bg-white shadow rounded-xl p-3"
                    >
                        <span className={task.done ? "line-through text-gray-400" : ""}>{task.text}</span>
                        <button
                            className="text-sm px-3 py-1 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
                            onClick={() => toggleDone(task.id)}
                        >
                            {task.done ? "Undo" : "Done"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
