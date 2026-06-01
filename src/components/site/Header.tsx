const menu = ["Home", "Sobre", "Produtos", "Como Usar", "Pedidos", "Contato"];
const ids = ["home", "sobre", "produtos", "usos", "cta", "contato"];

export function TopBar() {
  return (
    <div className="bg-primary-dark text-primary-foreground/90 text-xs tracking-widest uppercase">
      <div className="mx-auto max-w-7xl px-6 py-2.5 flex flex-wrap justify-center gap-x-10 gap-y-1">
        <span>100% Natural</span>
        <span className="text-gold">•</span>
        <span>Sem Conservantes</span>
        <span className="text-gold">•</span>
        <span>Produzido com Cuidado</span>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl font-semibold text-primary-dark tracking-tight">
          Nutri<span className="text-secondary">dry</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9 text-sm text-foreground/80">
          {menu.map((m, i) => (
            <a key={m} href={`#${ids[i]}`} className="hover:text-secondary transition-colors">
              {m}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary-dark transition-colors shadow-soft"
        >
          Faça seu Pedido
        </a>
      </div>
    </header>
  );
}
