"use client";

import { TimeCounter } from "@/components/TimeCounter";
import { MemoryLane, MemoryItem } from "@/components/MemoryLane";
import { motion } from "motion/react";

// Data Definitions
const MEMORIES_DATA: MemoryItem[] = [
  {
    id: 1,
    date: new Date(2025, 1, 6),
    url: "/1.1.jpeg",
    title: "El Primer Instante",
  },
  {
    id: 2,
    date: new Date(2025, 1, 22),
    url: "/1.jpeg",
    title: "La Primera Cita",
  },
  {
    id: 3,
    date: new Date(2025, 2, 15),
    url: "/3.jpeg",
    title: "El Dia que todo cambio",
  },
];

const THROWBACK_DATA: MemoryItem[] = [
  {
    id: 101,
    date: new Date(2024, 11, 17),
    url: "https://images.unsplash.com/photo-1542038784424-48ed70445c84?q=80&w=800&auto=format&fit=crop",
    title: "Hace 1 Año",
    location: "Tu lugar favorito"
  },
  {
    id: 102,
    date: new Date(2024, 11, 25),
    url: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=800&auto=format&fit=crop",
    title: "Navidad Pasada",
    location: "En casa"
  },
  {
    id: 103,
    date: new Date(2024, 11, 31),
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
    title: "Año Nuevo",
    location: "La fiesta"
  },
];

export default function Home() {
  const firstLikeDate = new Date(2025, 2, 15, 20, 40, 0);
  const girlfriendDate = new Date(2025, 2, 19, 15, 27, 0);

  return (
    <main className="h-dvh w-full bg-black text-white font-sans selection:bg-white/20 overflow-y-auto snap-y snap-mandatory scroll-smooth">

      {/* Background stays fixed relative to the viewport/container via main's overflow? 
          Actually, for a fixed background in a scrolling container, 'fixed' works relative to viewport. 
      */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* SECTION 1: HERO */}
      <section className="h-dvh w-full snap-center shrink-0 relative flex flex-col justify-center items-center px-6">
        <div className="absolute top-12 left-6 flex justify-between items-start w-[calc(100%-3rem)]">
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">Est. 2025</span>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">Para que nunca lo olvidemos 💓</span>
        </div>

        <div className="text-center z-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl sm:text-8xl italic leading-[0.9] mb-6"
          >
            Nosotros<span className="text-rose-600">.</span>
          </motion.h1>
          <p className="text-sm text-white/50 max-w-[200px] mx-auto leading-relaxed font-light">
            Una historia contada en segundos, minutos y latidos💖.
          </p>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[9px] uppercase tracking-widest">Desliza</span>
          <div className="w-px h-8 bg-white/20" />
        </div>
      </section>

      {/* SECTION 2a: FIRST LIKE (Midnight Atmosphere) */}
      <section className="h-dvh w-full snap-center snap-always shrink-0 relative flex flex-col justify-center px-6 overflow-hidden">
        {/* Atmospheric Background: Deep Blue/Purple Night */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-indigo-950/40 via-black to-black z-0 pointer-events-none" />

        <div className="relative z-10 scale-90 sm:scale-100">
          <TimeCounter
            targetDate={firstLikeDate}
            title='El Primer "Me gustas" ✨'
          />
        </div>
      </section>

      {/* SECTION 2b: OFFICIAL (Golden Hour Atmosphere) */}
      <section className="h-dvh w-full snap-center snap-always shrink-0 relative flex flex-col justify-center px-6 overflow-hidden">
        {/* Atmospheric Background: Warm Rose/Gold */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-rose-950/30 via-black to-black z-0 pointer-events-none" />

        <div className="relative z-10 scale-90 sm:scale-100">
          <TimeCounter
            targetDate={girlfriendDate}
            title="El “Sí” Oficial 💑💞"
            subtitle="El día que Cambiaste mi mundo"
          />
        </div>
      </section>

      {/* SECTION 3: RECENT MEMORIES */}
      <section className="h-dvh w-full snap-center shrink-0 relative flex flex-col justify-center touch-auto">
        <MemoryLane
          title="Momentos"
          subtitle="Colección"
          memories={MEMORIES_DATA}
        />

        <footer className="relative w-full text-center pb-4">
          <p className="font-serif italic text-lg text-white">Para el amor de mi vida: Ivanna 💓, De parte de Steven siempre tuyo 🥰</p>
        </footer>
      </section>
      {/* SECTION 4: THROWBACK 
      <section className="h-dvh w-full snap-center shrink-0 relative flex flex-col justify-center">
        <MemoryLane
          title="Hace 1 Año"
          subtitle="Recuerdos Inolvidables"
          memories={THROWBACK_DATA}
        />

        <footer className="absolute bottom-8 left-0 w-full text-center">
          <p className="font-serif italic text-sm text-white/30">Por siempre.</p>
        </footer>
      </section> */}

    </main>
  );
}
