import { useState, useRef, useEffect } from "react";

type Agent = {
    name: string;
    avatar: string;
};

const agents: Agent[] = [
    { name: "Alfred", avatar: "public/assets/agents_material/alfred_avatar.png" },
    { name: "Colette", avatar: "public/assets/agents_material/colette_avatar.png" },
    { name: "Rain", avatar: "public/assets/agents_material/rain_avatar.png" },
];

function AgentSelector() {
    const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className=" relative w-64 flex flex-col gap-4" ref={containerRef}>
            <h2 className="text-gray-700 text-lg font-medium text-center">Agent</h2>
            {/* Trigger button */}
            <button
                ref={buttonRef}
                onClick={() => setOpen((prev) => !prev)}
                className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
                {selectedAgent ? (
                    <div className="flex items-center gap-2">
                        <img
                            src={selectedAgent.avatar}
                            alt={`Avatar of ${selectedAgent.name}`}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="text-gray-800">{selectedAgent.name}</span>
                    </div>
                ) : (
                    <span className="text-gray-400">Select an agent...</span>
                )}
                <span className="text-gray-400">▼</span>
            </button>

            {/* Dropdown */}
            {open && (
                <div
                    className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                    {agents.map((agent) => (
                        <button
                            key={agent.name}
                            onClick={() => {
                                setSelectedAgent(agent);
                                setOpen(false);
                            }}
                            className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition w-full text-left"
                        >
                            <img
                                src={agent.avatar}
                                alt={`Avatar of ${agent.name}`}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <span className="text-gray-800">{agent.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AgentSelector;