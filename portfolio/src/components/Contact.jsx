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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 border-t border-white/5 overflow-hidden">


      {/* Subtle Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] 
                        bg-[var(--color-hunter)] 
                        opacity-10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-[var(--color-highlight)]"
          >
            Let’s Build Something Structured
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-slate-400"
          >
            Open to backend internship opportunities and real-world system challenges.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-col md:flex-row justify-center gap-6"
          >
            <a
              href="mailto:prathmeshkulkarni9529@gmail.com"
              className="px-8 py-3 rounded-lg
                         border border-[var(--color-hunter)]
                         hover:bg-[var(--color-hunter)]/10 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/dullcoder993"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg
                         border border-[var(--color-hunter)]
                         hover:bg-[var(--color-hunter)]/10 transition"
            >
              GitHub
            </a>

            <a
              href="YOUR_LINKEDIN_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg
                         border border-[var(--color-hunter)]
                         hover:bg-[var(--color-hunter)]/10 transition"
            >
              LinkedIn
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;

