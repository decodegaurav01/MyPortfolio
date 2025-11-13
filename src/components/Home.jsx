export function Home() {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 bg-linear-to-br from-gray-950 via-gray-900 to-gray-950">
                <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
                    <div className="space-y-5">
                        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-gray-100">
                            Hi, I'm{" "}
                            <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Gaurav Ingle
                            </span>
                        </h1>
                        <p className="text-2xl sm:text-4xl text-gray-400 font-light">
                            Full-Stack Developer | Java | Spring Boot | React | MySQL
                        </p>
                    </div>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        I build scalable web applications with clean, efficient code. From backend systems to responsive frontends, I
                        craft solutions that matter.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <a href="#about" className="text-gray-400 hover:text-purple-500 transition-colors">
                            {/* <ChevronDown size={32} /> */}
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}