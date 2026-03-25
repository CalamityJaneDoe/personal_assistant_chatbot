import { useState, useRef, useEffect } from "react";
import { ArrowBigUp } from "lucide-react";

type UserInputProps = {
  greeting?: string;
  userName?: string;
};

function UserInput({
  greeting = "How can I help you today, ",
  userName = "User",
}: UserInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    console.log("Send message:", message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto flex flex-col items-center gap-8"
    >
      {/* Greeting */}
      <h2 className="text-gray-700 text-2xl font-medium text-center">
        {greeting}
        {userName}
      </h2>

      {/* Input container */}
      <div className="flex items-center gap-2 w-full bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-md hover:shadow-lg focus-within:ring-2 focus-within:ring-gray-400 transition">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          rows={1}
          className="flex-1 resize-none overflow-hidden outline-none text-gray-800 placeholder-gray-400 text-sm py-2 leading-normal"
        />

        {/* Send button */}
        <button
          type="submit"
          className="p-2 rounded-full bg-gray-950 text-white hover:bg-gray-600 transition"
        >
          <ArrowBigUp size={20} />
        </button>
      </div>
    </form>
  );
}

export default UserInput;
