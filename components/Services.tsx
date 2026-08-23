"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section heading */}
        <div className="grid gap-8 border-b border-black/10 pb-16 md:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              What We Do
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              Digital solutions
              <br />
              <span className="text-neutral-400">
                made around your vision.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500 md:text-lg">
              Dari landing page sederhana hingga website custom, kami
              membangun digital experience yang sesuai dengan kebutuhan dan
              karakter brand Anda.
            </p>
          </motion.div>
        </div>

        {/* Services list */}
        <div className="mt-4">
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative flex flex-col gap-6 border-b border-black/10 py-8 transition-colors duration-300 hover:bg-neutral-50 md:flex-row md:items-center md:justify-between md:py-10"
            >
              {/* Left */}
              <div className="flex items-start gap-6 md:items-center md:gap-12">
                <span className="w-8 shrink-0 pt-1 text-xs font-medium text-neutral-400 md:pt-0">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500 md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="ml-14 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white md:ml-0">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <p className="max-w-md text-sm leading-6 text-neutral-400">
            Tidak menemukan layanan yang Anda cari? Ceritakan kebutuhan Anda.
            Kami terbuka untuk project yang berbeda.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold"
          >
            Discuss your project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}