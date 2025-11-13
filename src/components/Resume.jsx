"use client"

import { Download } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl sm:text-6xl text-white font-bold">My Resume</h2>

        <p className="text-gray-400 text-lg">
          Download my resume to learn more about my professional experience, education, and achievements.
        </p>

        <div className="flex justify-center">
          <a
            href="https://drive.google.com/file/d/1dwr8447OyYeql0ATAeHKwtUeQfcRqZJT/view?usp=sharing"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <Download size={25} />
            Download Resume
          </a>
        </div>

        
      </div>
    </section>
  )
}
