"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

type Category = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
};

type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
};

type Step = {
  number: string;
  title: string;
  description: string;
};

const categories: Category[] = [
  {
    title: "Damask Woven Labels",
    eyebrow: "Fine thread detail",
    description: "Soft-touch woven labels with sharp artwork, clean folds, and premium color depth.",
    image: "/images/damask-woven-label.png",
  },
  {
    title: "Printed Cotton Labels",
    eyebrow: "Natural finish",
    description: "Breathable cotton and satin bases for care labels, brand stories, and wash details.",
    image: "/images/printed-cotton-labels.png",
  },
  {
    title: "Heat Transfer Labels",
    eyebrow: "Tag-free comfort",
    description: "Low-profile transfers for activewear, intimates, kidswear, and technical garments.",
    image: "/images/heat-transfer-labels.png",
  },
  {
    title: "Patches & Badges",
    eyebrow: "Dimensional branding",
    description: "Woven, embroidered, silicone, and leather-look badges for signature collections.",
    image: "/images/patches-and-badges.png",
  },
];

const products: Product[] = [
  {
    name: "Letter Size Woven Labels",
    description: "Pre-folded size run from XXS to 6XL in bright white.",
    price: "from ₹7.50",
    badge: "Stock",
    image: "/images/stock-size-labels.png",
  },
  {
    name: "Custom Cotton Printed Label",
    description: "Natural cotton base with soft black print and clean edges.",
    price: "Free sample",
    badge: "Sample",
    image: "/images/stock-cotton-printed-labels.png",
  },
  {
    name: "Black Damask Brand Label",
    description: "High-density black weave for luxury apparel collections.",
    price: "from ₹25.00",
    image: "/images/stock-black-damask-labels.png",
  },
  {
    name: "Care & Origin Label Set",
    description: "Care, content, and origin labels finished for production.",
    price: "from ₹15.00",
    image: "/images/stock-care-origin-labels.png",
  },
];

const steps: Step[] = [
  {
    number: "01",
    title: "Get Quote",
    description: "Share label type, size, quantity, artwork, and finish requirements for a clear production estimate.",
  },
  {
    number: "02",
    title: "Artwork Review",
    description: "We check your file, refine the technical details, and prepare the label layout for sampling.",
  },
  {
    number: "03",
    title: "Sample Approval",
    description: "Approve the digital or physical sample so color, texture, fold, and finishing are locked before bulk work.",
  },
  {
    number: "04",
    title: "Bulk Production",
    description: "Your labels move into production, quality checking, packing, and dispatch for your brand or factory.",
  },
];

const clients = ["Studio wear", "Boutiques", "Uniforms", "Kidswear", "Activewear", "Export houses"];

const introBackgroundRows = [
  [categories[0], categories[1], categories[2], categories[3]],
  [categories[3], categories[2], categories[1], categories[0]],
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const handleSubmitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuoteSubmitted(true);
    window.setTimeout(() => setQuoteSubmitted(false), 5000);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#24272b] selection:bg-[#8f2638] selection:text-[#fbf7ef]">
      <nav className="sticky top-0 z-50 border-b border-[#24272b]/10 bg-[#f7f3ec]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Sangeetha Labels home">
            <Image
              src="/icons/apple-touch-icon.png"
              alt=""
              width={40}
              height={40}
              className="rounded-full border border-[#b9975b]/60 bg-white object-contain p-1"
            />
            <span className="leading-none">
              <span className="block font-serif text-xl font-semibold tracking-[0.08em] text-[#343a40]">
                Sangeetha
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.36em] text-[#8f2638]">
                Labels
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-[12px] font-bold uppercase tracking-[0.18em] text-[#524b45] md:flex">
            <a href="#categories" className="transition hover:text-[#8f2638]">
              Labels
            </a>
            <a href="#process" className="transition hover:text-[#8f2638]">
              Process
            </a>
            <a href="#products" className="transition hover:text-[#8f2638]">
              Stock
            </a>
            <a href="#quote" className="transition hover:text-[#8f2638]">
              Quote
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#24272b]/15 text-[#343a40] md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-px bg-current transition ${mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-px bg-current transition ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-px bg-current transition ${mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#24272b]/10 bg-[#f7f3ec] px-4 py-5 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-2 text-sm font-semibold text-[#3a3430]">
              <a onClick={closeMenu} href="#categories" className="py-3">
                Labels
              </a>
              <a onClick={closeMenu} href="#process" className="py-3">
                Process
              </a>
              <a onClick={closeMenu} href="#products" className="py-3">
                Stock
              </a>
              <a onClick={closeMenu} href="#quote" className="py-3">
                Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      <header className="relative min-h-[820px] overflow-hidden">
        <div className="absolute inset-0 bg-[#343a40]" aria-hidden="true">
          {introBackgroundRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`hero-background-track absolute left-0 flex h-1/2 w-max ${
                rowIndex === 0 ? "top-0" : "bottom-0 hero-background-track-reverse"
              }`}
            >
              {[...row, ...row, ...row].map((item, index) => (
                <div key={`${rowIndex}-${item.title}-${index}`} className="relative h-full w-[76vw] shrink-0 sm:w-[48vw] lg:w-[34vw]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 34vw, (min-width: 640px) 48vw, 76vw"
                    className="object-cover"
                    priority={rowIndex === 0 && index < 2}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,39,43,0.9),rgba(52,58,64,0.68),rgba(143,38,56,0.22))]" />
        <div className="absolute inset-0 bg-[#343a40]/10 backdrop-blur-[1px]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#f7f3ec] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[820px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl pt-8 text-[#fbf7ef]">
            <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-[0.02em] sm:text-7xl lg:text-8xl">
              Sangeetha Labels
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#fbf7ef]/82 sm:text-lg">
              Premium, durable custom clothing labels crafted to elevate your brand.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="rounded-full bg-[#c9a45c] px-7 py-4 text-center text-[12px] font-black uppercase tracking-[0.2em] text-[#24272b] shadow-xl shadow-[#343a40]/18 transition hover:bg-[#dfc17a]"
              >
                Request a quote
              </a>
              <a
                href="#categories"
                className="rounded-full border border-white/35 bg-white/10 px-7 py-4 text-center text-[12px] font-black uppercase tracking-[0.2em] text-white backdrop-blur transition hover:bg-white/18"
              >
                Explore labels
              </a>
            </div>
          </div>
        </div>

      </header>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#8f2638]">What we make</p>
            <h2 className="mt-3 whitespace-nowrap font-serif text-[1.7rem] leading-tight text-[#24272b] sm:text-5xl">Premium Clothing Labels</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article key={category.title} className="group overflow-hidden border border-[#24272b]/10 bg-[#fbf7ef] shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#343a40]/12">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#d9d5ca]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#8f2638]">{category.eyebrow}</p>
                <h3 className="mt-3 font-serif text-2xl text-[#24272b]">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#665f58]">{category.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e5e2d8] py-20 text-[#24272b]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.48fr_1.52fr] lg:px-8">
          <div className="relative mx-auto min-h-[220px] w-full max-w-xs overflow-hidden border border-[#343a40]/12 bg-[#d5d8d0] shadow-2xl shadow-[#343a40]/12 sm:min-h-[260px] lg:min-h-[280px]">
            <Image
              src="/images/quality-label-sample-board.png"
              alt="Sample board of woven, printed, care, and patch clothing labels"
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 320px, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#8f2638]">Quality and expertise</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Elevating Brands with Custom Labels
            </h2>
            <div className="mx-auto mt-6 grid max-w-3xl gap-5 text-base leading-8 text-[#4c5358] lg:mx-0">
              <p>
                For more than 20 years, Sangeetha Labels has been a trusted partner for custom woven labels,
                printed labels, patches, and badges. We create refined branding details for apparel, packaging,
                and finished garments using quality materials, responsible production practices, and careful
                attention to every brief.
              </p>
              <p>
                Every approved sample becomes the standard for production. From thread density and color
                matching to cutting, folding, packing, and final quality checks, we fine-tune each detail so your
                labels feel consistent across the full run and help your products stand apart.
              </p>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden border border-[#24272b]/10 bg-[#24272b]/10 shadow-2xl shadow-[#343a40]/10 md:grid-cols-4">
              {[
                ["20+", "years of trim expertise"],
                ["100", "piece starting minimum"],
                ["48h", "typical proof response"],
                ["1:1", "sample before production"],
              ].map(([value, label]) => (
                <div key={label} className="bg-[#fbf7ef]/88 px-5 py-6 text-center">
                  <div className="font-serif text-3xl text-[#343a40]">{value}</div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6f665d]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f8f4ec] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#8f2638]">How it works</p>
            <h2 className="mt-3 font-serif text-4xl text-[#24272b] sm:text-5xl">Custom Orders Process</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group relative overflow-hidden border border-[#24272b]/10 bg-[#fbf7ef] p-8 text-center shadow-[0_24px_70px_rgba(52,58,64,0.1)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#b9975b]/45 bg-[#f4ead8] font-serif text-2xl text-[#8f2638]">
                  {step.number}
                </div>
                <span className="mx-auto mt-7 block h-px w-12 bg-[#c9a45c]" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-black uppercase tracking-[0.08em] text-[#343a40]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#665f58]">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#quote"
              className="inline-flex rounded-full bg-[#8f2638] px-7 py-4 text-[12px] font-black uppercase tracking-[0.2em] text-[#fbf7ef] shadow-xl shadow-[#8f2638]/18 transition hover:bg-[#a7384c]"
            >
              Begin a custom order
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#ebe6dc] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#8f2638]">Ready to ship</p>
              <h2 className="mt-3 font-serif text-4xl text-[#24272b] sm:text-5xl">Popular stock labels.</h2>
            </div>
            <button className="self-start rounded-full border border-[#8f2638]/30 px-5 py-3 text-[12px] font-black uppercase tracking-[0.18em] text-[#343a40] transition hover:bg-[#8f2638] hover:text-[#fbf7ef] sm:self-auto">
              View all stock
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="group bg-[#fbf7ef] shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#343a40]/12">
                <div className="relative aspect-[4/4.4] overflow-hidden bg-[#d9d5ca]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute left-4 top-4 bg-[#8f2638] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#fbf7ef]">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl leading-tight text-[#24272b]">{product.name}</h3>
                  <p className="mt-3 min-h-14 text-sm leading-7 text-[#665f58]">{product.description}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#24272b]/10 pt-5">
                    <span className="text-sm font-black text-[#343a40]">{product.price}</span>
                    <button className="text-[11px] font-black uppercase tracking-[0.18em] text-[#8f2638] transition hover:text-[#343a40]">
                      Enquire
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="border-y border-[#24272b]/10 py-8">
          <p className="mb-6 text-center text-[12px] font-bold uppercase tracking-[0.28em] text-[#8f2638]">
            Made for apparel teams of every size
          </p>
          <div className="grid grid-cols-2 gap-4 text-center font-serif text-xl text-[#524b45] sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <div key={client}>{client}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden bg-[#d5d8d0] text-[#24272b] shadow-2xl shadow-[#343a40]/12 lg:grid-cols-[0.58fr_1fr]">
          <div className="relative min-h-[320px] lg:min-h-[360px]">
            <Image
              src="/images/quote-clothing-label-collage.png"
              alt="Collection of custom woven, cotton, care, and size clothing labels"
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>

          <form onSubmit={handleSubmitQuote} className="grid gap-5 bg-[#fbf7ef] p-6 text-[#24272b] sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#4c4641]">
                Name
                <input
                  required
                  type="text"
                  className="border border-[#24272b]/15 bg-white px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none transition focus:border-[#8f2638] focus:ring-4 focus:ring-[#c9a45c]/18"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#4c4641]">
                Email
                <input
                  required
                  type="email"
                  className="border border-[#24272b]/15 bg-white px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none transition focus:border-[#8f2638] focus:ring-4 focus:ring-[#c9a45c]/18"
                  placeholder="you@brand.com"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#4c4641]">
                Label Type
                <select className="border border-[#24272b]/15 bg-white px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none transition focus:border-[#8f2638] focus:ring-4 focus:ring-[#c9a45c]/18">
                  <option>Damask woven labels</option>
                  <option>Printed cotton labels</option>
                  <option>Heat transfer labels</option>
                  <option>Hang tags</option>
                  <option>Patches and badges</option>
                </select>
              </label>
              <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#4c4641]">
                Quantity
                <input
                  type="number"
                  min="100"
                  className="border border-[#24272b]/15 bg-white px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none transition focus:border-[#8f2638] focus:ring-4 focus:ring-[#c9a45c]/18"
                  placeholder="Minimum 100 pcs"
                />
              </label>
            </div>

            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#4c4641]">
              Project Details
              <textarea
                rows={5}
                className="resize-none border border-[#24272b]/15 bg-white px-4 py-3 text-sm font-medium normal-case tracking-normal outline-none transition focus:border-[#8f2638] focus:ring-4 focus:ring-[#c9a45c]/18"
                placeholder="Artwork, dimensions, folds, material, backing, delivery date..."
              />
            </label>

            <button
              type="submit"
              className="mt-2 bg-[#8f2638] px-6 py-4 text-[12px] font-black uppercase tracking-[0.22em] text-[#fbf7ef] transition hover:bg-[#a7384c]"
            >
              Send quote request
            </button>

            {quoteSubmitted && (
              <div className="border border-[#2f7a55]/25 bg-[#e7f3e8] px-4 py-3 text-center text-sm font-semibold text-[#21593d]">
                Quote request received. We will follow up with the next production steps.
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-[#343a40] px-4 py-12 text-[#fbf7ef]/72 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="font-serif text-3xl font-medium tracking-[0.04em] text-[#f4f0e8]">Sangeetha Labels</div>
            <p className="mt-4 max-w-md text-sm leading-7">
              Premium, durable custom clothing labels crafted to elevate your brand.
            </p>
          </div>
          <div>
            <h3 className="text-[12px] font-black uppercase tracking-[0.22em] text-[#c9a45c]">Labels</h3>
            <div className="mt-5 grid gap-3 text-sm">
              <a href="#categories" className="transition hover:text-[#c9a45c]">Woven labels</a>
              <a href="#categories" className="transition hover:text-[#c9a45c]">Printed labels</a>
              <a href="#categories" className="transition hover:text-[#c9a45c]">Heat transfers</a>
              <a href="#categories" className="transition hover:text-[#c9a45c]">Patches</a>
            </div>
          </div>
          <div>
            <h3 className="text-[12px] font-black uppercase tracking-[0.22em] text-[#c9a45c]">Contact</h3>
            <div className="mt-5 grid gap-3 text-sm">
              <a href="#quote" className="transition hover:text-[#c9a45c]">Request a quote</a>
              <a href="mailto:hello@sangeethalabel.com" className="transition hover:text-[#c9a45c]">
                hello@sangeethalabel.com
              </a>
              <a href="#products" className="transition hover:text-[#c9a45c]">Order stock labels</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-col justify-between gap-4 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Sangeetha Labels. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-[#c9a45c]">Privacy</a>
            <a href="#" className="transition hover:text-[#c9a45c]">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
