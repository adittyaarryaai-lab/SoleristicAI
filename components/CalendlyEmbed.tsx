"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full flex justify-center py-10">
      <div
        className="calendly-inline-widget w-full max-w-5xl h-[700px]"
        data-url="https://calendly.com/adittyaarrya-ai/30min"
      />
    </div>
  );
}