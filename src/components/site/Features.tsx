const cards = [
  { title: "100% Natural", description: "Sem conservantes ou aditivos" },
  { title: "Feitas à Mão", description: "Processo artesanal e cuidadoso" },
  { title: "Alta Qualidade", description: "Selecionamos apenas as melhores frutas" },
  { title: "Versáteis", description: "Drinks, snacks, chás e sobremesas" },
];

export function Features() {
  return (
    <section className="py-20 border-y border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className="group p-7 rounded-2xl bg-card border border-border/60 hover:border-secondary/40 transition-all hover:shadow-soft"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display text-lg mb-5 group-hover:bg-secondary/15 group-hover:text-secondary transition-colors">
              0{i + 1}
            </div>
            <h3 className="font-display text-2xl text-primary-dark">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
