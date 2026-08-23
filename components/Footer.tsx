"use client";

import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const whatsappNumber = "+6285939859097";

  const whatsappMessage = encodeURIComponent(
    "Halo Xinren Dev, saya ingin berkonsultasi mengenai pembuatan website."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-black text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="border-t border-white/10 py-16 md:py-20">
          <div className="grid gap-14 md:grid-cols-[1.4fr_0.6fr_0.6fr] md:gap-10">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="#home"
                className="group inline-flex items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-lg font-bold transition-colors duration-300 group-hover:border-white/40">
                  X
                </span>

                <span className="text-lg font-semibold tracking-tight">
                  Xinren Dev
                </span>
              </a>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/35">
                Digital experiences designed with purpose, built with care,
                and grounded in trust.
              </p>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                  Our Principle
                </p>

                <p className="mt-3 text-xl font-medium tracking-tight">
                  Built with trust.
                  <br />
                  <span className="text-white/30">
                    Crafted with purpose.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/25">
                Navigate
              </p>

              <nav className="mt-6 flex flex-col items-start gap-4">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/25">
                Get in touch
              </p>

              <div className="mt-6 flex flex-col items-start gap-4">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />

                  WhatsApp

                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>

                {/* Email */}
                <a
                  href="mailto:xinrendev@gmail.com"
                  className="group inline-flex items-center gap-3 text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  <Mail className="h-4 w-4" />

                  Email

                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/xinren_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  <InstagramIcon />

                  Instagram

                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Large Brand Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden border-t border-white/10 py-12 md:py-20"
        >
          <p
            aria-hidden="true"
            className="select-none text-[24vw] font-black leading-[0.7] tracking-[-0.12em] text-white/[0.035]"
          >
            XINREN
          </p>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-xs text-white/25 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Xinren Dev. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>信任 · Trust</span>

            <a
              href="#home"
              className="transition-colors duration-300 hover:text-white"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}