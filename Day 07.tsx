import { useState } from "react";

function App() {

  const [count, setCount] = useState<number>(0);


  const [text, setText] = useState<string>("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Counter Section */}
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

      {/* Live Text Preview Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Live Text Preview</h2>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p className="mt-4 text-gray-700">
          Preview: <span className="font-semibold">{text}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
