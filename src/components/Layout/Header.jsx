import React, { useState } from "react";
import { Menu, User, LogOut } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { NavLink, useLocation } from "react-router";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useAuth } from "../../contexts/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "POS", href: "/pos" },
  { name: "Products", href: "/products" },
];

export default function Header({ onToggleSidebar }) {
  const { logout, user } = useAuth()
  const location = useLocation();
  const [profileModal, setProfileModal] = useState(false);

  return (
    <header className="h-12 border-b px-6 flex items-center justify-between">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="h-8 w-8 p-0">
              <Menu size={18} />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="w-52">
            <SheetHeader>
              <SheetTitle>POSIM Demo</SheetTitle>
            </SheetHeader>
            <ul className="space-y-2 p-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;

                return (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      className={`flex items-center p-3 rounded-md text-sm font-medium transition-colors group relative
                                  ${
                                    isActive
                                      ? "bg-primary text-primary-foreground"
                                      : "hover:bg-muted"
                                  }`}
                    >
                      <p>{item.name}</p>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="h-8 w-8 p-0 hidden md:block"
          onClick={onToggleSidebar}
        >
          <Menu size={18} />
        </button>

        <div className="text-xs md:text-sm text-muted-foreground">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full border flex items-center justify-center bg-[#171717] relative cursor-pointer"
            onClick={() => setProfileModal(!profileModal)}
          >
            <User size={18} className="text-white" />

            {profileModal && (
              <div className="border absolute top-10 right-0 p-2 flex items-center justify-center flex-col space-y-2 z-50 dark:bg-white/10 bg-black/10 backdrop-blur-md rounded">
                <button className="px-4 py-2 border rounded flex gap-1 text-white bg-[#032f30]">
                  <User size={20} /> <span>Profile</span>
                </button>

                <button className="cursor-pointer" onClick={logout}>
                  <div className="border px-4 py-2 rounded bg-red-500 flex items-center justify-center gap-1">
                    <LogOut size={16} className="text-white" />{" "}
                    <span className="text-white">Logout</span>
                  </div>
                </button>
              </div>
            )}
          </div>
          <span className="text-sm font-medium hidden md:block">{user.name}</span>

          <div className="px-4 py-1 text-xs text-white font-semibold border rounded-full bg-[#171717]">
            {user.role}
          </div>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
