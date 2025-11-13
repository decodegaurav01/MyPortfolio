"use client"

import { Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Travel Management System",
      subtitle: "CDAC Project",
      description:
        "A comprehensive RedBus-like system for bus booking and tracking. Features real-time booking, payment integration, and journey tracking.",
      tech: ["Java", "Spring Boot", "React", "MySQL"],
      github: "https://github.com/theakshayrathod/TravelManagementSystem.git",
      features: ["Bus booking system", "Real-time tracking", "Payment gateway", "User authentication"],
    },
    {
      title: "Employee Data Management System",
      subtitle: "CRUD Application",
      description:
        "A full-stack application for managing employee details with comprehensive CRUD operations, role-based access, and reporting features.",
      tech: ["Node.js", "Express", "React", "MySQL", "JWT"],
      github: "https://github.com/decodegaurav01/employee-data-management.git",
      features: ["Employee management", "Role-based access", "Data reports", "Export functionality"],
    },
    {
      title: "Blogs Management System",
      subtitle: "Hackathon Project",
      description:
        "A modern MERN-based web application for blog posting, management, and discovery. Features rich text editing, comments, and user profiles.",
      tech: ["MySql", "Express", "React", "Node.js"],
      github: "https://github.com",
      features: ["Blog creation", "User comments", "Search & filters", "User profiles"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white">Featured Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 border border-gray-800 rounded-lg p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-purple-400 text-lg  font-semibold">{project.subtitle}</p>
                </div>

                <p className="text-gray-400 leading-relaxed text-lg">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-lg rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 py-4 border-t border-gray-800">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-lg text-gray-300">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 items">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Github size={25} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
