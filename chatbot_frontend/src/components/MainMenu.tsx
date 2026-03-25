import { Menu, LogOut } from "lucide-react";
import { useState } from "react";
import ItemAction from "./ItemAction.tsx";

const logOut = () => {
  console.log("you are logged out");
};
function MainMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <>
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md hover:bg-gray-200 transition"
      >
        <Menu size={18} />
      </button>

      {/* Dropdown */}
      {menuOpen && (
        <div className="absolute right-0 top-12 w-44 bg-gray-50 border border-gray-200 rounded-lg shadow-lg p-2 z-50">
          <ItemAction
            onClick={logOut}
            icon={<LogOut size={16} />}
            label="Log out"
          />
        </div>
      )}
    </>
  );
}

export default MainMenu;
