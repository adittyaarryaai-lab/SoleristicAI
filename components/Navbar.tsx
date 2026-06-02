"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 group">

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full group-hover:bg-green-500/30 transition-all duration-500"></div>

            <Image
              src="/logo.jpg"
              alt="SoleristicAI Logo"
              width={50}
              height={50}
              priority
              className="relative object-contain"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="font-extrabold text-2xl md:text-3xl leading-none">
              <span className="text-white">Soleristic</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
          
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-gray-400">
              AI Automation
            </span>
          </div>

        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          <a
            href="#services"
            className="hover:text-white transition duration-300"
          >
            Services
          </a>

          <a
            href="#products"
            className="hover:text-white transition duration-300"
          >
            Products
          </a>

          <a
            href="#contact"
            className="hover:text-white transition duration-300"
          >
            Contact
          </a>

          {/* CTA BUTTON */}
          <a
            href="https://calendly.com/adittyaarrya-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-[#00A3FF] to-[#39FF14] text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Book Free Demo
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-5 text-gray-300 bg-black/80 backdrop-blur-xl border-t border-white/10">

          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="hover:text-white transition"
          >
            Services
          </a>

          <a
            href="#products"
            onClick={() => setOpen(false)}
            className="hover:text-white transition"
          >
            Products
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="hover:text-white transition"
          >
            Contact
          </a>

          <a
            href="https://calendly.com/adittyaarrya-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#00A3FF] to-[#39FF14] text-black font-bold flex justify-center items-center gap-2"
          >
            Book Demo
            <ArrowRight size={18} />
          </a>

        </div>
      )}
    </nav>
  );
}