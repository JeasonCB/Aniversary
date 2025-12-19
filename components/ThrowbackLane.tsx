"use client";

import { motion } from "motion/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const THROWBACK_MEMORIES = [
    {
        id: 101,
        date: new Date(2024, 11, 17), // 1 year ago roughly (Dec 2024 since current is Dec 2025)
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

export function ThrowbackLane() {
    return (
        <section className="py-20 relative border-t border-white/5 mx-6">
            <div className="mb-10 px-6">
                <h2 className="text-3xl text-white font-serif italic mb-1">Hace 1 Año</h2>
                <p className="text-white/40 text-xs tracking-[0.2em] font-sans uppercase">Recuerdos Inolvidables</p>
            </div>

            <div className="flex gap-4 overflow-x-auto px-6 pb-8 snap-x snap-mandatory snap-always scrollbar-hide touch-pan-x">
                {THROWBACK_MEMORIES.map((memory, i) => (
                    <ThrowbackCard key={memory.id} memory={memory} index={i} />
                ))}
                <div className="w-2 shrink-0" />
            </div>
        </section>
    );
}

function ThrowbackCard({ memory, index }: { memory: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="snap-center snap-always shrink-0 w-[80vw] sm:w-[350px] aspect-square relative bg-gray-900 group rounded-xl overflow-hidden"
        >
            <img
                src={memory.url}
                alt={memory.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black to-transparent">
                <h3 className="text-xl font-serif italic text-white mb-1">
                    {memory.title}
                </h3>
                <div className="flex justify-between items-center">
                    <p className="text-white/50 text-[10px] tracking-widest uppercase font-sans">
                        {format(memory.date, "dd MMM yyyy", { locale: es })}
                    </p>
                    <p className="text-white/50 text-[10px] tracking-widest uppercase font-sans">
                        {memory.location}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
