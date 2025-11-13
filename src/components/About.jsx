export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl sm:text-5xl font-bold mb-12 text-center text-white">About Me</h2>

        <div className="grid md:grid-cols-2 gap-2 items-center">
          <div className="space-y-6 text-gray-300  leading-relaxed">
            <p className="text-xl">
              I'm a passionate full-stack developer with a PG Diploma in Advanced Computing from CDAC, Sunbeam Karad. I
              enjoy solving problems through clean, efficient code and building scalable web applications.
            </p>
            <p className="text-xl">
              My journey in tech has taught me the importance of combining strong technical fundamentals with a
              user-centric approach. I'm continuously learning and exploring new technologies to stay at the forefront
              of web development.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/gaurav-ingle-62a6b820a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/decodegaurav01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>


          <div className="flex flex-col items-center text-center text-gray-100">
            <div >

              <img
                src="/Gemini_Generated_Image_xvme0oxvme0oxvme-removebg-preview.png"
                alt="Gaurav Ingle Profile Picture"
                className="w-full h-70 object-cover rounded-full shadow-md mb-4  bg-gray-900"
              />

              <h3 className="text-2xl font-bold text-white">Gaurav Ingle</h3>

              <p className="text-lg font-medium text-gray-300 mb-5">
                Full-Stack Developer
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}