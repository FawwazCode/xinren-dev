"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function CTA() {
  const whatsappNumber = "+6285939859097";

  const whatsappMessage = encodeURIComponent(
    "Halo Xinren Dev, saya tertarik untuk membuat website. Saya ingin berkonsultasi mengenai project saya."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full border border-white/[0.04]" />

        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full border border-white/[0.04]" />
      </div>

      <div className="container-custom relative">
        <div className="section-padding">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/35">
              Start a Project
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8"
          >
            <h2 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl">
              Have an idea?
              <br />
              <span className="text-white/30">Let&apos;s make it real.</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-xl text-base leading-7 text-white/45 md:text-lg"
          >
            Ceritakan ide, kebutuhan, atau bisnis Anda kepada kami. Mari
            diskusikan bagaimana sebuah website dapat membantu Anda tampil
            lebih baik di dunia digital.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold !text-black transition-transform duration-300 hover:scale-[1.02] md:px-8 md:py-5"
            >
              Let&apos;s Talk

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>

          {/* Trust statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24 border-t border-white/10 pt-8 md:mt-32"
          >
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm text-white/30">
                  Xinren Dev
                </p>

                <p className="mt-2 text-lg font-medium tracking-tight text-white/70">
                  Built with trust.
                </p>
              </div>

              <p className="max-w-sm text-sm leading-6 text-white/30 md:text-right">
                Karena project yang baik dimulai dari komunikasi dan
                kepercayaan yang baik.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}