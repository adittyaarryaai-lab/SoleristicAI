interface GlassCardProps {
  children: React.ReactNode;
}

export default function GlassCard({
  children,
}: GlassCardProps) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      rounded-3xl
      p-8
      shadow-2xl
      hover:border-blue-500/40
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      {children}
    </div>
  );
}