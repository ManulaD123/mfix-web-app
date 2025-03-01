import SidePanel from "./components/side-panel";
import UserNav from "./components/user-nav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* side panel */}
      <aside className=" fixed top-0 bottom-0  left-0 w-64 overflow-y-auto border-r bg-white shadow-lg">
        <SidePanel />
      </aside>

      <div className=" bg-gray-500 flex flex-1 flex-col overflow-hidden ">
        {/* dashboard header */}
        <header className=" fixed top-0 right-0 left-64 bg-white flex h-16 justify-between items-center gap-4 border-b px-6 shadow-sm ">
          <h1 className="text-2xl font-bold text-blue-800">Mflix Dashboard</h1>
          <UserNav />
        </header>

        {/* Dashboard pages */}
        <main className="absolute top-16 left-64 right-0 bottom-0 flex-1 overflow-y-auto bg-gray-100 p-6 bg-cover bg-center">
          {children}
        </main>
      </div>
    </div>
  );
}
