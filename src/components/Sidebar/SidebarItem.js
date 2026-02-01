import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { cn } from "../../lib/utils";

export default function SidebarItem({ title, content, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const isTopic = content && typeof content === "object" && "theory" in content;

  if (isTopic) {
    return (
      <Button
        variant="ghost"
        className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-accent h-auto py-2 px-3 font-normal text-sm"
        onClick={() => onSelect(content)}
      >
        {title}
      </Button>
    );
  }

  const hasSubItems = content && Object.keys(content).length > 0;

  if (!hasSubItems) {
    return (
      <div className="py-2 px-3 text-muted-foreground/50 cursor-not-allowed text-sm font-medium">
        {title}
      </div>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start hover:bg-accent hover:text-accent-foreground h-auto py-2 px-2 text-sm font-medium transition-all",
            isOpen ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {isOpen ? (
            <ChevronDown className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
          ) : (
            <ChevronRight className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
          )}
          {title}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4 space-y-1 mt-1 ml-3 border-l border-border data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
        {Object.entries(content).map(([key, value]) => (
          <SidebarItem
            key={key}
            title={key}
            content={value}
            onSelect={onSelect}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
