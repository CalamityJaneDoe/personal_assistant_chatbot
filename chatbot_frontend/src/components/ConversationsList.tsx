import type { Conversation } from "../types/Conversation.types";
import ConversationLink from "./ConversationLink.tsx";

type ConversationsListProps = {
  convList: Conversation[];
  legend?: string;
};

const orderListByAgentName = (convList: Conversation[]): Conversation[] =>
  convList.sort((a, b) => {
    const nameA = a.agent.name.toUpperCase();
    const nameB = b.agent.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });

function ConversationsList({ convList, legend }: ConversationsListProps) {
  const conversations: Conversation[] = orderListByAgentName(convList);
  return (
    <div className="flex flex-col gap-1">
      {legend && (
        <span className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {legend}
        </span>
      )}
      {/* Scroll */}
      <div className="flex flex-col gap-1 max-h-[600px] overflow-y-auto">
        {conversations.map((conv) => (
          <ConversationLink key={conv.id} conversation={conv} />
        ))}
      </div>
    </div>
  );
}

export default ConversationsList;
