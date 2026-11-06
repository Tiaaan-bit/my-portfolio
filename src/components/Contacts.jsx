import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const socials = [
  {
    name: "Email",
    value: "chrisolaybal@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=chrisolaybal@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    value: "Tiaaan-bit",
    href: "https://github.com/Tiaaan-bit",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/chrisolaybal",
    href: "https://www.linkedin.com/in/chrisolaybal",
    icon: FaLinkedin,
  },
  {
    name: "Facebook",
    value: "Chris Tian",
    href: "https://www.facebook.com/christian.bal.8",
    icon: FaFacebook,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-5 py-28 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          Get In Touch
        </p>

        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white md:text-6xl">
              Let's work
              <span className="block text-blue-500">together.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-neutral-600 dark:text-neutral-400">
              I'm always open to discussing new projects, creative ideas, and
              opportunities to collaborate. If you have something in mind, feel
              free to reach out.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&to=chrisolaybal@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Send Me an Email
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={social.name === "Email" ? undefined : "noreferrer"}
                  className="group flex items-center justify-between border-b border-neutral-200 py-6 transition dark:border-neutral-800"
                >
                  <div className="flex items-center gap-5">
                    <Icon
                      size={22}
                      className="text-neutral-500 transition group-hover:text-blue-500"
                    />

                    <div>
                      <h3 className="font-semibold text-neutral-900 transition group-hover:text-blue-500 dark:text-white">
                        {social.name}
                      </h3>

                      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                        {social.value}
                      </p>
                    </div>
                  </div>

                  <div className="text-neutral-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500">
                    <ArrowUpRight size={20} />
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
