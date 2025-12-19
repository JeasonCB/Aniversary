"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";

// Interface for a single memory item
export interface MemoryItem {
    id: number;
    date: Date;
    url: string;
    title: string;
    subtitle?: string; // Optional, as some might not have it
    location?: string; // Optional, for throwback style
}

interface MemoryLaneProps {
    title: string;
    subtitle: string;
    memories: MemoryItem[];
}

export function MemoryLane({ title, subtitle, memories }: MemoryLaneProps) {
    return (
        <div className="flex flex-col justify-center h-full w-full">
            <div className="px-6 mb-8 border-l-2 border-white pl-6 ml-6">
                <h2 className="text-3xl text-white font-serif italic mb-1">{title}</h2>
                <p className="text-white/40 text-xs tracking-[0.2em] font-sans uppercase">{subtitle}</p>
            </div>

            <div className="relative w-full">
                {/* Scroll Container */}
                <div className="flex gap-4 overflow-x-auto px-6 pb-8 snap-x snap-mandatory snap-always scrollbar-hide touch-pan-x">
                    {memories.map((memory, i) => (
                        <MemoryCard key={memory.id} memory={memory} index={i} />
                    ))}
                    {/* Spacer for easy scroll end */}
                    <div className="w-2 shrink-0" />
                </div>

                {/* Visual Affordance Fade */}
                <div className="absolute top-0 right-0 bottom-8 w-12 bg-linear-to-l from-black to-transparent pointer-events-none" />
            </div>
        </div>
    );
}

function MemoryCard({ memory, index }: { memory: MemoryItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="snap-center snap-always shrink-0 w-[80vw] sm:w-[350px] aspect-9/16 relative bg-gray-900 group rounded-lg overflow-hidden"
        >
            <Image
                src={memory.url}
                alt={memory.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 33vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90" />

            <div className="absolute inset-0 p-6 flex flex-col justify-end">

                <h3 className="text-2xl font-serif italic text-white leading-tight mb-2">
                    {memory.title}
                </h3>

                <div className="flex justify-between items-end w-full border-t border-white/10 pt-3 mt-1">
                    <p className="text-white/60 text-[10px] tracking-widest uppercase font-sans">
                        {format(memory.date, "dd MMM yyyy", { locale: es })}
                    </p>
                    {memory.location && (
                        <p className="text-white/40 text-[10px] tracking-widest uppercase font-sans text-right">
                            {memory.location}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
