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
  hidden: { opacity: 0, scale: 0.97 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 border-t border-white/5">

      <div className="max-w-6xl mx-auto px-6">

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
            Featured Project
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="mt-6 text-4xl font-semibold text-white"
          >
            ShopX — Production-Ready E-Commerce System
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-slate-400 max-w-3xl text-2xl"
          >
            Full-stack e-commerce platform built with secure authentication,
            role-based access, and production deployment handling.
          </motion.p>

          {/* CARDS GRID */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <div className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-sm">
              <h4 className="text-[var(--color-highlight)] font-medium text-xl">
                Production Challenge
              </h4>
              <p className="mt-4 text-slate-400 text-lg leading-relaxed">
                Resolved third-party cookie issues when deploying frontend and
                backend separately. Re-architected deployment to serve frontend
                from backend <code>dist</code> build.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-sm">
              <h4 className="text-[var(--color-highlight)] font-medium text-xl">
                Security & Architecture
              </h4>
              <ul className="mt-4 space-y-2 text-slate-400 text-lg">
                <li>✔ bcrypt password hashing</li>
                <li>✔ JWT via HTTP-only cookies</li>
                <li>✔ Role-based access control</li>
                <li>✔ Custom ApiError handling</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-sm">
              <h4 className="text-[var(--color-highlight)] font-medium text-xl">
                Deployment & Integration
              </h4>
              <ul className="mt-4 space-y-2 text-slate-400 text-lg">
                <li>✔ Full-stack on Render</li>
                <li>✔ CORS + credential config</li>
                <li>✔ Cloudinary image storage</li>
                <li>✔ Multer secure uploads</li>
              </ul>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex gap-6"
          >
            <a
              href="https://e-commerce-2-vgum.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-hunter)] px-8 py-3 rounded-md hover:opacity-90 transition"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/dullcoder993/E-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--color-hunter)] px-8 py-3 rounded-md hover:bg-[var(--color-hunter)]/10 transition"
            >
              GitHub
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
