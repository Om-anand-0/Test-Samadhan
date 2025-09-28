import { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";

type Props = {
  onLogin: () => void;
};

export default function LoginForm({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      onLogin();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
      <h2 className="text-xl font-bold text-center font-mono">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      
      {/* Email/Password login */}
      <input
        type="email"
        placeholder="Email"
        className="border rounded p-2 text-center font-mono"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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

      {/* Divider */}
      <div className="flex items-center my-2">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-gray-500 text-sm">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Google login */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="bg-red-500 text-white p-2 rounded font-mono"
      >
        Login with Google
      </button>
    </form>
  );
}
