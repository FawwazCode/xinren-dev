"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    number: "01",
    title: "Purposeful Design",
    description:
      "Setiap elemen visual memiliki tujuan. Kami tidak membuat website hanya agar terlihat bagus, tetapi agar mampu menyampaikan karakter brand Anda.",
  },
  {
    number: "02",
    title: "Built Around Your Brand",
    description:
      "Website bukan template yang dipaksakan. Struktur, visual, dan pengalaman pengguna dirancang berdasarkan kebutuhan bisnis Anda.",
  },
  {
    number: "03",
    title: "Responsive by Default",
    description:
      "Pengalaman yang konsisten di berbagai ukuran layar, mulai dari smartphone hingga desktop.",
  },
  {
    number: "04",
    title: "Performance Matters",
    description:
      "Website yang modern juga harus terasa cepat. Kami memperhatikan performa, struktur, dan pengalaman pengguna.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding overflow-hidden bg-black text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              Why Xinren Dev
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              We don't just build websites.
              <br />
              <span className="text-white/30">
                We build digital identities.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Reasons */}
        <div className="mt-24 border-t border-white/10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-[100px_1fr_1.2fr] md:items-center md:py-14"
            >
              {/* Number */}
              <span className="text-sm font-medium text-white/30 transition-colors duration-300 group-hover:text-white">
                {reason.number}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                {reason.title}
              </h3>

              {/* Description */}
              <div className="flex items-start justify-between gap-8">
                <p className="max-w-lg text-sm leading-6 text-white/45 md:text-base">
                  {reason.description}
                </p>

                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black md:flex">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
              <Check className="h-5 w-5" />
            </div>

            <span className="text-sm text-white/60">
              Designed with intention. Built with purpose.
            </span>
          </div>

          <span className="text-5xl font-semibold tracking-[-0.05em] text-white/10 md:text-7xl">
            XINREN
          </span>
        </motion.div>
      </div>
    </section>
  );
}