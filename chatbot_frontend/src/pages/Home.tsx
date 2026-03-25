// import AgentSelector from "../components/AgentSelector.tsx";
// import UserInput from "../components/UserInput.tsx";
// import DramaSelector from "../components/DramaLevelSelector.tsx";
//
// function Home() {
//   return (
//     <div >
//
//         <AgentSelector />
//           <DramaSelector />
//           <div className="min-h-screen flex items-center justify-center p-4">
//         <UserInput />
//           </div>
//
//     </div>
//   );
// }
//
// export default Home;
import AgentSelector from "../components/AgentSelector.tsx";
import UserInput from "../components/UserInput.tsx";
import DramaLevelSelector from "../components/DramaLevelSelector.tsx";

function Home() {
    return (
        <div className="min-h-screen relative">
            {/* Top bar */}
            <div className="absolute top-6 left-6 right-6 flex items-center">
                {/* AgentSelector à gauche */}
                <div className="flex-none">
                    <AgentSelector />
                </div>

                {/* Spacer pour pousser DramaLevelSelector à droite */}
                <div className="flex-1" />

                {/* DramaLevelSelector à droite */}
                <div className="flex-none">
                    <DramaLevelSelector />
                </div>
            </div>

            {/* UserInput centré */}
            <div className="flex items-center justify-center min-h-screen p-4">
                <UserInput />
            </div>
        </div>
    );
}

export default Home;
