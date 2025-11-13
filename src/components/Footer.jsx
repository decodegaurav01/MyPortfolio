"use client"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-9">
          <div>
            <h3 className="font-bold text-xl mb-3 text-white">Gaurav Ingle</h3>
            <p className="text-gray-400 text-lg">
              Full-Stack Developer passionate about building scalable web applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-xl text-white">Quick Links</h4>
            <div className="space-y-2 text-lg">
              <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors block">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors block">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors block">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-xl text-white">Follow</h4>
            <div className="space-y-2 text-lg">
              <a
                href="https://github.com/decodegaurav01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors block"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/gaurav-ingle-62a6b820a/ "
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors block"
              >
                LinkedIn
              </a>
              <a
                href="mailto:ingle.gaurav002@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors block"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 Gaurav Ingle. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
