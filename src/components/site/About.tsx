import about from "@/assets/about.jpg";

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 relative">
          <div className="overflow-hidden rounded-[28px] shadow-card">
            <img src={about} alt="Produção artesanal Nutridry" width={1200} height={1400} loading="lazy" className="w-full h-[560px] object-cover hover-scale" />
          </div>
          <div className="absolute -top-5 -right-5 bg-secondary text-secondary-foreground rounded-2xl px-5 py-4 shadow-card">
            <p className="font-display text-3xl leading-none">100%</p>
            <p className="text-xs uppercase tracking-widest mt-1">Natural</p>
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <span className="text-xs tracking-[0.25em] uppercase text-secondary font-medium">Sobre a Nutridry</span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-primary-dark leading-[1.05]">
            Transformando frutas em experiências.
          </h2>
          <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A Nutridry nasceu para oferecer frutas desidratadas premium, perfeitas
            para quem busca sabor, praticidade e alimentação mais saudável.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-2xl">
            {[
              { n: "12+", l: "Variedades" },
              { n: "48h", l: "Desidratação lenta" },
              { n: "0", l: "Aditivos" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-gold pl-4">
                <p className="font-display text-4xl text-primary-dark">{s.n}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
          <a href="#sobre" className="mt-10 inline-block rounded-full border border-primary/30 text-primary-dark px-7 py-3.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Conheça nossa história
          </a>
        </div>
      </div>
    </section>
  );
}
