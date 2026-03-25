import MainMenu from "./MainMenu.tsx";

function MainHeader() {
  return (
    <header className="w-full h-14 bg-gray-50 flex items-center justify-between px-4 border-b border-gray-200 relative">
      {/* LEFT - Logo */}
      <div className="flex items-center gap-2">
        <img
          alt="logo and name of the app"
          src="public/assets/brand_material/logo_and_name.png"
          className="h-10 w-auto" // <-- logo à bonne hauteur, width auto
        />
      </div>

      {/* RIGHT - User + menu */}
      <div className="flex items-center gap-3 relative">
        {/* Avatar */}
        <img
          src="public/assets/agents_material/colette_avatar.png"
          alt="user avatar"
          className="w-10 h-10 rounded-full object-cover border border-gray-200"
        />

        {/* Username */}
        <span className="text-sm text-gray-700 hidden sm:block">
          Hello, Username
        </span>

        {/* Menu button */}
        <MainMenu />
      </div>
    </header>
  );
}

export default MainHeader;
