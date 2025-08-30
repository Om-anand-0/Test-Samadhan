import { useState } from "react";

const LiveText = () => {
  const [text, setText] = useState<string>("");

  return (
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
  );
};

export default LiveText;
