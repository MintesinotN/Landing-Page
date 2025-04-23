const stats = [
    { label: "Projects Delivered", value: "120+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Years of Experience", value: "6+" },
    { label: "Innovations", value: "30+" },
  ];
  
  export default function Stats() {
    return (
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl font-extrabold">{stat.value}</p>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  