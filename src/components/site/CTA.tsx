export function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-primary text-primary-foreground p-12 md:p-20 shadow-card">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">Pedidos</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Pronto para experimentar a Nutridry?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Faça seu pedido pelo WhatsApp e receba produtos artesanais de alta qualidade.
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-secondary text-secondary-foreground px-8 py-4 text-sm font-medium hover:bg-gold transition-colors shadow-soft"
            >
              Falar no WhatsApp
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
