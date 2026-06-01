import { createFileRoute } from "@tanstack/react-router";
import { Header, TopBar } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Uses } from "@/components/site/Uses";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nutridry — Frutas Desidratadas Premium" },
      { name: "description", content: "Frutas desidratadas artesanais para drinks, snacks, chás e sobremesas. 100% natural, sem conservantes." },
      { property: "og:title", content: "Nutridry — Frutas Desidratadas Premium" },
      { property: "og:description", content: "Frutas desidratadas artesanais para drinks, snacks e momentos especiais." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Products />
        <Uses />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
