"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-black/10 bg-white/90 px-5 shadow-sm backdrop-blur-xl md:px-6">
        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
         <div className="relative h-9 w-9 overflow-hidden rounded-full">
            <Image
              src="/logo-besar.png"
              alt="Xinren Dev Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <span className="text-sm font-semibold tracking-tight">
            Xinren Dev
          </span>
        </a>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-500 transition-colors duration-200 hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold !text-white transition-transform duration-200 hover:scale-[1.03] md:flex"
        >
          <span className="!text-white">Let's Talk</span>
          <ArrowUpRight className="h-4 w-4 !text-white" />
        </a>

        {/* Mobile Menu Button */}

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-3xl border border-black/10 bg-white p-4 shadow-lg backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-1 rounded-2xl bg-black px-4 py-3 text-sm font-medium !text-white"
              >
                Let's Talk
                <ArrowUpRight className="h-4 w-4 text-white" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}