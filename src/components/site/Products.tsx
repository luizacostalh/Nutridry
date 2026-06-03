import orange from "@/assets/orange.jpg";
import lemon from "@/assets/lemon.jpg";
import apple from "@/assets/apple.jpg";
import kiwi from "@/assets/kiwi.jpg";

const products = [
  { name: "Laranja", image: orange, description: "Doce e cítrica. Perfeita para drinks e lanches." },
  { name: "Limão", image: lemon, description: "Refrescante e aromático." },
  { name: "Maçã", image: apple, description: "Naturalmente doce e nutritiva." },
  { name: "Kiwi", image: kiwi, description: "Exótico, vibrante e cheio de personalidade." },
];

export function Products() {
  return (
    <section id="produtos" className="py-24 lg:py-32 bg-primary-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">Nossa Coleção</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Frutas que elevam seu dia.
            </h2>
          </div>
          <a href="#cta" className="rounded-full border border-primary-foreground/30 px-6 py-3 text-sm hover:bg-primary-foreground hover:text-primary-dark transition-colors">
            Ver todos os produtos
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group bg-cream text-foreground rounded-3xl overflow-hidden shadow-card">
              <div className="aspect-[4/5] overflow-hidden bg-cream">
                <img src={p.image} alt={p.name} width={900} height={1100} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl text-primary-dark">{p.name}</h3>
                  <span className="text-gold font-display text-xl">✦</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
