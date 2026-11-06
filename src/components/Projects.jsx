import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import studentImage from "../assets/student.png";
import padayonImage from "../assets/padayon.png";
import lockerImage from "../assets/locker.jpg";

const projects = [
  {
    title: "Student Information Management System",
    description:
      "A platform designed to manage student records, personal information, academic profiles, enrollment details, and other essential student-related information.",
    image: studentImage,
    github: "",
    demo: "",
  },
  {
    title: "Appointment Management System With AI Assistant",
    description:
      "A massage center management and online booking platform featuring appointment scheduling, GCash payment integration, therapist management, and an AI voice assistant.",
    image: padayonImage,
    github: "",
    demo: "",
  },
  {
    title: "TapSafe: Biometric Locker Access System",
    description:
      "A prototype designed to provide security and less hassle for students without using traditional lockers.",
    image: lockerImage,
    github: "",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center bg-white px-5 py-24 dark:bg-neutral-950"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Featured Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
            Crafting digital experiences that run seamlessly.
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="aspect-16/10 w-full object-fill transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Project Details */}
              <div className="mt-6">
                <h3 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>

                {/* Links */}
                <div className="mt-6 flex gap-5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-blue-500 dark:text-neutral-300"
                    >
                      Live Demo
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
