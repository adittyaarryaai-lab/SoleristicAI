export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[180px] animate-pulse" />

      <div className="absolute top-[400px] right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />
    </>
  );
}