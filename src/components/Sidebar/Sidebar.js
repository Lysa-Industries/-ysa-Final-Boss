import React from 'react';
import { grammarData } from '../../data';
import SidebarItem from './SidebarItem';

export default function Sidebar({ onSelectTopic }) {
  return (
    <aside className="sidebar">
      <h2>Łysa Final Boss </h2>
      {Object.entries(grammarData).map(([key, value]) => (
        <SidebarItem key={key} title={key} content={value} onSelect={onSelectTopic} />
      ))}
    </aside>
  );
}