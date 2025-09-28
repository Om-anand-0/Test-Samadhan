import { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";

type Props = {
  onSignup: () => void;
};

export default function SignupForm({ onSignup }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Signup successful! You can login now.");
      onSignup();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleAuth = async () => {
    setError("");
    setSuccess("");
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      setSuccess("Google login/signup successful!");
      onSignup();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
      <h2 className="text-xl font-bold font-mono">Sign Up</h2>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      {/* Email/Password Signup */}
      <input
        type="email"
        placeholder="Email"
        className="border rounded p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border rounded p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded font-mono"
      >
        Sign Up with Email
      </button>

      {/* Divider */}
      <div className="flex items-center my-2">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-gray-500 text-sm">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Google Auth (works as both login + signup) */}
      <button
        type="button"
        onClick={handleGoogleAuth}
        className="bg-red-500 text-white p-2 rounded font-mono"
      >
        Continue with Google
      </button>
    </form>
  );
}
