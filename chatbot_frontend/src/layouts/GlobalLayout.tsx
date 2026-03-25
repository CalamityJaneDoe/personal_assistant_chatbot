import MainSidebar from "../components/MainSidebar";
import MainHeader from "../components/MainHeader";

function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <MainHeader />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <MainSidebar />

        {/* Main content */}
        <main className="flex-1 overflow-auto p-6 bg-white">{children}</main>
      </div>
    </div>
  );
}

export default GlobalLayout;
