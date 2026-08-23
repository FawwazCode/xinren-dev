"use client";

import { ArrowUpRight, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-black text-white">
      <div className="container-custom">
        {/* Intro */}
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              Why Xinren?
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl lg:text-7xl">
              More than a website.
              <br />
              <span className="text-white/35">It&apos;s about trust.</span>
            </h2>
          </motion.div>
        </div>

        {/* Brand Story */}
        <div className="mt-24 grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
          {/* Xinren Word */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
          >
            {/* Decorative X */}
            <span
              aria-hidden="true"
              className="absolute select-none text-[18rem] font-black leading-none tracking-[-0.15em] text-white/[0.025]"
            >
              X
            </span>

            <div className="relative text-center">
              <div className="text-7xl font-semibold tracking-[-0.08em] md:text-8xl">
                X
              </div>

              <div className="mt-5">
                <p className="text-lg font-medium tracking-wide">
                  Xinren
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/35">
                  信任 · Trust
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl self-center"
          >
            <p className="text-xl leading-8 text-white/80 md:text-2xl md:leading-10">
              Nama{" "}
              <span className="font-semibold text-white">Xinren</span>{" "}
              terinspirasi dari sebuah kata dalam bahasa Mandarin yang berarti{" "}
              <span className="font-semibold text-white">terpercaya</span>.
            </p>

            <p className="mt-8 text-base leading-7 text-white/45">
              Nama ini berawal dari sebuah hal sederhana yang saya temukan
              ketika sedang menonton film berlatar Tiongkok. Sebuah kata
              kemudian membuat saya berpikir tentang sesuatu yang jauh lebih
              penting daripada sekadar nama sebuah brand.
            </p>

            <p className="mt-6 text-base leading-7 text-white/45">
              Dalam membangun sebuah website, kami bukan hanya dipercaya untuk
              menulis kode atau membuat tampilan yang menarik. Kami dipercaya
              untuk membawa identitas, cerita, dan bisnis seseorang ke dunia
              digital.
            </p>

            <p className="mt-6 text-base leading-7 text-white/45">
              Karena itu, bagi Xinren Dev, keberhasilan sebuah project bukan
              hanya tentang bagaimana website tersebut terlihat. Tetapi juga
              tentang bagaimana kami menjaga kepercayaan yang diberikan kepada
              kami.
            </p>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-y border-white/10 py-16 md:mt-32 md:py-24"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            <Quote className="h-8 w-8 shrink-0 text-white/30" />

            <div>
              <blockquote className="max-w-5xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl md:leading-[1.1]">
                &ldquo;Yang paling mahal dalam sebuah project bukanlah nilai
                uangnya, melainkan kepercayaan yang diberikan client kepada
                kami.&rdquo;
              </blockquote>

              <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/35">
                The Xinren Principle
              </p>
            </div>
          </div>
        </motion.div>

        {/* Philosophy */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Trust",
              description:
                "Menjaga komunikasi dan kepercayaan sejak awal hingga project selesai.",
            },
            {
              number: "02",
              title: "Purpose",
              description:
                "Setiap website dibuat dengan tujuan yang jelas, bukan sekadar terlihat bagus.",
            },
            {
              number: "03",
              title: "Craft",
              description:
                "Memperhatikan detail, experience, performance, dan kualitas setiap hasil kerja.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="border-t border-white/10 pt-6"
            >
              <span className="text-xs font-medium text-white/30">
                {item.number}
              </span>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end"
        >
          <div>
            <p className="text-sm text-white/35">
              Xinren Dev
            </p>

            <p className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">
              Built with trust.
              <br />
              <span className="text-white/35">
                Crafted with purpose.
              </span>
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
          >
            Let&apos;s work together
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}