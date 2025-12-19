"use client";

import { motion } from "motion/react";
import { useTimeDifference } from "@/hooks/use-time-diff";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface TimeCounterProps {
    targetDate: Date;
    title: string;
    subtitle?: string;
}

export function TimeCounter({ targetDate, title, subtitle }: TimeCounterProps) {
    const diff = useTimeDifference(targetDate);

    return (
        <div className="w-full max-w-md mx-auto px-4">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-10"
            >
                <h3 className="text-white font-serif text-4xl italic mb-3 tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    {title}
                </h3>

                <div className="flex items-center justify-center gap-3 opacity-60">
                    <div className="h-px w-8 bg-linear-to-r from-transparent to-white/50" />
                    <p className="text-white text-[11px] tracking-[0.25em] uppercase font-sans">
                        {format(targetDate, "dd.MM.yyyy • h:mm a", { locale: es })}
                    </p>
                    <div className="h-px w-8 bg-linear-to-l from-transparent to-white/50" />
                </div>
            </motion.div>

            {/* Romantic Time Flow */}
            <div className="flex flex-col items-center gap-8">

                {/* The Journey (Macro Time) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-wrap justify-center items-baseline gap-x-6 gap-y-2"
                >
                    <TimeUnit value={diff.years} label="Años" delay={0.1} main />
                    <span className="text-white/20 font-serif italic text-2xl pt-2">&</span>
                    <TimeUnit value={diff.months} label="Meses" delay={0.2} main />
                    <span className="text-white/20 font-serif italic text-2xl pt-2">&</span>
                    <TimeUnit value={diff.days} label="Días" delay={0.3} main />
                </motion.div>

                {/* Romantic Divider */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "40%", opacity: 0.3 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-px bg-white"
                />

                {/* The Pulse (Micro Time) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex justify-center items-center gap-6"
                >
                    <TimeUnit value={diff.hours} label="Hrs" delay={0.4} />
                    <span className="text-white/20 text-xs">•</span>
                    <TimeUnit value={diff.minutes} label="Min" delay={0.5} />
                    <span className="text-white/20 text-xs">•</span>
                    <TimeUnit value={diff.seconds} label="Seg" delay={0.6} isPulse />
                </motion.div>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.5 }}
                        transition={{ delay: 0.8 }}
                        className="text-white text-xs font-serif italic mt-4 tracking-wider"
                    >
                        "{subtitle}"
                    </motion.p>
                )}
            </div>
        </div>
    );
}

function TimeUnit({ value, label, delay, main = false, isPulse = false }: { value: number, label: string, delay: number, main?: boolean, isPulse?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className={`flex flex-col items-center ${isPulse ? "min-w-[30px]" : ""}`}
        >
            <span className={`
                text-white font-serif italic tabular-nums leading-none
                ${main ? "text-5xl sm:text-6xl drop-shadow-lg" : "text-xl sm:text-2xl text-white/80"}
            `}>
                {value}
            </span>
            <span className={`
                text-white/40 font-sans tracking-widest uppercase mt-1
                ${main ? "text-[10px] sm:text-xs" : "text-[8px]"}
            `}>
                {label}
            </span>
        </motion.div>
    );
}
