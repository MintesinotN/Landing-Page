export default function Hero() {
    return (
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/TechHomepage.png')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-60"></div>
        <div className="py-4 bg-black/15 relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Empowering Innovation through Tech
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Join the revolution where electrical engineering meets the digital world.
          </p>
          <button className="hover:cursor-pointer border-2 mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg ">
            Get Started
          </button>
        </div>
      </section>
    );
  }
  