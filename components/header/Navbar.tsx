"use client"

import React, { useState, useRef, useEffect } from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { ChevronDown, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { MenuItem } from "@/types/interfaces"
import menuItems from "./menuitems"

const MenuItemComponent: React.FC<{ item: MenuItem; depth?: number }> = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const collapsibleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (collapsibleRef.current && !collapsibleRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [collapsibleRef]);

  if (item.submenu) {
    return (
      <div ref={collapsibleRef}>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <button
              className={cn(
                "uppercase flex w-full items-center justify-between px-4 text-3xl font-semibold transition-colors hover:text-primary",
                depth > 0 && "pl-4"
              )}
            >
              {item.title}
              {isOpen ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
          </CollapsibleTrigger>
          {isOpen && (
            <CollapsibleContent className="rounded-xl absolute my-2 p-2 top-auto flex flex-col bg-accent justify-center">
              {item.submenu.map((subItem) => (
                <div key={subItem.title} className="my-2">
                  <MenuItemComponent item={subItem} depth={depth + 1} />
                </div>
              ))}
            </CollapsibleContent>
          )}
        </Collapsible>
      </div>
    );
  }

  return (
    <a
      href={item.href}
      className={cn(
        "uppercase block px-4 font-semibold transition-colors hover:text-primary",
        depth > 0 ? "text-xl pl-4" : "text-3xl"
      )}
    >
      {item.title}
    </a>
  );
};

// export default function HamburgerMenu() {
export const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row">
        {menuItems.map((item) => (
          <MenuItemComponent key={item.title} item={item} />
        ))}
      </nav>
    </>
  )
}