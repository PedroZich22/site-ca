"use client";

import { Hero } from "@/components/sections/hero";
import { QuickLinks } from "@/components/sections/quick-links";
import { BlogSection } from "@/components/sections/blog";

export default function Home() {
  return (
    <main className="bg-zinc-50">
      <Hero />
      <QuickLinks />
      <BlogSection />
    </main>
  );
}
