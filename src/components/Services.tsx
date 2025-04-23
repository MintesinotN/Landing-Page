const services = [
    {
      title: "IoT Systems",
      description: "Connecting devices and enabling smarter environments using embedded systems and sensors.",
      icon: "📡",
    },
    {
      title: "AI & Machine Learning",
      description: "Creating intelligent solutions that learn from data and optimize performance over time.",
      icon: "🧠",
    },
    {
      title: "Robotics & Automation",
      description: "Designing and programming robotic systems for industrial and research applications.",
      icon: "🤖",
    },
    {
      title: "Power Systems",
      description: "Building and optimizing efficient power electronics and renewable energy systems.",
      icon: "⚡",
    },
    {
      title: "Low-Power Design",
      description: "Engineered for efficiency, our hardware consumes minimal power without sacrificing performance.",
      icon: "🔋",
    },
    {
      title: "Secure Communication",
      description: "End-to-end encryption and reliable protocols to protect data transmission across devices.",
      icon: "🔒",
    },
  ];
  
  export default function Services() {
    return (
      <section id="services" className="scroll-mt-16 py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Explore our areas of expertise in electrical and computer engineering.
          </p>
  
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  