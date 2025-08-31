import { useState } from "react";

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>("");

    // Add new todo
    const addTodo = () => {
        if (newTodo.trim() === "") return;
        const todo: Todo = {
            id: Date.now(),
            text: newTodo,
            done: false,
        };
        setTodos([...todos, todo]);
        setNewTodo("");
    };

    // Toggle done/undone
    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    // Delete todo
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="bg-white shadow-md rounded-2xl p-6 w-96">
            <h1 className="text-2xl font-bold text-center mb-4">📝 To-Do List</h1>

            {/* Input & Add */}
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={addTodo}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Add
                </button>
            </div>

            {/* List */}
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center p-2 border rounded-lg"
                    >
                        <span
                            onClick={() => toggleTodo(todo.id)}
                            className={`cursor-pointer ${todo.done ? "line-through text-gray-500" : ""
                                }`}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="px-2 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
