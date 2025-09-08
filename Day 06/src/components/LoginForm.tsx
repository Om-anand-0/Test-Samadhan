import { useState } from "react";

type Props = {
  onLogin: () => void;
};

export default function LoginForm({ onLogin }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token); // ✅ store JWT
      onLogin();
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
      <h2 className="text-xl font-bold text-center font-mono">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        className="border rounded p-2 text-center font-mono"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border rounded p-2 text-center font-mono"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded font-mono">
        Login
      </button>
    </form>
  );
}
