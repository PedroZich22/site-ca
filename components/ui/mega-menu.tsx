"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function MegaMenu({ trigger, children, className }: MegaMenuProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-zinc-600 hover:text-purple-700 transition-colors"
      >
        {trigger}
        <ChevronDown
          className={cn("w-4 h-4 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          className={cn(
            "absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-zinc-200 z-50",
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

interface MegaMenuItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function MegaMenuItem({ href, children, className }: MegaMenuItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-purple-700",
        className,
      )}
    >
      {children}
    </Link>
  );
}

interface MegaMenuGroupProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function MegaMenuGroup({
  title,
  children,
  className,
}: MegaMenuGroupProps) {
  return (
    <div className={cn("py-2", className)}>
      <div className="px-4 py-1 text-xs font-medium text-zinc-500 uppercase tracking-wider">
        {title}
      </div>
      {children}
    </div>
  );
}
