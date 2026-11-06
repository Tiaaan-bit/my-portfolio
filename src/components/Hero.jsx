import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import memojiVideo from "../assets/memoji.webm";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full max-w-full items-center overflow-x-clip bg-white px-5 pt-20 pb-10 dark:bg-neutral-950"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 items-center gap-6 md:grid-cols-2">
        {" "}
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white md:text-7xl">
            Developing Solutions That Make an Impact
            <span className="text-blue-500">.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Hi, I'm Christian — Tiaaan, Student & Aspiring Web Developer.
          </p>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            I'm a fourth-year Bachelor of Science in Information Technology
            student at STI College Rosario. I specialize in creating scalable,
            production-ready web applications using modern technologies across
            both frontend and backend.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600 dark:bg-white dark:text-neutral-900 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              View Projects
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition hover:border-blue-500 hover:text-blue-500 dark:border-neutral-700 dark:text-white"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        {/* Hero Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="flex h-auto aspect-square w-full max-w-96 items-center justify-center md:h-125 md:w-125 lg:h-150 lg:w-150">
            {" "}
            <video
              src={memojiVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
