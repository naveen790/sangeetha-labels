"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

type Category = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
};

type Step = {
  title: string;
  description: string;
};

type Industry = {
  name: string;
  image: string;
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

const steps: Step[] = [
  {
    title: "Get Quote",
    description: "Share label type, size, quantity, artwork, and finish requirements for a clear production estimate.",
  },
  {
    title: "Artwork Review",
    description: "We check your file, refine the technical details, and prepare the label layout for sampling.",
  },
  {
    title: "Sample Approval",
    description: "Approve the digital or physical sample so color, texture, fold, and finishing are locked before bulk work.",
  },
  {
    title: "Bulk Production",
    description: "Your labels move into production, quality checking, packing, and dispatch for your brand or factory.",
  },
];

const industries: Industry[] = [
  { name: "Apparel and Fashion", image: "/images/generic-label-assortment-hero.png" },
  { name: "Footwear and Shoes", image: "/images/patches-and-badges.png" },
  { name: "Home Textiles", image: "/images/printed-cotton-labels.png" },
  { name: "Luggage and Bags", image: "/images/quality-label-sample-board.png" },
  { name: "Hand Crafted Products", image: "/images/damask-woven-label.png" },
  { name: "Uniforms and Work", image: "/images/generic-woven-label-hero.png" },
  { name: "Boutiques and Brands", image: "/images/quote-clothing-label-collage.png" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);

  const handleSubmitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuoteSubmitted(true);
    window.setTimeout(() => setQuoteSubmitted(false), 5000);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#f3eee8] text-[#241d1f] selection:bg-[#e9dfd9] selection:text-[#241d1f]">
      <nav className="sticky top-0 z-50 border-b border-[#241d1f]/10 bg-[#f3eee8]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-5 sm:h-[84px] sm:px-8 lg:px-12">
          <a href="#" className="flex items-center gap-3" aria-label="Sangeetha Labels home">
            <Image
              src="/icons/android-chrome-512x512.png"
              alt=""
              width={228}
              height={57}
              className="h-[51px] w-[204px] object-fill sm:h-[57px] sm:w-[228px]"
              priority
            />
          </a>

          <div className="hidden items-center gap-9 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65595c] md:flex">
            <a href="#categories" className="transition hover:text-[#241d1f]">
              Labels
            </a>
            <a href="#about" className="transition hover:text-[#241d1f]">
              About
            </a>
            <a href="#process" className="transition hover:text-[#241d1f]">
              Process
            </a>
            <a href="#quote" className="border border-[#241d1f]/25 px-5 py-3 transition hover:bg-[#e9dfd9]">
              Quote
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#241d1f]/15 text-[#241d1f] md:hidden"
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
          <div className="border-t border-[#241d1f]/10 bg-[#f3eee8] px-5 py-5 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-2 text-sm font-medium text-[#241d1f]">
              <a onClick={closeMenu} href="#categories" className="py-3">
                Labels
              </a>
              <a onClick={closeMenu} href="#about" className="py-3">
                About
              </a>
              <a onClick={closeMenu} href="#process" className="py-3">
                Process
              </a>
              <a onClick={closeMenu} href="#quote" className="py-3">
                Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      <header className="overflow-hidden bg-[#e9dfd9] text-[#241d1f]">
        <div className="mx-auto grid min-h-[760px] max-w-[1440px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 flex items-center px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <h1 className="mt-7 font-serif text-5xl font-medium leading-[0.88] tracking-[-0.035em] sm:text-7xl lg:text-[6.5rem]">
                Premium
                <span className="block font-normal italic text-[#6d3745]">    Labels</span>
              </h1>
              <p className="mt-8 max-w-lg text-sm leading-7 text-[#65595c] sm:text-base sm:leading-8">
                Precision-woven details that give every garment a distinctive expression of your brand.
              </p>
              <div className="mt-11 flex flex-col gap-3 sm:flex-row">
                <a href="#quote" className="border border-[#241d1f]/20 bg-[#f3eee8] px-7 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-[#241d1f] transition hover:bg-[#e9dfd9]">
                  Start your project
                </a>
                <a href="#categories" className="border border-[#241d1f]/30 px-7 py-4 text-center text-[10px] font-bold uppercase tracking-[0.24em] text-[#241d1f] transition hover:border-[#241d1f]">
                  Explore labels
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[460px] overflow-hidden lg:min-h-[760px]">
            <Image
              src="/images/generic-label-assortment-hero.png"
              alt="Assortment of premium generic woven labels, badges, size tabs, and jacquard trims"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition duration-[1600ms] hover:scale-[1.025]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#e9dfd9]/35 via-transparent to-transparent lg:from-[#e9dfd9]/60" />
            <div className="absolute bottom-7 right-7 border border-[#241d1f]/20 bg-[#e9dfd9]/70 px-5 py-4 text-[9px] uppercase tracking-[0.26em] text-[#241d1f]/75 backdrop-blur-md">
              Woven with precision
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="bg-[#f3eee8] py-24 text-[#241d1f] lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:gap-20">
            <p className="pt-2 text-[10px] font-bold uppercase tracking-[0.34em] text-[#6d3745]">Our philosophy</p>
            <div>
              <h2 className="max-w-4xl font-serif text-4xl font-medium leading-none tracking-[-0.025em] sm:text-5xl">Excellence in every label</h2>
              <p className="mt-8 max-w-3xl text-base leading-8 text-[#65595c]">
                Sangeetha Label is a leading woven label factory dedicated to providing high-quality, customized
                woven labels for a wide range of industries worldwide. With decades of experience in the textile
                industry, we have established ourselves as a trusted partner for businesses seeking top-notch
                branding solutions through woven labels.
              </p>
            </div>
          </div>

          <div id="categories" className="mt-24 scroll-mt-24">
            <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#241d1f]/15 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#6d3745]">What we make</p>
                <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#241d1f] sm:text-4xl">Product Catalog</h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[#65595c]">Signature details designed to make products memorable.</p>
            </div>

            <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <article key={category.title} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#e9dfd9]">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#6d3745]">{category.eyebrow}</p>
                    <h3 className="mt-2 font-serif text-xl font-medium text-[#241d1f]">{category.title}</h3>
                    <p className="mt-3 text-xs leading-6 text-[#65595c]">{category.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-28 overflow-hidden bg-[#e9dfd9] text-[#241d1f]">
            <div className="flex flex-col justify-between gap-6 px-8 py-10 sm:flex-row sm:items-end sm:px-12 lg:px-14 lg:py-12">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#6d3745]">Built for brands across sectors</p>
                <h3 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-4xl">Industries we cater to</h3>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[#65595c]">
                Flexible label solutions developed around the material, finish, and performance needs of each market.
              </p>
            </div>

            <div className="grid border-t border-[#241d1f]/12 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="lg:border-r lg:border-[#241d1f]/12">
                {industries.map((industry, index) => {
                  const isActive = activeIndustryIndex === index;

                  return (
                    <button
                      key={industry.name}
                      type="button"
                      onClick={() => setActiveIndustryIndex(index)}
                      aria-controls="industry-preview"
                      aria-pressed={isActive}
                      className={`group flex min-h-[68px] w-full items-center justify-between border-b border-[#241d1f]/12 px-8 text-left font-serif text-lg font-medium transition-all duration-300 last:border-b-0 sm:px-12 sm:text-xl lg:px-14 ${
                        isActive
                          ? "bg-[#f3eee8] text-[#6d3745]"
                          : "text-[#241d1f] hover:bg-[#f3eee8] hover:text-[#6d3745]"
                      }`}
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${
                            isActive ? "scale-100 bg-[#6d3745]" : "scale-75 bg-[#241d1f]/30 group-hover:scale-100 group-hover:bg-[#6d3745]"
                          }`}
                          aria-hidden="true"
                        />
                        {industry.name}
                      </span>
                      <span
                        className={`ml-4 text-base transition duration-300 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </button>
                  );
                })}
              </div>

              <div id="industry-preview" className="relative min-h-[400px] overflow-hidden bg-[#f3eee8] sm:min-h-[500px] lg:min-h-full">
                {industries.map((industry, index) => (
                  <Image
                    key={industry.name}
                    src={industry.image}
                    alt={`Premium label presentation for ${industry.name}`}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className={`object-cover transition-all duration-700 ease-out ${
                      activeIndustryIndex === index ? "scale-100 opacity-100" : "pointer-events-none scale-[1.025] opacity-0"
                    }`}
                    loading="lazy"
                  />
                ))}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#241d1f]/55 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-8 text-[#f3eee8] sm:p-10">
                  <div aria-live="polite">
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#f3eee8]/75">Selected industry</p>
                    <p className="mt-3 font-serif text-2xl font-medium sm:text-3xl">{industries[activeIndustryIndex].name}</p>
                  </div>
                  <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-[#f3eee8]/45 text-lg sm:flex" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#f3eee8] p-8 text-[#241d1f] sm:p-12 lg:p-14">
            <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#6d3745]">Infrastructure</p>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="font-serif text-xl font-medium">Woven Jacquard looms</h3>
                <p className="mt-4 text-sm leading-7 text-[#241d1f]/65">
                  Our woven Jacquard looms are imported from Switzerland and Italy. Their latest technology
                  delivers the sharp, fine finish brands require, with a capacity of 500,000 pieces per day.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium">Cutting and folding</h3>
                <p className="mt-4 text-sm leading-7 text-[#241d1f]/65">
                  Our latest Japanese cutting and folding machines are housed in-house to deliver precise cutting
                  and finishing that meets each customer&apos;s requirements.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium">Embroidery machines</h3>
                <p className="mt-4 text-sm leading-7 text-[#241d1f]/65">
                  Our in-house Japanese embroidery machines have a total of 100 heads, providing the production
                  capacity needed to meet customer requirements.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="certifications" className="relative overflow-hidden bg-[#e9dfd9] py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#6d3745]">Certifications</p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-none tracking-[-0.025em] text-[#241d1f] sm:text-5xl">Trusted quality, globally assured.</h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-12 sm:grid-cols-3">
            {[
              ["/certifications/oeko-tex.svg", "OEKO-TEX", "Confidence in textiles"],
              ["/certifications/sedex.svg", "Sedex", "Responsible business"],
              ["/certifications/gots.svg", "GOTS", "Organic textile standard"],
            ].map(([image, name, description]) => (
              <article key={name} className="group flex flex-col items-center text-center">
                <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[#f3eee8] p-3 transition duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-3 group-hover:scale-105 sm:h-28 sm:w-28">
                  <div className="relative h-full w-full rounded-full">
                    <Image src={image} alt={`${name} certification logo`} fill sizes="128px" className="rounded-full object-contain" />
                  </div>
                </div>
                <div className="mt-6 transition duration-500 group-hover:-translate-y-1">
                  <h3 className="font-serif text-xl text-[#241d1f]">{name}</h3>
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#6d3745]">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f3eee8] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#6d3745]">Design</p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-none tracking-[-0.025em] text-[#241d1f] sm:text-5xl">From idea to final label.</h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#65595c]">
              Our team of experienced designers is on hand to assist clients in creating captivating label designs
              that effectively communicate their brand message and enhance the visual appeal of their products.
            </p>
          </div>

          <div className="mt-16 grid border-y border-[#241d1f]/15 md:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.title}
                className="group relative p-8 text-left md:border-r md:border-[#241d1f]/15 md:last:border-r-0 lg:p-10"
              >
                <span className="block h-1.5 w-1.5 rounded-full bg-[#6d3745] transition duration-500 group-hover:scale-150" aria-hidden="true" />
                <h3 className="mt-7 font-serif text-xl font-medium text-[#241d1f]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#65595c]">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#quote"
              className="inline-flex bg-[#e9dfd9] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#241d1f] transition hover:bg-[#f3eee8]"
            >
              Begin a custom order
            </a>
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-[1440px] px-5 pb-28 pt-12 sm:px-8 lg:px-12 lg:pb-36 lg:pt-20">
        <div className="grid overflow-hidden border border-[#241d1f]/10 bg-[#e9dfd9] text-[#241d1f] shadow-[0_32px_90px_rgba(36,29,31,0.10)] lg:grid-cols-[0.78fr_1fr]">
          <div className="flex min-h-[420px] items-center bg-[#e9dfd9] p-8 sm:p-12 lg:min-h-[760px] lg:p-16 xl:p-20">
            <div className="max-w-xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-[#6d3745]">Label inquiries</p>
              <h2 className="mt-6 font-serif text-5xl font-medium leading-[0.92] tracking-[-0.035em] sm:text-6xl lg:text-7xl">Let&apos;s Label.</h2>
              <p className="mt-8 max-w-md text-sm leading-7 text-[#65595c]">
                Tell us what you are making and we will guide you through materials, finishes, sampling, and production.
              </p>
              <div className="mt-12 border-t border-[#241d1f]/15 pt-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#6d3745]">Direct correspondence</p>
                <a href="mailto:hello@sangeethalabel.com" className="mt-3 inline-block text-sm text-[#241d1f] transition hover:text-[#6d3745]">
                  hello@sangeethalabel.com
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmitQuote} className="grid content-center gap-7 bg-[#f3eee8] p-7 text-[#241d1f] sm:p-12 lg:p-16 xl:p-20">
            <div className="grid gap-7 sm:grid-cols-2">
              <label className="grid gap-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#6d3745]">
                Full name
                <input
                  required
                  type="text"
                  className="border-0 border-b border-[#241d1f]/20 bg-transparent px-0 py-4 text-[15px] font-normal normal-case tracking-normal text-[#241d1f] outline-none transition duration-300 placeholder:text-[#65595c]/55 focus:border-[#6d3745]"
                  placeholder="Your full name"
                />
              </label>
              <label className="grid gap-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#6d3745]">
                Work email
                <input
                  required
                  type="email"
                  className="border-0 border-b border-[#241d1f]/20 bg-transparent px-0 py-4 text-[15px] font-normal normal-case tracking-normal text-[#241d1f] outline-none transition duration-300 placeholder:text-[#65595c]/55 focus:border-[#6d3745]"
                  placeholder="you@brand.com"
                />
              </label>
            </div>

            <div className="grid gap-7 sm:grid-cols-2">
              <label className="grid gap-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#6d3745]">
                Label Type
                <select className="border-0 border-b border-[#241d1f]/20 bg-transparent px-0 py-4 text-[15px] font-normal normal-case tracking-normal text-[#241d1f] outline-none transition duration-300 focus:border-[#6d3745]">
                  <option>Damask woven labels</option>
                  <option>Printed cotton labels</option>
                  <option>Heat transfer labels</option>
                  <option>Hang tags</option>
                  <option>Patches and badges</option>
                </select>
              </label>
              <label className="grid gap-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#6d3745]">
                Quantity
                <input
                  type="number"
                  min="100"
                  className="border-0 border-b border-[#241d1f]/20 bg-transparent px-0 py-4 text-[15px] font-normal normal-case tracking-normal text-[#241d1f] outline-none transition duration-300 placeholder:text-[#65595c]/55 focus:border-[#6d3745]"
                  placeholder="Minimum 100 pcs"
                />
              </label>
            </div>

            <label className="grid gap-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#6d3745]">
              Project Details
              <textarea
                rows={4}
                className="resize-none border-0 border-b border-[#241d1f]/20 bg-transparent px-0 py-4 text-[15px] font-normal normal-case leading-7 tracking-normal text-[#241d1f] outline-none transition duration-300 placeholder:text-[#65595c]/55 focus:border-[#6d3745]"
                placeholder="Artwork, dimensions, folds, material, backing, delivery date..."
              />
            </label>

            <label className="grid gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#6d3745]">
              Upload artwork or reference image
              <span className="border border-dashed border-[#241d1f]/25 bg-[#e9dfd9] p-5 transition duration-300 hover:border-[#6d3745]">
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/svg+xml"
                  className="block w-full cursor-pointer text-xs font-normal normal-case tracking-normal text-[#65595c] file:mr-4 file:cursor-pointer file:border-0 file:bg-[#f3eee8] file:px-4 file:py-3 file:text-[9px] file:font-semibold file:uppercase file:tracking-[0.18em] file:text-[#241d1f]"
                />
                <span className="mt-3 block text-[10px] font-normal normal-case leading-5 tracking-normal text-[#65595c]">
                  PNG, JPG, WEBP, or SVG
                </span>
              </span>
            </label>

            <button
              type="submit"
              className="group mt-2 flex items-center justify-between border border-[#241d1f]/20 bg-[#e9dfd9] px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#241d1f] transition duration-300 hover:bg-[#f3eee8]"
            >
              <span>Send quote request</span>
              <span className="text-lg transition duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </button>

            {quoteSubmitted && (
              <div className="border border-[#241d1f]/25 bg-[#f3eee8] px-4 py-3 text-center text-sm font-semibold text-[#241d1f]">
                Quote request received. We will follow up with the next production steps.
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-[#e9dfd9] px-5 py-14 text-[#241d1f]/68 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-[#241d1f]/10 pb-10 md:grid-cols-2 lg:grid-cols-[1.05fr_0.55fr_0.8fr_1.2fr]">
          <div>
            <Image
              src="/icons/android-chrome-512x512.png"
              alt="Sangeetha Label"
              width={220}
              height={55}
              className="h-[55px] w-[220px] object-fill"
            />
            <p className="mt-4 max-w-md text-sm leading-7">
              Premium, durable custom clothing labels crafted to elevate your brand.
            </p>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#241d1f]">Labels</h3>
            <div className="mt-5 grid gap-3 text-sm">
              <a href="#categories" className="transition hover:text-[#241d1f]">Woven labels</a>
              <a href="#categories" className="transition hover:text-[#241d1f]">Printed labels</a>
              <a href="#categories" className="transition hover:text-[#241d1f]">Heat transfers</a>
              <a href="#categories" className="transition hover:text-[#241d1f]">Patches</a>
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#241d1f]">Contact</h3>
            <div className="mt-5 grid gap-3 text-sm">
              <address className="not-italic leading-7">
                Sangeetha Label<br />
                18 Indira Nagar, Avinashi Road<br />
                (Near Sales Tax Office)<br />
                Tirupur – 641603
              </address>
              <a href="tel:+91421474028" className="transition hover:text-[#241d1f]">Phone: 0421 474028</a>
              <a href="mailto:hello@sangeethalabel.com" className="transition hover:text-[#241d1f]">
                hello@sangeethalabel.com
              </a>
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between gap-4">
              <h3 className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#241d1f]">Location</h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=18%20Indira%20Nagar%2C%20Avinashi%20Road%2C%20Tirupur%20641603"
                target="_blank"
                rel="noreferrer"
                className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#6d3745] transition hover:text-[#241d1f]"
              >
                Open map ↗
              </a>
            </div>
            <div className="mt-5 overflow-hidden border border-[#241d1f]/15 bg-[#f3eee8] p-2">
              <iframe
                title="Sangeetha Labels location on Google Maps"
                src="https://www.google.com/maps?q=18%20Indira%20Nagar%2C%20Avinashi%20Road%2C%20Tirupur%20641603&output=embed"
                className="h-52 w-full grayscale transition duration-500 hover:grayscale-0 lg:h-44"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-col justify-between gap-4 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Sangeetha Labels. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-[#241d1f]">Privacy</a>
            <a href="#" className="transition hover:text-[#241d1f]">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
