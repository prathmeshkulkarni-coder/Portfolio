const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Subtle green glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] 
                      bg-[var(--color-hunter)] opacity-15 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
            <h2 className="mt-6 text-2xl md:text-3xl text-slate-300">
            Hi I'm,
          </h2>
          <h1 className="text-6xl md:text-7xl font-extrabold text-[var(--color-highlight)] tracking-tight">
            Prathmesh Kulkarni
          </h1>

          <div className="h-[2px] w-16 bg-[var(--color-hunter)] mt-6" />

          <h2 className="mt-6 text-4xl md:text-3xl text-slate-300">
            Backend Engineer (MERN Stack)
          </h2>

          <p className="mt-6 text-slate-400 max-w-xl leading-relaxed text-lg">
            I design and build structured, secure, production-ready web systems 
            with strong backend architecture and clean API design.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-[var(--color-hunter)] px-8 py-3 rounded-md hover:opacity-90 transition">
              View Project
            </button>

            <button className="border border-[var(--color-hunter)] px-8 py-3 rounded-md hover:bg-[var(--color-hunter)]/10 transition">
              Contact
            </button>
          </div>
        </div>

        {/* RIGHT STRUCTURED CARD */}
        <div className="hidden md:block">
          <div className="relative border border-white/10 rounded-xl p-10 
                          bg-white/5 backdrop-blur-md">

            <p className="text-slate-300 uppercase text-sm tracking-widest">
              ◇ Core Strength
            </p>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li>• REST API Architecture</li>
              <li>• Role-Based Access Control</li>
              <li>• JWT Authentication</li>
              <li>• MongoDB Data Modeling</li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
