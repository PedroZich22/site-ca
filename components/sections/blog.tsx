export function BlogSection() {
  return (
    <section className="py-16 px-4 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-zinc-900 mb-12 text-center">
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </div>
    </section>
  );
}
