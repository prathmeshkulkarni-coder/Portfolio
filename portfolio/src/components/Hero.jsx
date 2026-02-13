import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Subtle Green Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px]
                      bg-[var(--color-hunter)] opacity-15 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >

          <motion.h2
            variants={itemVariants}
            className="mt-6 text-2xl md:text-3xl text-slate-300"
          >
            Hi I'm,
          </motion.h2>
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-extrabold text-[var(--color-highlight)] tracking-tight"
          >
            Prathmesh Kulkarni
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="h-[2px] w-16 bg-[var(--color-hunter)] mt-6"
          />

          <motion.h2
            variants={itemVariants}
            className="mt-6 text-2xl md:text-3xl text-slate-300"
          >
            Backend Engineer (MERN Stack)
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-slate-400 max-w-xl leading-relaxed text-lg"
          >
            I design and build structured, secure, production-ready web systems
            with strong backend architecture and clean API design.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"

            >
            <a
                href="#projects"
                className="bg-[var(--color-hunter)] px-8 py-3 rounded-md hover:opacity-90 transition"
            >
                View Project
            </a>

            <a
                href="#contact"
                className="border border-[var(--color-hunter)] px-8 py-3 rounded-md hover:bg-[var(--color-hunter)]/10 transition"
            >
                Contact
            </a>
            <a
              href="/Prathmesh_Kulkarni_Resume.pdf"
              download
              className="border border-(--color-hunter) px-5 py-3 rounded-md hover:bg-(--color-hunter)/10 transition"
            >
              Download Resume
            </a>
            </motion.div>
            
        </motion.div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="hidden md:block"
        >
          <motion.div
            variants={itemVariants}
            className="border border-white/10 rounded-xl p-10
                       bg-white/5 backdrop-blur-md"
          >
            <p className="text-slate-300 uppercase text-lg tracking-widest">
              ➱ Core Strength
            </p>

            <ul className="mt-6 space-y-4 text-slate-400 text-lg">
              <li>✔ REST API Architecture</li>
              <li>✔ Role-Based Access Control</li>
              <li>✔ JWT Authentication</li>
              <li>✔ MongoDB Data Modeling</li>
            </ul>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
