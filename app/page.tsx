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
    { title: "Woven Labels", desc: "Pre-folded, starched damask with high-density threads.", image: "🧵" },
    { title: "Printed Labels", desc: "Ideal for precision gradients, artwork, and care instructions.", image: "🏷️" },
    { title: "Laser Cut Labels", desc: "Luxurious cardstock and vellum layers to set your brand apart.", image: "🎫" },
    { title: "Woven Badges", desc: "In-stock, ready-to-ship garment sizing labels.", image: "📐" },
  ];

  // The 4-Step Process using exact Cruz Label wording and matching imagery assets
  const orderSteps: Step[] = [
    { 
      num: "01", 
      title: "Get A Quote", 
      desc: "Fill out our streamlined online inquiry form with your specific label dimensions, backing materials, fold setups, and artwork layout preferences to receive matrix pricing details.", 
      imgUrl: "https://cruzlabel.com/cdn/shop/files/get_a_quote_200x200.png?v=1633582813",
      altText: "Get a quote for custom clothing labels"
    },
    { 
      num: "02", 
      title: "Sample Approval", 
      desc: "We generate comprehensive layout proofs and program a test weave on our loom system. A physical sample is manufactured and sent over via micro photography for your exact sign-off.", 
      imgUrl: "https://cruzlabel.com/cdn/shop/files/approval_200x200.jpg?v=1648525768",
      altText: "Physical custom sample approval proof stage"
    },
    { 
      num: "03", 
      title: "Mass Production", 
      desc: "Once confirmed, your project transitions into full production queue lines. Our automated machinery executes deep thread counts, setting precise tension profiles for crisp graphic definition.", 
      imgUrl: "https://cruzlabel.com/cdn/shop/files/3-production_200x200.png?v=1633583280",
      altText: "High density textile loom manufacturing line"
    },
    { 
      num: "04", 
      title: "Finishing & Delivery", 
      desc: "Completed labels undergo structural sorting steps, crisp iron folds, and total packaging runs. Finished components are dispatched safely to your fulfillment center or manufacturing facility.", 
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
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-[#B89B5E] selection:text-white">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-1">
                <span className="text-[#111827]">SANGEETHA</span>
                <span className="text-[#B89B5E] font-medium tracking-normal text-xl">LABEL</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center font-semibold text-sm text-stone-600 tracking-wide">
              <a href="#categories" className="hover:text-[#111827] transition-colors">Woven Labels</a>
              <a href="#categories" className="hover:text-[#111827] transition-colors">Heat Fusing</a>
              <a href="#categories" className="hover:text-[#111827] transition-colors">Laser Cut</a>
              <a href="#categories" className="hover:text-[#111827] transition-colors">Woven Badges</a>
              <a href="#products" className="hover:text-[#111827] transition-colors">Shop Stock</a>
              <a href="#quote" className="bg-[#111827] hover:bg-black text-white px-5 py-2.5 rounded-xl transition-colors text-xs uppercase tracking-widest font-bold shadow-md shadow-black/10">
                Get A Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 hover:text-[#111827] p-2 focus:outline-none"
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
          <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Woven Labels</a>
            <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Heat Fusing Woven Labels</a>
            <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Laser Cut Labels</a>
            <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Woven Badges</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium">Shop All</a>
            <a href="#quote" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-[#111827] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest">
              Get A Quote
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-[#FAF7F2] via-white to-[#FAF7F2] overflow-hidden py-20 lg:py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Quality Custom Clothing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111827] to-[#B89B5E] block sm:inline">Labels & Tags.</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Trusted by professional designers and brands that need high quality with exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#quote" className="bg-[#111827] text-white px-8 py-4 rounded-xl border border-[#B89B5E]/20 hover:bg-black font-bold tracking-wide text-sm shadow-xl shadow-black/20 text-center transition-all hover:-translate-y-0.5">
                GET A CUSTOM QUOTE
              </a>
              <a href="#products" className="bg-white text-slate-800 border-2 border-stone-200 px-8 py-4 rounded-xl hover:bg-[#F8F5F0] font-bold tracking-wide text-sm text-center transition-all">
                ORDER STOCK LABELS
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Elegant Stacked Label Simulation */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-stone-100 rounded-2xl border-t-4 border-[#B89B5E] p-6 shadow-2xl flex flex-col justify-between transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-start">
                <span className="text-xs uppercase tracking-widest font-mono text-slate-400">High Density</span>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded uppercase">DAMASK TRIMS</span>
              </div>
              <div className="my-auto text-center">
                <div className="text-3xl font-black tracking-widest mb-1 text-slate-800">SANGEETHA</div>
                <div className="text-[10px] uppercase tracking-widest font-medium text-slate-400">Premium Quality • Made with Care</div>
              </div>
              <div className="border-t border-dashed border-slate-300 pt-4 flex justify-between text-[11px] font-mono text-slate-400">
                <span>SIZE: L</span>
                <span>REG. ID #88492</span>
              </div>
              
              {/* Overlapping deep navy visual label */}
              <div className="absolute -z-10 top-6 left-8 w-full h-full bg-[#111827] text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between transform rotate-6 scale-95 opacity-95 border-b-4 border-[#B89B5E]">
                <div className="text-right text-[9px] tracking-widest text-[#D6C09A] uppercase font-bold">Luxe Collection</div>
                <div className="text-xl font-black tracking-tight text-center text-slate-100">SANGEETHA LUXE</div>
                <div className="text-[9px] text-center text-slate-300">100% ORGANIC COTTON BASE</div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Categories Grid Section */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl mb-4">Precision Manufactured Solutions</h2>
          <p className="text-stone-600">Every single project receives dedicated architectural setups and robust vector mapping profiles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block bg-[#F5F2EC] p-3 rounded-xl">{cat.image}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#111827] transition-colors">{cat.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION: Updated 4-Step Process with Cloned Image Elements */}
      <section className="bg-[#111827] text-white py-24 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B89B5E] font-bold uppercase text-xs tracking-widest block mb-2">Production Blueprint</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Custom Orders Process</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">Transparent structural workflow from initial contact to direct inventory logistics.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {orderSteps.map((step, idx) => (
              <div key={idx} className="bg-[#0B0B0B]/50 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between group hover:border-[#B89B5E]/40 transition-all duration-300 text-center">
                <div>
                  {/* Clean Circular Wrapper mirroring standard logo bar frames */}
                  <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full border-2 border-slate-800 flex items-center justify-center overflow-hidden p-1 group-hover:border-[#B89B5E]/40 transition-colors shadow-lg">
                    <img 
                      src={step.imgUrl} 
                      alt={step.altText} 
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-xs font-mono font-bold text-[#B89B5E] tracking-widest block mb-1">STAGE {step.num}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#D6C09A] transition-colors">{step.title}</h3>
                  </div>
                  
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light mt-2 px-1">{step.desc}</p>
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
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Popular Ready-To-Ship Stock</h2>
            <p className="text-stone-600 mt-1">Pre-folded, fully starched, and prepared for dispatch lines.</p>
          </div>
          <button className="text-sm font-bold text-[#111827] underline underline-offset-4 hover:text-blue-700">View All Stock ({popularProducts.length})</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularProducts.map((prod) => (
            <div key={prod.id} className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md flex flex-col justify-between p-6 hover:border-[#B89B5E] transition-all">
              <div>
                <div className="w-full aspect-square bg-[#F8F5F0] rounded-xl mb-4 flex items-center justify-center text-5xl relative border border-slate-100">
                  🏷️
                  {prod.badge && (
                    <span className="absolute top-2 right-2 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md">
                      {prod.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1 line-clamp-1">{prod.name}</h3>
                <p className="text-stone-500 text-xs mb-4">{prod.desc}</p>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                <span className="font-mono font-bold text-[#111827]">
                  {prod.price === "0.00" ? "FREE" : `₹${prod.price}`}
                </span>
                <button className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-[#111827] hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Quote Form Section */}
      <section id="quote" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative">
          <div className="absolute top-0 right-12 transform -translate-y-1/2 bg-[#B89B5E] text-slate-950 font-bold text-xs uppercase px-4 py-1.5 rounded-full shadow">
            Fast Response Guarantee
          </div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Request A Custom Price Quote</h2>
            <p className="text-stone-500 text-sm">Fill out the fields below and an expert account engineer will compile custom matrix pricing sheets within 24 business hours.</p>
          </div>

          <form onSubmit={handleSubmitQuote} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Your Name</label>
                <input required type="text" className="w-full bg-[#F8F5F0] border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89B5E] transition-colors" placeholder="e.g. Alex Sangeetha" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Email Address</label>
                <input required type="email" className="w-full bg-[#F8F5F0] border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89B5E] transition-colors" placeholder="alex@brand.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Label Type Requested</label>
                <select className="w-full bg-[#F8F5F0] border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89B5E] transition-colors text-slate-700">
                  <option>Damask Woven Labels</option>
                  <option>Heat Fusing Woven Labels</option>
                  <option>Laser Cut Trim Tags</option>
                  <option>Custom Woven Badges</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Estimated Quantity</label>
                <input type="number" min="100" className="w-full bg-[#F8F5F0] border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89B5E] transition-colors" placeholder="Minimum 100 pcs" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Project Details & Sizing Spec</label>
              <textarea rows={4} className="w-full bg-[#F8F5F0] border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89B5E] transition-colors" placeholder="Describe layout, folds (center fold, miter fold), and dimensional lengths..."></textarea>
            </div>

            <button type="submit" className="w-full bg-[#111827] text-white font-extrabold tracking-wide py-4 rounded-xl text-sm uppercase hover:bg-black transition-all shadow-lg shadow-black/20">
              Send Quote Request
            </button>

            {quoteSubmitted && (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm p-4 rounded-xl text-center font-semibold animate-pulse">
                ✓ Quote request processed! Your account representative will follow up within 24 hours.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer / About Us */}
      <footer className="bg-[#0B0B0B] text-slate-400 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          <div className="lg:col-span-5">
            <div className="text-xl font-black text-white tracking-tight mb-4">
              <span className="text-white">SANGEETHA</span>
              <span className="text-[#B89B5E] font-light">LABEL</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Sangeetha Label operates as an advanced textile supplier of industrial clothing tags and components. We specialize in physical loom samples to guarantee accurate product quality.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium">
          <div>&copy; {new Date().getFullYear()} Sangeetha Label. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D6C09A] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}