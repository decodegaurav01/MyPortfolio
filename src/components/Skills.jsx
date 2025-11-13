

export default function Skills() {
    const skillCategories = [
        {
            category: "Languages",
            skills: ["Java", "C++", "JavaScript", "TypeScript"],
            color: "from-blue-500 to-blue-600",
        },
        {
            category: "Frontend",
            skills: ["React", "React Router", "Tailwind CSS", "HTML5", "CSS3"],
            color: "from-purple-500 to-purple-600",
        },
        {
            category: "Backend",
            skills: ["Spring Boot", "Node.js", "Express", "RESTful APIs"],
            color: "from-pink-500 to-pink-600",
        },
        {
            category: "Databases",
            skills: ["MySQL","PostgreSQL", "MongoDB"],
            color: "from-cyan-500 to-cyan-600",
        },
        {
            category: "Tools",
            skills: ["Git", "Postman", "VS Code", "Eclipse"],
            color: "from-orange-500 to-orange-600",
        },
        {
            category: "Stack",
            skills: ["MERN", "Java + Spring Boot", "Full-Stack Web Apps"],
            color: "from-green-500 to-green-600",
        },
    ]

    return (
        <section id="skills" className="py-20 px-4 bg-gray-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl text-white font-bold mb-12 text-center">Skills & Expertise</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category) => (
                        <div
                            key={category.category}
                            className="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                        >
                            <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-gray-800 text-gray-300 text-lg rounded-full group-hover:bg-gray-700 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
