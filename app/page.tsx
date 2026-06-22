"use client";

import React, { useState, FormEvent } from 'react';

interface Product {
  id: number;
  name: string;
  desc: string;
  price: string;
  badge?: string;
}

interface Step {
  num: string;
  title: string;
  desc: string;
  imgUrl: string;
  altText: string;
}

interface Category {
  title: string;
  desc: string;
  image: string;
}

interface Stat {
  value: string;
  label: string;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState<boolean>(false);

  const popularProducts: Product[] = [
    { id: 1, name: "Letter Size Woven Labels - Bright White", desc: "P, XXS-6XL, 6X available", price: "7.50" },
    { id: 2, name: "MADE IN USA FLAG Clothing Labels", desc: "High-density premium black weave", price: "15.00" },
    { id: 3, name: "Custom Cotton Printed Label", desc: "Eco-friendly natural soft cotton", price: "0.00", badge: "Free Sample" },
    { id: 4, name: "Custom Text Woven Label", desc: "Front only customizable finish", price: "25.00" },
  ];

  const categories: Category[] = [
    { title: "Woven Labels", desc: "Pre-folded, starched with high-density threads.", image: "🧵" },
    { title: "Printed Labels", desc: "Ideal for precision gradients, artwork, and care instructions.", image: "🏷️" },
    { title: "Laser Cut Labels", desc: "Luxurious cardstock and vellum layers to set your brand apart.", image: "🎫" },
    { title: "Woven Badges", desc: "In-stock, ready-to-ship garment sizing labels.", image: "📐" },
  ];

  const stats: Stat[] = [
    { value: "2,500+", label: "Brands served" },
    { value: "48 hrs", label: "Proof turnaround" },
    { value: "100 pcs", label: "Low minimum order" },
    { value: "Free", label: "Sample on request" },
  ];

  // The 4-Step Process using exact Cruz Label wording and matching imagery assets
  const orderSteps: Step[] = [
    {
      num: "01",
      title: "Get A Quote",
      desc: "Share your label dimensions, backing material, fold setup, and artwork in our quick online form, and we'll send back clear, itemised pricing.",
      imgUrl: "https://cruzlabel.com/cdn/shop/files/get_a_quote_200x200.png?v=1633582813",
      altText: "Get a quote for custom clothing labels"
    },
    {
      num: "02",
      title: "Sample Approval",
      desc: "We prepare a detailed layout proof and weave a physical test sample on our looms, then send it over with close-up photography for your exact sign-off.",
      imgUrl: "https://cruzlabel.com/cdn/shop/files/approval_200x200.jpg?v=1648525768",
      altText: "Physical custom sample approval proof stage"
    },
    {
      num: "03",
      title: "Mass Production",
      desc: "Once approved, your order enters full production. Our machinery holds precise thread counts and tension for crisp, consistent detail on every piece.",
      imgUrl: "https://cruzlabel.com/cdn/shop/files/3-production_200x200.png?v=1633583280",
      altText: "High density textile loom manufacturing line"
    },
    {
      num: "04",
      title: "Finishing & Delivery",
      desc: "Finished labels are sorted, folded, and carefully packaged, then dispatched safely to your studio, fulfilment centre, or factory floor.",
      imgUrl: "https://cruzlabel.com/cdn/shop/files/4-delivery_200x200.png?v=1633583484",
      altText: "Secure global delivery and logistics dispatch"
    }
  ];

  const handleSubmitQuote = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => setQuoteSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-700 font-sans selection:bg-teal-700 selection:text-stone-50">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-1.5">
                <span className="text-teal-800">SANGEETHA</span>
                <span className="text-amber-600 font-medium tracking-normal text-xl">LABEL</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center font-semibold text-sm text-stone-500 tracking-wide">
              <a href="#categories" className="hover:text-teal-700 transition-colors">Woven Labels</a>
              <a href="#categories" className="hover:text-teal-700 transition-colors">Heat Fusing</a>
              <a href="#categories" className="hover:text-teal-700 transition-colors">Laser Cut</a>
              <a href="#categories" className="hover:text-teal-700 transition-colors">Woven Badges</a>
              <a href="#products" className="hover:text-teal-700 transition-colors">Shop Stock</a>
              <a href="#quote" className="bg-teal-700 hover:bg-teal-800 text-stone-50 px-5 py-2.5 rounded-xl transition-colors text-xs uppercase tracking-widest font-bold shadow-md shadow-teal-700/15">
                Get A Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-stone-600 hover:text-teal-700 p-2 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-50 border-b border-stone-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-600 font-medium">Woven Labels</a>
            <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-600 font-medium">Heat Fusing Woven Labels</a>
            <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-600 font-medium">Laser Cut Labels</a>
            <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-600 font-medium">Woven Badges</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-600 font-medium">Shop All</a>
            <a href="#quote" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-teal-700 text-stone-50 py-3 rounded-xl font-bold text-xs uppercase tracking-widest">
              Get A Quote
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-teal-50/60 via-stone-50 to-stone-50 overflow-hidden py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="inline-block text-amber-700 font-bold uppercase text-xs tracking-[0.2em] mb-5 bg-amber-100/70 px-3 py-1 rounded-full">Bespoke Textile Trims</span>
            <h1 className="text-4xl sm:text-6xl font-black text-stone-900 tracking-tight leading-[1.1] mb-6">
              Beautifully Woven <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800 block sm:inline">Labels &amp; Tags</span> for Modern Brands.
            </h1>
            <p className="text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                From a single sample to full production runs — premium weaves, soft cotton prints, and laser-cut trims, finished and delivered with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#quote" className="bg-teal-700 text-stone-50 px-8 py-4 rounded-xl hover:bg-teal-800 font-bold tracking-wide text-sm shadow-xl shadow-teal-700/20 text-center transition-all hover:-translate-y-0.5">
                GET A CUSTOM QUOTE
              </a>
              <a href="#products" className="bg-white text-stone-800 border border-stone-200 px-8 py-4 rounded-xl hover:bg-stone-100 hover:border-stone-300 font-bold tracking-wide text-sm text-center transition-all">
                ORDER STOCK LABELS
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Elegant Stacked Label Simulation */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 group">

              {/* Soft glow behind the stack */}
              <div className="absolute inset-0 -m-6 bg-gradient-to-tr from-teal-200/40 via-amber-100/30 to-transparent rounded-[2rem] blur-2xl" aria-hidden="true"></div>

              {/* Back depth layer */}
              <div className="absolute inset-0 bg-stone-200/70 rounded-2xl transform rotate-[10deg] scale-90 shadow-lg" aria-hidden="true"></div>

              {/* Overlapping deep teal woven label */}
              <div className="absolute inset-0 bg-teal-800 text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between transform rotate-6 scale-95 opacity-95 border-b-4 border-amber-400 overflow-hidden">
                {/* Woven thread texture */}
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_1px,transparent_5px)]" aria-hidden="true"></div>
                <div className="relative text-right text-[9px] tracking-widest text-amber-300 uppercase font-bold">Luxe Collection</div>
                <div className="relative text-xl font-black tracking-tight text-center text-stone-100">SANGEETHA LUXE</div>
                <div className="relative text-[9px] text-center text-teal-100/80">100% ORGANIC COTTON BASE</div>
              </div>

              {/* Front woven label with weave texture, stitching & barcode */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-stone-50 rounded-2xl shadow-2xl shadow-teal-900/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 overflow-hidden">

                {/* Subtle woven fabric weave */}
                <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(0deg,#0f766e_0,#0f766e_1px,transparent_1px,transparent_4px),repeating-linear-gradient(90deg,#0f766e_0,#0f766e_1px,transparent_1px,transparent_4px)]" aria-hidden="true"></div>

                {/* Top accent weave bar */}
                <div className="h-2 w-full bg-gradient-to-r from-amber-300 via-amber-400 to-teal-500" aria-hidden="true"></div>

                {/* Stitched inner border */}
                <div className="absolute inset-3 top-5 border-2 border-dashed border-stone-300/70 rounded-xl pointer-events-none" aria-hidden="true"></div>

                <div className="relative h-[calc(100%-0.5rem)] p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-xs uppercase tracking-widest font-mono text-stone-400">High Density</span>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded uppercase">PREMIUM TRIMS</span>
                  </div>
                  {/* Woven label swatch photo */}
                  <div className="my-3 rounded-lg overflow-hidden ring-1 ring-stone-200 shadow-inner">
                    <img
                      src="https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?auto=format&fit=crop&w=400&q=80"
                      alt="Close-up of premium woven clothing labels"
                      className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black tracking-widest mb-1 text-teal-800">SANGEETHA</div>
                    <div className="text-[10px] uppercase tracking-widest font-medium text-stone-400">Premium Quality • Made with Care</div>
                  </div>
                  <div className="border-t border-dashed border-stone-300 pt-4 flex justify-between items-end text-[11px] font-mono text-stone-400">
                    <div>
                      <div>SIZE: L</div>
                      <div className="mt-0.5">#88492</div>
                    </div>
                    {/* Mini barcode */}
                    <div className="flex items-end gap-[2px] h-7" aria-hidden="true">
                      {[3,7,2,6,4,7,1,5,3,6,2,7,4].map((h, i) => (
                        <span key={i} className="w-[2px] bg-stone-700" style={{ height: `${h * 4}px` }}></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hang loop ring at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full border-[3px] border-amber-400 bg-stone-50" aria-hidden="true"></div>

              {/* Floating accent chips */}
              <div className="absolute -left-4 top-12 z-20 bg-white rounded-xl shadow-lg px-3 py-2 text-[10px] font-bold text-teal-800 flex items-center gap-1.5 border border-stone-100 transform -rotate-3 group-hover:-translate-y-1 transition-transform duration-500" aria-hidden="true">
                <span className="text-amber-500">✦</span> Eco Cotton
              </div>
              <div className="absolute -right-3 bottom-10 z-20 bg-teal-700 rounded-xl shadow-lg px-3 py-2 text-[10px] font-bold text-white flex items-center gap-1.5 transform rotate-3 group-hover:translate-y-1 transition-transform duration-500" aria-hidden="true">
                ✓ Loom Tested
              </div>
            </div>
          </div>

        </div>

        {/* Trust / Stats strip */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200/70 rounded-2xl overflow-hidden border border-stone-200/70 shadow-sm">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm px-6 py-7 text-center">
                <div className="text-2xl sm:text-3xl font-black text-teal-800 tracking-tight mb-1">{stat.value}</div>
                <div className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Categories Grid Section */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-700 font-bold uppercase text-xs tracking-[0.2em] block mb-3">What We Make</span>
          <h2 className="text-3xl font-black text-stone-900 tracking-tight sm:text-4xl mb-4">Crafted for Every Detail</h2>
          <p className="text-stone-600">Every order is set up by hand and mapped with care, so the finished trim looks exactly the way you designed it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="relative bg-white p-8 rounded-2xl border border-stone-200/70 shadow-sm shadow-stone-200/50 hover:shadow-md hover:shadow-teal-900/5 transition-all hover:-translate-y-1.5 group overflow-hidden">
              {/* Large ghosted index watermark */}
              <span className="absolute -top-2 right-3 text-[5rem] leading-none font-black text-stone-900/[0.03] group-hover:text-teal-700/[0.06] transition-colors select-none pointer-events-none" aria-hidden="true">{String(idx + 1).padStart(2, "0")}</span>

              {/* Soft gradient ring framing the icon */}
              <div className="relative inline-block mb-6 rounded-2xl p-[2px] bg-gradient-to-br from-amber-300/70 via-teal-300/30 to-teal-500/20 group-hover:from-amber-400 group-hover:via-amber-300/60 group-hover:to-teal-400 transition-all duration-300">
                <div className="text-4xl bg-stone-100 p-3 rounded-[14px] group-hover:scale-110 transition-transform duration-300">{cat.image}</div>
              </div>

              <h3 className="relative text-lg font-bold text-stone-900 mb-2 group-hover:text-teal-700 transition-colors">{cat.title}</h3>
              <p className="relative text-stone-600 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION: Updated 4-Step Process with Cloned Image Elements */}
      <section className="bg-teal-800 text-white py-24 border-y border-teal-700/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#5eead4_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.08]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-300 font-bold uppercase text-xs tracking-[0.2em] block mb-2">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-50">From First Sketch to Finished Order</h2>
            <p className="text-teal-100/70 mt-2 text-sm sm:text-base">A clear, friendly process — you'll know exactly where your order stands at every step.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting progress line spanning the row (desktop only) */}
            <div className="hidden lg:block absolute top-[88px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" aria-hidden="true"></div>

            {orderSteps.map((step, idx) => (
              <div key={idx} className="bg-teal-700/30 border border-teal-600/50 rounded-2xl p-6 pt-8 relative flex flex-col justify-between group hover:border-amber-300/60 hover:bg-teal-700/50 hover:-translate-y-1.5 transition-all duration-300 text-center overflow-hidden">
                {/* Large ghosted step number watermark */}
                <span className="absolute -top-3 right-2 text-[5.5rem] leading-none font-black text-white/[0.05] group-hover:text-amber-300/[0.09] transition-colors select-none pointer-events-none" aria-hidden="true">{step.num}</span>

                <div className="relative">
                  {/* Soft gold gradient ring framing the image */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-br from-amber-300 via-amber-200/40 to-teal-500/40 group-hover:from-amber-200 group-hover:via-amber-300 group-hover:to-amber-400 transition-all duration-300 shadow-lg shadow-teal-900/40 relative z-10">
                    <div className="w-full h-full bg-white rounded-full overflow-hidden p-1">
                      <img
                        src={step.imgUrl}
                        alt={step.altText}
                        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block text-[10px] font-mono font-bold text-amber-300 tracking-[0.2em] mb-2 px-2.5 py-0.5 rounded-full border border-amber-300/30 bg-amber-300/5">STAGE {step.num}</span>
                    <h3 className="text-lg font-bold text-stone-50 group-hover:text-amber-200 transition-colors">{step.title}</h3>
                  </div>

                  <p className="text-teal-50/70 text-xs sm:text-sm leading-relaxed font-light px-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Popular Products Grid */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <span className="text-amber-700 font-bold uppercase text-xs tracking-[0.2em] block mb-3">Ready to Ship</span>
            <h2 className="text-3xl font-black text-stone-900 tracking-tight">Popular Stock Labels</h2>
            <p className="text-stone-600 mt-1">Pre-folded, fully starched, and ready to dispatch — no minimums, no wait.</p>
          </div>
          <button className="text-sm font-bold text-teal-700 underline underline-offset-4 hover:text-teal-600 transition-colors">View All Stock ({popularProducts.length})</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularProducts.map((prod) => (
            <div key={prod.id} className="bg-white rounded-2xl overflow-hidden border border-stone-200/70 shadow-sm shadow-stone-200/50 flex flex-col justify-between p-6 hover:border-teal-600/30 hover:shadow-md hover:shadow-teal-900/5 transition-all">
              <div>
                <div className="w-full aspect-square bg-stone-50 rounded-xl mb-4 flex items-center justify-center text-5xl relative border border-stone-100">
                  🏷️
                  {prod.badge && (
                    <span className="absolute top-2 right-2 bg-teal-700 text-stone-50 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md">
                      {prod.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-stone-900 text-base mb-1 line-clamp-1">{prod.name}</h3>
                <p className="text-stone-500 text-xs mb-4">{prod.desc}</p>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-stone-100">
                <span className="font-mono font-bold text-teal-700">
                  {prod.price === "0.00" ? "FREE" : `₹${prod.price}`}
                </span>
                <button className="bg-stone-100 text-stone-800 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-teal-700 hover:text-stone-50 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Quote Form Section */}
      <section id="quote" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-2xl shadow-teal-900/10 relative">
          <div className="absolute top-0 right-12 transform -translate-y-1/2 bg-amber-400 text-teal-900 font-bold text-xs uppercase px-4 py-1.5 rounded-full shadow">
            Fast Response Guarantee
          </div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-3xl font-black text-stone-900 tracking-tight mb-2">Request A Custom Quote</h2>
            <p className="text-stone-500 text-sm">Tell us what you need and a specialist will prepare your custom pricing within 24 business hours — no obligation.</p>
          </div>

          <form onSubmit={handleSubmitQuote} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Your Name</label>
                <input required type="text" className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10 transition-all" placeholder="e.g. Alex Sangeetha" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Email Address</label>
                <input required type="email" className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10 transition-all" placeholder="alex@brand.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Label Type Requested</label>
                <select className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10 transition-all text-stone-700">
                  <option>Woven Labels</option>
                  <option>Heat Fusing Woven Labels</option>
                  <option>Laser Cut Trim Tags</option>
                  <option>Custom Woven Badges</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Estimated Quantity</label>
                <input type="number" min="100" className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10 transition-all" placeholder="Minimum 100 pcs" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Project Details &amp; Sizing Spec</label>
              <textarea rows={4} className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10 transition-all" placeholder="Describe layout, folds (center fold, miter fold), and dimensional lengths..."></textarea>
            </div>

            <button type="submit" className="w-full bg-teal-700 text-stone-50 font-extrabold tracking-wide py-4 rounded-xl text-sm uppercase hover:bg-teal-800 transition-all shadow-lg shadow-teal-700/20">
              Send Quote Request
            </button>

            {quoteSubmitted && (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm p-4 rounded-xl text-center font-semibold animate-pulse">
                ✓ Quote request received! Your account representative will follow up within 24 hours.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer / About Us */}
      <footer className="bg-teal-900 text-teal-100/70 pt-16 pb-12 border-t border-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-teal-800">

          <div className="lg:col-span-5">
            <div className="text-xl font-black tracking-tight mb-4">
              <span className="text-stone-50">SANGEETHA</span>
              <span className="text-amber-400 font-light">LABEL</span>
            </div>
            <p className="text-sm text-teal-100/70 leading-relaxed max-w-sm mb-6">
              A specialist textile supplier of custom clothing tags and trims. We weave physical loom samples for every order, so the quality you approve is the quality you receive.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-teal-800 hover:bg-amber-400 hover:text-teal-900 flex items-center justify-center transition-colors">in</a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-teal-800 hover:bg-amber-400 hover:text-teal-900 flex items-center justify-center transition-colors">f</a>
              <a href="#" aria-label="X" className="w-9 h-9 rounded-lg bg-teal-800 hover:bg-amber-400 hover:text-teal-900 flex items-center justify-center transition-colors">x</a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-stone-50 font-bold text-sm uppercase tracking-widest mb-4">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#categories" className="hover:text-amber-300 transition-colors">Woven Labels</a></li>
              <li><a href="#categories" className="hover:text-amber-300 transition-colors">Printed Labels</a></li>
              <li><a href="#categories" className="hover:text-amber-300 transition-colors">Laser Cut Labels</a></li>
              <li><a href="#products" className="hover:text-amber-300 transition-colors">Ready-to-Ship Stock</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-stone-50 font-bold text-sm uppercase tracking-widest mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#quote" className="hover:text-amber-300 transition-colors">Request a Quote</a></li>
              <li><a href="mailto:hello@sangeethalabel.com" className="hover:text-amber-300 transition-colors">hello@sangeethalabel.com</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Order a Free Sample</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium">
          <div>&copy; {new Date().getFullYear()} Sangeetha Label. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
