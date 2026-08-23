"use client";

import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pb-20 pt-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100 blur-3xl" />

        <div className="absolute -right-32 top-32 h-72 w-72 rounded-full border border-black/[0.04]" />
        <div className="absolute -right-20 top-44 h-56 w-56 rounded-full border border-black/[0.04]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                <Sparkles className="h-4 w-4" />
              </span>

              <span className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Website Development Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-black sm:text-6xl md:text-7xl lg:text-[6.5rem]"
            >
              Websites built
              <br />
              <span className="text-neutral-400">with intention.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 max-w-xl text-base leading-7 text-neutral-500 md:text-lg"
            >
              Kami membantu bisnis dan personal brand membangun website
              modern, profesional, dan memorable yang dirancang untuk tumbuh
              bersama brand Anda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Mulai Project
                <ArrowUpRight className="h-4 w-4 !text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:bg-neutral-50"
              >
                Lihat Portfolio
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              type: "spring",
              stiffness: 80,
            }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            {/* Main X */}
            <div className="absolute inset-8 flex items-center justify-center rounded-[3rem] bg-black shadow-2xl">
              <motion.div
                animate={{
                  rotate: [0, 4, -4, 0],
                  scale: [1, 1.03, 1.03, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <span className="text-[12rem] font-black leading-none tracking-[-0.15em] text-white md:text-[14rem]">
                  X
                </span>
              </motion.div>

              {/* Corner label */}
              <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <span className="text-xs font-medium tracking-wider text-white">
                  XINREN DEV
                </span>
              </div>

              <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-white" />
            </div>

            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-black/10"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-4 rounded-full border border-dashed border-black/[0.08]"
            />

            {/* Floating label */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-12 rounded-full border border-black/10 bg-white px-4 py-2 shadow-lg md:-right-8"
            >
              <span className="text-xs font-medium text-black">
                Digital Experiences
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom indicator */}
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-black md:flex"
        >
          <span>Explore</span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10">
            <ArrowDown className="h-4 w-4" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}