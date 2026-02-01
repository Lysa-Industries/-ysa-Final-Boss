import React from "react";
import SidebarContent from "./SidebarContent";

export default function Sidebar({ onSelectTopic }) {
  return (
    <aside className="hidden md:block w-[280px] bg-background text-foreground p-5 border-r border-border min-h-screen flex-shrink-0 overflow-y-auto">
      <SidebarContent onSelectTopic={onSelectTopic} />
    </aside>
  );
}
