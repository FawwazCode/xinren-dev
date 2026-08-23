"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "@/data/content";

export default function Portfolio() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400"
            >
              Selected Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl"
            >
              A few things
              <br />
              <span className="text-neutral-400">we've built.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-sm leading-6 text-neutral-500"
          >
            Beberapa project yang merepresentasikan cara kami memadukan
            design, technology, dan user experience.
          </motion.p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.a
            href={featuredProject.href}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="group mt-16 block"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-[2rem] bg-neutral-100">
              {featuredProject.image && (
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

              {/* Arrow */}
              <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition-all duration-500 group-hover:opacity-100 md:right-8 md:top-8">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>

            {/* Project Information */}
            <div className="mt-6 flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {featuredProject.title}
                  </h3>

                  <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-500">
                    Featured
                  </span>
                </div>

                <p className="mt-2 text-sm text-neutral-500">
                  {featuredProject.description}
                </p>
              </div>

              <span className="text-sm text-neutral-400">
                {featuredProject.category}
              </span>
            </div>
          </motion.a>
        )}

        {/* Other Projects */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group block"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[1.5rem] bg-neutral-100">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                {/* Arrow */}
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Project Information */}
              <div className="mt-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
                    {project.description}
                  </p>
                </div>

                <span className="shrink-0 text-xs text-neutral-400">
                  {project.category}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}