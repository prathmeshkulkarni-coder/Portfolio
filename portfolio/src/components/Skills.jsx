import { motion } from "framer-motion";

const categories = {
  Backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "REST API Design"
  ],
  Frontend: [
    "React",
    "Tailwind CSS",
    "Context API",
    "Axios"
  ],
  "Deployment & Tools": [
    "Render",
    "Cloudinary",
    "Multer",
    "Git & GitHub"
  ]
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section className="relative py-28 border-t border-white/5 overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] 
                        bg-[var(--color-hunter)] 
                        opacity-10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

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
            Skills
          </motion.h2>

          {/* Soft Panel Container */}
          <motion.div
            variants={itemVariants}
            className="mt-14 bg-white/5 border border-white/10 
                       rounded-2xl p-12 backdrop-blur-sm"
          >
            <div className="space-y-14">

              {Object.entries(categories).map(([category, skills], index) => (
                <div key={index}>

                  <h3 className="text-2xl font-medium text-white mb-6 tracking-wide">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-lg">
                    {skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.06 }}
                        className="px-5 py-2 rounded-lg
                                   bg-white/5 border border-white/10
                                   text-slate-300 text-lg
                                   transition-all duration-300
                                   hover:border-[var(--color-hunter)]
                                   hover:shadow-[0_0_20px_rgba(27,67,50,0.35)]"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>

                </div>
              ))}

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
