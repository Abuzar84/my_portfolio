"use client";

import { ArrowRight, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-secondary font-medium mb-4 tracking-wide">
          Vibe Code Developer
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Abuzar Sayyed</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10">
          I craft high-converting landing pages and modern web solutions that
          look stunning and perform fast.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 font-medium transition-all glow-purple"
          >
            View My Work
            <ArrowRight size={18} />
          </a>
          <a
            href="https://github.com/Abuzar84"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 text-muted hover:text-white transition-all"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
