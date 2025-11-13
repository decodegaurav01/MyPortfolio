"use client"

export default function Education() {
  const educationData = [
    {
      degree: "Diploma in Advanced Computing (CDAC)",
      institution: "Sunbeam",
      date: "Feb 2025 - Aug 2025",
      percentage: "70.50%",
      icon: "🎓",
    },
    {
      degree: "B.E. Mechanical Engineering",
      institution: "Yeshwantrao Chanvan College of Engineering",
      date: "2024",
      percentage: "66.99%",
      icon: "⚙️",
    },
    {
      degree: "HSC (Class XII)",
      institution: "S.E.S. High School",
      date: "2019",
      percentage: "69.07%",
      icon: "📚",
    },
    {
      degree: "SSC (Class X)",
      institution: "S.E.S. High School",
      date: "2017",
      percentage: "86.80%",
      icon: "📖",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl sm:text-5xl text-white font-bold mb-12 text-center">Education</h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-6 border border-purple-500/30 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0 mt-1">{edu.icon}</div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
                    <span className="text-sm text-purple-300 font-medium">{edu.date}</span>
                  </div>

                  <p className="text-gray-300 mb-3">{edu.institution}</p>

                  <div className="flex items-center gap-2">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-grow max-w-xs"></div>
                    <span className="text-sm font-semibold text-gray-300">{edu.percentage}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
