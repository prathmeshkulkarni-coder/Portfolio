import { motion } from "framer-motion";
import profile from "../assets/Profile.png"

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

const About = () => {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-6xl font-bold text-[var(--color-highlight)] underline"
          >
            About
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-8 text-slate-400 leading-relaxed text-xl"
          >
            I focus on backend-heavy system design, structured API development,
            and secure authentication workflows. My approach prioritizes clarity
            in architecture, maintainability in code, and predictable system behavior.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-slate-400 leading-relaxed text-xl"
          >
            I enjoy working on real production constraints — deployment,
            database modeling, and ensuring data consistency across systems.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE CAPABILITIES */}
        {/*<motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="space-y-8"
        >
          {[
            "Structured REST API Design",
            "Authentication & Role-Based Access",
            "MongoDB Data Modeling",
            "Production Deployment (Render)",
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-white/10 rounded-lg p-6 bg-white/5"
            >
              <p className="text-slate-300">{item}</p>
            </motion.div>
          ))}
        </motion.div>*/}
        {/* RIGHT SIDE - IMAGE CONTAINER */}
<motion.div 
  variants={itemVariants}
  initial="hidden"
  whileInView="show"
  className="relative flex justify-center items-center h-full"
>
  {/* The Hunter Green Glow Effect */}
  <div className="absolute w-72 h-72 bg-[var(--color-hunter)] opacity-20 blur-3xl rounded-full" />

  {/* The Image Wrapper */}
  <div className="relative border-2 border-[var(--color-hunter)] rounded-xl overflow-hidden shadow-[0_0_20px_rgba(22,66,60,0.3)]">
    <img
      src={profile}
      alt="Prathmesh Kulkarni"
      className="w-full h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform hover:scale-105"
    />
    
    {/* Decorative Hunter Green Overlay Tag */}
    <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-hunter)]/80 backdrop-blur-md py-3 text-center">
      <p className="text-white text-sm font-mono uppercase tracking-widest">Backend Developer</p>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default About;

