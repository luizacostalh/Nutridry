import cocktail from "@/assets/cocktail.jpg";

const items = ["Drinks", "Snacks Saudáveis", "Pré-Treino", "Pós-Treino", "Chás", "Doces", "Presentes"];

export function Uses() {
  return (
    <section id="usos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <span className="text-xs tracking-[0.25em] uppercase text-secondary font-medium">Mil Usos</span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-primary-dark leading-[1.05]">
            Muito além dos drinks
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Cada fruta Nutridry abre um universo de possibilidades. Da coquetelaria
            autoral aos rituais do dia a dia.
          </p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {items.map((it) => (
              <li key={it} className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-primary-dark hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default">
                {it}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="overflow-hidden rounded-[28px] shadow-card">
            <img src={cocktail} alt="Drink com fruta desidratada" width={1200} height={1400} loading="lazy" className="w-full h-[600px] object-cover hover-scale" />
          </div>
        </div>
      </div>
    </section>
  );
}
