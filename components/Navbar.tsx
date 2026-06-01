import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="font-bold text-2xl">
          SoleristicAI
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}