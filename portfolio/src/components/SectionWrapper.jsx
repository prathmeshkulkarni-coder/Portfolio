import { motion } from "framer-motion";

const SectionWrapper = () => {
  return (
    <section className="relative py-28 border-t border-white/5 overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[350px]
                        bg-[var(--color-hunter)]
                        opacity-8 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-[var(--color-highlight)]"
        >
          Development Activity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-slate-400 text-xl"
        >
          Consistent system building and experimentation across backend and quantitative projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <img
            src="https://ghchart.rshah.org/prathmeshkulkarni-coder"
            alt="GitHub Contributions"
            className="rounded-lg opacity-80 border border-white/10"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default SectionWrapper;
