import { useState } from "react";
import ItemAction from "../components/ItemAction"; // bouton réutilisable
import { SquarePen } from "lucide-react";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => setIsLogin((prev) => !prev);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in" : "Signing up", { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* Logo */}
      <div className="mb-8 flex flex-col items-center gap-2">
        <img
          className="h-20 w-50 bg-gray-300 flex items-center justify-center rounded-md"
          alt={"logo image"}
          src={"public/assets/brand_material/logo_and_name.png"}
        />
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Welcome to Layer
        </h1>
        <p className="text-gray-500 text-center max-w-xs">
          Connect with your AI agents and start conversations instantly
        </p>
      </div>

      {/* Section décorative avec avatars rectangles */}
      <div className="flex gap-6 mb-8">
        <img
          className="w-40 h-60 bg-gray-300 rounded-md flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          alt={"Rain Portrait"}
          src={"public/assets/agents_material/rain.png"}
        />
        <img
          className="w-40 h-60 bg-gray-300 rounded-md flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          alt={"Alfred Portrait"}
          src={"public/assets/agents_material/alfred.png"}
        />
        <img
          className="w-40 h-60 bg-gray-300 rounded-md flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          alt={"Colette Portrait"}
          src={"public/assets/agents_material/colette.png"}
        />
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm flex flex-col gap-4"
      >
        <h2 className="text-lg font-semibold text-gray-700">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition"
        >
          <SquarePen size={16} />
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <div className="text-sm text-gray-500 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={toggleMode}
            className="text-blue-500 hover:underline font-medium"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthPage;
