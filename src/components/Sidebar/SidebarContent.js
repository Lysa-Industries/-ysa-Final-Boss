import React from "react";
import { grammarData } from "../../data";
import SidebarItem from "./SidebarItem";

export default function SidebarContent({ onSelectTopic }) {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-primary text-2xl font-bold mb-8 tracking-tight">
        Łysa Final Boss
      </h2>
      <div className="flex flex-col gap-1">
        {Object.entries(grammarData).map(([key, value]) => (
          <SidebarItem
            key={key}
            title={key}
            content={value}
            onSelect={onSelectTopic}
          />
        ))}
      </div>
    </div>
  );
}
