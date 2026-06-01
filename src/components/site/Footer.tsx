export function Footer() {
  const cols = [
    { title: "Empresa", links: ["Sobre", "Nossa História", "Sustentabilidade"] },
    { title: "Produtos", links: ["Laranja", "Limão", "Maçã", "Kiwi"] },
    { title: "Contato", links: ["WhatsApp", "Instagram", "E-mail"] },
  ];
  return (
    <footer id="contato" className="bg-primary-dark text-primary-foreground/80">
      <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="font-display text-3xl text-primary-foreground">
            Nutri<span className="text-secondary">dry</span>
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Frutas desidratadas artesanais para drinks, snacks e momentos especiais.
            Feitas com cuidado, do pomar à sua casa.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8 text-sm">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-lg text-primary-foreground mb-4">{c.title}</h4>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-gold transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap justify-between gap-4 text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} Nutridry. Todos os direitos reservados.</span>
          <span>Produzido artesanalmente no Brasil.</span>
        </div>
      </div>
    </footer>
  );
}
