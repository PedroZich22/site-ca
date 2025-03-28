import { Hero } from "@/components/sections/hero";
import { QuickLinks } from "@/components/sections/quick-links";
import { BlogSection } from "@/components/sections/blog";
import { AcademicShowcase } from "@/components/sections/academic-showcase";

export default function Home() {
  return (
    <main className="bg-zinc-50">
      <Hero />
      <QuickLinks />
      <AcademicShowcase />
      <BlogSection />
    </main>
  );
}
