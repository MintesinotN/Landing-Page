const blogPosts = [
    {
      title: "Top 5 Innovations in Electrical Engineering in 2025",
      excerpt: "Explore the latest cutting-edge technologies revolutionizing the world of electronics and computing.",
      image: "/blog/electrical.jpg",
      link: "",
    },
    {
      title: "Beginner’s Guide to Embedded Systems",
      excerpt: "A step-by-step guide to getting started with microcontrollers, sensors, and real-time systems.",
      image: "/blog/embedded.jpg",
      link: "",
    },
    {
      title: "The Future of IoT and AI Integration",
      excerpt: "How artificial intelligence is transforming connected devices and smart systems.",
      image: "/blog/iot-ai.jpg",
      link: "",
    },
  ];
  
  export default function Blog() {
    return (
      <section id="blog" className="scroll-mt-16 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">From Our Blog</h2>
          <p className="text-center text-gray-500 mb-12">Stay updated with trends in tech, engineering, and innovation.</p>
  
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 mb-4">{post.excerpt}</p>
                  <a href={post.link} className="text-blue-600 hover:underline font-medium">
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  