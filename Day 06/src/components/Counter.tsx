import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-80 text-center mb-6">
      <h2 className="text-xl font-bold mb-4">Counter</h2>
      <p className="text-3xl font-semibold text-blue-600 mb-4">{count}</p>
      <div className="flex justify-center gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
