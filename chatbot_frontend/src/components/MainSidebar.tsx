import { PanelRightClose, PanelRightOpen, SquarePen } from "lucide-react";
import ItemAction from "./ItemAction.tsx";
import ConversationsList from "./ConversationsList.tsx";
import { favConvs, regularConvs } from "../DummyData.ts";
import { useState } from "react";

function MainSidebar() {
  const [panelOpen, setPanelOpen] = useState(true);

  const togglePanel = () => setPanelOpen((prev) => !prev);
  return (
    <>
      <aside
        className={`
          flex flex-col
          border-r border-gray-200
          bg-gray-50
          transition-all duration-300
          ${panelOpen ? "w-72" : "w-16"}
        `}
      >
        {/* Top section */}
        <div className="flex items-center justify-between p-3">
          <button
            onClick={togglePanel}
            className="p-2 rounded-md hover:bg-gray-200 transition"
          >
            {panelOpen ? (
              <PanelRightOpen size={18} />
            ) : (
              <PanelRightClose size={18} />
            )}
          </button>
        </div>

        {/* New chat */}
        <div className="px-2">
          {panelOpen ? (
            <ItemAction label="New Chat" icon={<SquarePen />} as="a" href="/" />
          ) : (
            <a
              href="/"
              className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200"
            >
              <SquarePen />
            </a>
          )}
        </div>

        <div className="my-2 border-t border-gray-200" />

        {/* Conversations */}
        {panelOpen && (
          <div className="flex-1 overflow-y-auto px-1">
            <ConversationsList legend="Favorites" convList={favConvs} />
            <div className="my-2 border-t border-gray-200" />
            <ConversationsList convList={regularConvs} />
          </div>
        )}
      </aside>
    </>
  );
}

export default MainSidebar;
