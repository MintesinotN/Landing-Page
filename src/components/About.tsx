export default function About() {
  return (
    <section id="about" className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">About Us</h2>

        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          <div className="flex-shrink-0 w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="/team-members.png"
              alt="Team"
              className="block sm:hidden w-full h-full object-cover rounded-lg shadow-lg"
            />
            {/* Image for sm and up */}
            <img
              src="/team-members-lg.png"
              alt="Team"
              className="hidden sm:block w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2 text-gray-800 space-y-6">
            <p className="text-lg leading-relaxed">
              We are a passionate team dedicated to building cutting-edge
              products that empower people to achieve their goals. With diverse
              backgrounds in tech, design, and business, we strive to bring
              innovative solutions to life.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to make technology accessible and intuitive for
              everyone, helping individuals and organizations grow. We believe
              in creating experiences that inspire, engage, and deliver real
              value.
            </p>
            <p className="text-lg leading-relaxed">
              Join us as we continue to innovate, collaborate, and build a
              brighter future together.
            </p>
            <div className="mt-8">
              <p className="text-xl text-gray-800 italic font-semibold">
                "Shaping the future with technology."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
