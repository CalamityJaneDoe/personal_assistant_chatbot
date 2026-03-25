import type { Conversation } from "../types/Conversation.types";

type ConversationProps = {
  conversation: Conversation;
};

function ConversationLink({ conversation }: ConversationProps) {
  return (
    <a
      href="#"
      className={`
        flex items-center gap-3
        w-full px-3 py-2
        rounded-lg
        text-gray-700 text-sm font-medium
        hover:bg-gray-100
        transition-colors
        ${conversation.isActive ? "bg-gray-200 border-l-4 border-blue-500 pl-[calc(0.75rem-4px)]" : ""}
      `}
    >
      <img
        src={conversation.agent.avatar}
        alt={`Portrait of ${conversation.agent.name}`}
        className="w-10 h-10 rounded-full object-cover ring-1 ring-gray-300"
      />
      <span className="truncate">{conversation.title}</span>
    </a>
  );
}

export default ConversationLink;
