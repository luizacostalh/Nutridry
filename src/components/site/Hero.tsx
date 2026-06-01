import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 lg:pt-20 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-secondary font-medium">
            <span className="h-px w-8 bg-secondary" /> Frutas Desidratadas Premium
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary-dark">
            Frutas secas para drinks, snacks e muito mais.
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Produzidas artesanalmente, nossas frutas desidratadas entregam sabor,
            beleza e energia para o seu dia a dia.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#produtos"
              className="rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary-dark transition-colors shadow-soft"
            >
              Conheça nossos produtos
            </a>
            <a
              href="#sobre"
              className="rounded-full border border-primary/30 text-primary-dark px-7 py-3.5 text-sm font-medium hover:bg-primary/5 transition-colors"
            >
              Nossa história
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 relative animate-fade-in">
          <div className="absolute -inset-6 bg-gradient-to-tr from-gold/20 via-secondary/10 to-transparent rounded-[40px] blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] shadow-card">
            <img
              src={hero}
              alt="Frutas desidratadas Nutridry"
              width={1600}
              height={1200}
              className="w-full h-[520px] object-cover hover-scale"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-cream rounded-2xl px-5 py-4 shadow-card border border-border/60">
            <div className="h-10 w-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary font-display text-xl">✦</div>
            <div>
              <p className="font-display text-lg text-primary-dark leading-none">Artesanal</p>
              <p className="text-xs text-muted-foreground mt-1">Produção em pequenos lotes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
