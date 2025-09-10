import Navbar from "./Navbar";
import { Outlet } from "@tanstack/react-router";

export default function Layout() {
  return (
    <div className="flex h-full w-full flex-col p-3">
      {/* <Navbar /> */}
      <div className="h-full w-full p-0">
        <div className="flex h-full flex-row justify-center gap-8 overflow-clip rounded-xl border-black bg-gray-200/60 dark:border-white dark:bg-gray-900">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
