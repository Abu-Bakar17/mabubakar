import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">Abu Bakar</div>
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-all duration-300">About</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-all duration-300">Projects</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition-all duration-300">Education</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-all duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Professional Style */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Profile Image */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
   
                  
                  <Image 
                    src="/profile.jpg" 
                    alt="Muhammad Abu Bakar"
                    width={240}
                    height={240}
                    className="rounded-full object-cover w-60 h-60"
                    priority
                  />
      
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Available for work
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="lg:col-span-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Muhammad <span className="text-blue-600">Abu Bakar</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Machine Learning Engineer & AI Researcher passionate about building 
                intelligent systems that solve real-world problems. Currently pursuing 
                MS in Data Science at ITU Lahore.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium">
                  View My Work
                </a>
                <a href="#contact" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-medium">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a passionate Machine Learning Engineer with a strong foundation in electrical engineering 
              and data science. My journey began at Information Technology University (ITU) Lahore, where 
              I earned my BSEE with Dean&apos;s Honor Letter and continue to pursue MS in Data Science.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My expertise lies in developing efficient AI solutions for low-powered devices, with practical 
              experience in computer vision, model optimization, and edge computing. I am certified in 
              Cloud Applied Generative AI from PIAIC and have completed SDK Agents AI levels 1 & 2.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">AI Video Analytics Demo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Portable Video Analytics on Low-Powered Devices</h3>
                <p className="text-gray-600 mb-4">
                  Developed an efficient computer vision system optimized for edge devices, enabling 
                  real-time video analytics with minimal computational resources.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">OpenCV</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Edge Computing</span>
                </div>
              </div>
            </div>

            {/* Project 2 - You can add more */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">ML Research</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Machine Learning Research Projects</h3>
                <p className="text-gray-600 mb-4">
                  Various machine learning projects focusing on model optimization, data analysis, 
                  and implementing state-of-the-art AI research papers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">PyTorch</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Scikit-learn</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Data Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">MS in Data Science</h3>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Current</span>
              </div>
              <p className="text-blue-600 font-medium mb-2">Information Technology University (ITU), Lahore</p>
              <p className="text-gray-600">Focus on Machine Learning, Deep Learning, and Data Analytics</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">BS in Electrical Engineering</h3>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Graduated</span>
              </div>
              <p className="text-blue-600 font-medium mb-2">Information Technology University (ITU), Lahore</p>
              <p className="text-gray-600">Dean&apos;s Honor Letter In Last Semester </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Applied Generative AI Engineer</h3>
              <p className="text-blue-600 font-medium mb-2">PIAIC - Presidential Initiative for AI & Computing</p>
              <p className="text-gray-600">Certified in Cloud Computing and Generative AI technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Machine Learning & AI</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm">Python</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm">TensorFlow</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm">PyTorch</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm">OpenCV</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data & Databases</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm">SQL</span>
                  <span className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm">Pandas</span>
                  <span className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm">NumPy</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloud & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-sm">Git</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-sm">Docker</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-sm">AWS</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Domains</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-sm">Computer Vision</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-sm">Edge AI</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-sm">Generative AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities, research collaborations, 
            and challenging projects in the AI/ML domain.
          </p>
          <div className="space-y-4 text-lg">
            <p>📧 <strong>Email:</strong> elec.engg.itu@gmail.com</p>
            <p>🎓 <strong>Education:</strong> Information Technology University, Lahore</p>
            <p>📍 <strong>Location:</strong> Lahore, Pakistan</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Muhammad Abu Bakar. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Built with Next.js and deployed on Vercel</p>
        </div>
      </footer>
    </main>
  )
}