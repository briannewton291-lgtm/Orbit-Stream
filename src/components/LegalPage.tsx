const LegalPage = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <>
    <section className="bg-gradient-hero py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-extrabold md:text-4xl text-gradient-hero">{title}</h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline">
          {children}
        </div>
      </div>
    </section>
  </>
);

export default LegalPage;
