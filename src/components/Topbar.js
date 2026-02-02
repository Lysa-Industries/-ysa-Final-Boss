import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useAuth } from "../context/AuthContext";
import { Switch } from "./ui/switch";
import { Moon, Sun, Menu, LogOut, User } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SidebarContent from "./Sidebar/SidebarContent";
import { Link, useNavigate } from "react-router-dom";

export default function Topbar({ onSelectTopic }) {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleMobileSelect = (topic) => {
    if (onSelectTopic) {
      onSelectTopic(topic);
    }
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex h-16 w-full items-center justify-between border-b bg-background px-4 md:px-6 flex-shrink-0">
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="-ml-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Przełącz menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0">
            <div className="p-6 h-full overflow-y-auto">
              <SidebarContent onSelectTopic={handleMobileSelect} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden sm:inline-block">
                Witaj, {user.username}
              </span>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Wyloguj
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button size="sm">
                <User className="h-4 w-4 mr-2" />
                Zaloguj się
              </Button>
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2 border-l pl-4">
          <Sun className="h-4 w-4 text-muted-foreground" />
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
          <Moon className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
