"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Kami mulai dengan memahami bisnis, kebutuhan, target audience, dan tujuan website Anda.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Kami menyusun struktur, visual, dan user experience yang sesuai dengan karakter brand Anda.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Konsep yang sudah disepakati kemudian dikembangkan menjadi website yang cepat, responsif, dan fungsional.",
  },
  {
    number: "04",
    title: "Revision",
    description:
      "Kami melakukan penyesuaian berdasarkan feedback agar hasil akhirnya benar-benar sesuai dengan kebutuhan Anda.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Setelah semuanya siap, website dipublikasikan dan siap digunakan untuk mendukung bisnis Anda.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              How It Works
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              From an idea
              <br />
              <span className="text-neutral-400">to something real.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500 md:text-lg">
              Proses yang sederhana, transparan, dan terarah untuk mengubah
              ide Anda menjadi website yang siap digunakan.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Background line */}
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-black/10 md:left-1/2 md:-translate-x-1/2" />

          {/* Animated line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute left-[19px] top-0 w-px origin-top bg-black md:left-1/2 md:-translate-x-1/2"
          />

          {/* Steps */}
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative md:grid md:min-h-[240px] md:grid-cols-2"
                >
                  {/* Mobile / center dot */}
                  <div className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-neutral-50 md:left-1/2 md:-translate-x-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-black" />
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-16 md:pl-0 ${
                      isEven
                        ? "md:col-start-1 md:pr-24 md:text-right"
                        : "md:col-start-2 md:pl-24"
                    }`}
                  >
                    <span className="text-sm font-medium text-neutral-400">
                      {step.number}
                    </span>

                    <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-6 text-neutral-500 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-black/10 pt-8 md:flex-row md:items-center"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              <ArrowDown className="h-4 w-4" />
            </span>

            <span className="text-sm text-neutral-500">
              Ready to start your project?
            </span>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-black"
          >
            Let's work together
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}