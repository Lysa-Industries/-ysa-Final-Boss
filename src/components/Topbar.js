import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Switch } from "./ui/switch";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SidebarContent from "./Sidebar/SidebarContent";

export default function Topbar({ onSelectTopic }) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleMobileSelect = (topic) => {
    if (onSelectTopic) {
      onSelectTopic(topic);
    }
    setOpen(false);
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

      <div className="flex items-center gap-2 ml-auto">
        <Sun className="h-4 w-4 text-muted-foreground" />
        <Switch
          checked={theme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
        <Moon className="h-4 w-4 text-muted-foreground" />
      </div>
    </header>
  );
}
