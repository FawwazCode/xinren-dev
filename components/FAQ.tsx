"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Waktu pengerjaan bergantung pada kompleksitas dan kebutuhan project. Landing page sederhana biasanya dapat diselesaikan lebih cepat, sedangkan website dengan kebutuhan yang lebih kompleks membutuhkan waktu lebih panjang.",
  },
  {
    question: "Apakah saya bisa request desain sendiri?",
    answer:
      "Tentu. Anda dapat memberikan referensi, moodboard, atau desain yang sudah dimiliki. Kami akan menyesuaikannya dengan kebutuhan website dan identitas brand Anda.",
  },
  {
    question: "Apakah website responsive?",
    answer:
      "Ya. Setiap website dirancang agar dapat digunakan dengan nyaman di berbagai ukuran layar, mulai dari smartphone, tablet, hingga desktop.",
  },
  {
    question: "Apakah domain dan hosting termasuk?",
    answer:
      "Domain dan hosting dapat disiapkan sesuai kebutuhan project. Detail biaya dan layanan akan dibicarakan terlebih dahulu sebelum project dimulai.",
  },
  {
    question: "Apakah tersedia maintenance setelah website selesai?",
    answer:
      "Tersedia. Maintenance dan pengembangan lanjutan dapat didiskusikan sesuai kebutuhan, baik untuk perubahan konten maupun pengembangan fitur baru.",
  },
  {
    question: "Bagaimana cara memulai project?",
    answer:
      "Cukup hubungi Xinren Dev melalui kontak yang tersedia. Ceritakan kebutuhan, tujuan, dan gambaran website yang Anda inginkan. Setelah itu kita dapat mendiskusikan langkah selanjutnya.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              FAQ
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Things you
              <br />
              <span className="text-neutral-400">might want to know.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500">
              Beberapa pertanyaan yang mungkin muncul sebelum Anda memulai
              project bersama Xinren Dev.
            </p>
          </motion.div>
        </div>

        {/* FAQ List */}
        <div className="mt-20 border-t border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="border-b border-black/10"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-8 py-7 text-left md:py-8"
                >
                  <div className="flex items-start gap-5 md:gap-8">
                    <span className="pt-1 text-xs font-medium text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-lg font-medium tracking-tight md:text-xl">
                      {faq.question}
                    </span>
                  </div>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-[52px] md:pl-20">
                        <p className="max-w-2xl text-sm leading-7 text-neutral-500 md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-3 text-sm text-neutral-400 md:flex-row md:items-center md:gap-5"
        >
          <span className="h-px w-8 bg-black/10" />

          <p>
            Masih punya pertanyaan? Jangan ragu untuk menghubungi kami.
          </p>
        </motion.div>
      </div>
    </section>
  );
}