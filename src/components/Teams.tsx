const teamMembers = [
    {
      name: "Mintesinot Bekele",
      role: "Full Stack Developer",
      image: "/team/mintesinot.jpg",
      linkedIn: "https://www.linkedin.com/",
    },
    {
      name: "Liya Solomon",
      role: "UI/UX Designer",
      image: "/team/liya.webp",
      linkedIn: "https://www.linkedin.com/",
    },
    {
      name: "Yonatan Tadesse",
      role: "Hardware Engineer",
      image: "/team/yonatan.webp",
      linkedIn: "https://www.linkedin.com/",
    },
  ];
  
  export default function Team() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-14">Our Creative Minds</h2>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-blue-600 text-sm hover:underline"
                >
                  LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  