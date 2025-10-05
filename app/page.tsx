export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Muhammad Abu Bakar</h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition">Education</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">Skills</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Hi, I&apos;m <span className="text-blue-600">Muhammad Abu Bakar</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          ML Engineer | AI Enthusiast | MSDS Student at ITU Lahore
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View My Work
          </a>
          <a href="#contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            I am a passionate Machine Learning Engineer and AI enthusiast currently pursuing MSDS at 
            Information Technology University (ITU) Lahore. I completed my BSEE from ITU with Dean&apos;s Honor Letter 
            in my last semester. My focus is on developing efficient AI solutions for real-world problems.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Education</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">MS in Data Science</h3>
            <p className="text-blue-600 mb-2">Information Technology University (ITU), Lahore</p>
            <p className="text-gray-600">Current Student</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">BSc in Electrical Engineering</h3>
            <p className="text-blue-600 mb-2">Information Technology University (ITU), Lahore</p>
            <p className="text-gray-600">Graduated with Dean&apos;s Honor Letter</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Cloud Applied Gen AI Engineer</h3>
            <p className="text-blue-600 mb-2">PIAIC</p>
            <p className="text-gray-600">Completed Certification</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Projects</h2>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            AI-Based Portable Video Analytics on Low-Powered Devices
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Developed an efficient computer vision system optimized for low-powered devices, enabling 
            real-time video analytics with minimal computational resources. The project focuses on 
            model optimization and edge computing for practical AI deployment.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Machine Learning & AI</li>
              <li>• SQL & Database Management</li>
              <li>• Python Programming</li>
              <li>• Cloud Computing</li>
              <li>• Generative AI</li>
              <li>• SDK Agents AI (Level 1 & 2 Certified)</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Domains</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Machine Learning Engineering</li>
              <li>• AI Model Optimization</li>
              <li>• Edge Computing</li>
              <li>• Computer Vision</li>
              <li>• Data Science</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <p className="text-lg text-gray-600 mb-6">
            I&apos;m always interested in new opportunities and collaborations in the AI/ML domain.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Email:</strong> your-email@example.com
            </p>
            <p className="text-gray-700">
              <strong>Education:</strong> Information Technology University, Lahore
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Muhammad Abu Bakar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}