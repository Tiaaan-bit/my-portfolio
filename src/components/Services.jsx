import { motion } from "framer-motion";

import phoneImage from "../assets/phone.png";
import laptopImage from "../assets/laptop.png";

const services = [
  {
    title: "Mobile Application Development",
    description:
      "I develop high-performance mobile applications designed for speed, reliability, and seamless user experience. From modern lifestyle apps to practical everyday solutions, I focus on building intuitive and efficient mobile experiences.",
    image: phoneImage,
    imageAlt: "Mobile application showcase",
    reverse: false,
  },
  {
    title: "Web Application Development",
    description:
      "I build fast, scalable web applications with clean design and seamless functionality. Focused on usability and efficiency, I create web experiences that work effortlessly across devices.",
    image: laptopImage,
    imageAlt: "Web application showcase",
    reverse: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-5 py-24 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Services
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service) => (
            <div
              key={service.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                service.reverse ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: service.reverse ? 40 : -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                  {service.title}
                </h3>

                <p className="mt-6 max-w-lg text-base leading-8 text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: service.reverse ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="overflow-hidden bg-transparent"
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full min-h-70 w-full object-contain transition duration-500 hover:scale-105 md:min-h-100"
                  loading="lazy"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
