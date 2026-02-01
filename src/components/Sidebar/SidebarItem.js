import React, { useState } from 'react';

export default function SidebarItem({ title, content, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  // Sprawdzamy bezpiecznie czy content istnieje i czy ma właściwość theory
  const isTopic = content && typeof content === 'object' && 'theory' in content;

  if (isTopic) {
    return (
      <button className="sidebar-link" onClick={() => onSelect(content)}>
        {title}
      </button>
    );
  }

  // Jeśli content jest pusty lub nie jest obiektem, nie renderujemy podmenu
  const hasSubItems = content && Object.keys(content).length > 0;

  return (
    <div className="sidebar-group">
      <div 
        className={`sidebar-title ${isOpen ? 'active' : ''}`} 
        onClick={() => hasSubItems && setIsOpen(!isOpen)}
        style={{ cursor: hasSubItems ? 'pointer' : 'default', opacity: hasSubItems ? 1 : 0.5 }}
      >
        <span className="arrow">{isOpen ? "▼" : "►"}</span> {title}
      </div>
      {isOpen && hasSubItems && (
        <div className="sidebar-nested">
          {Object.entries(content).map(([key, value]) => (
            <SidebarItem key={key} title={key} content={value} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}