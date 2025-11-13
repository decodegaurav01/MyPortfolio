import emailjs from "@emailjs/browser"


import { useState } from "react"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = () => {
        const { name, value } = event.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }



    const handleSubmit = (event) => {
        event.preventDefault()

        emailjs
            .send(
                "service_armwazs",      // replace with your EmailJS service ID
                "template_p731gfa",     // replace with your template ID
                formData,               // your form data
                "3TKg3R3zQk9F-DV5H"       // replace with your public key
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text)
                    alert("✅ Thank you for your message! I’ll get back to you soon.")
                    setFormData({ name: "", email: "", message: "" })
                },
                (error) => {
                    console.log("Email sending failed:", error.text)
                    alert("❌ Something went wrong. Please try again later.")
                }
            )
    }


    return (
        <section id="contact" className="py-20 px-4 bg-gray-900/50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl text-white sm:text-5xl font-bold mb-12 text-center">Get In Touch</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block  font-medium mb-2 text-gray-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block  font-medium mb-2 text-gray-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block  font-medium mb-2 text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Links */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl  font-semibold mb-6 text-white">Connect With Me</h3>
                            <p className="text-gray-400 mb-8">
                                Feel free to reach out through any of these channels. I'm always happy to connect and discuss new
                                opportunities or ideas.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a
                                href="mailto:gaurav@example.com"
                                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                            >
                                <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                                    <Mail className="text-blue-400" size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold  text-white">Email</p>
                                    <p className="text-gray-400 text-lg">ingle.gaurav002@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/gaurav-ingle-62a6b820a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                            >
                                <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                                    <Linkedin className="text-blue-400" size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold  text-white">LinkedIn</p>
                                    <p className="text-gray-400 text-lg">Gaurav Ingle</p>
                                </div>
                            </a>

                            <a
                                href="https://github.com/decodegaurav01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                            >
                                <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                                    <Github className="text-purple-400" size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold  text-white">GitHub</p>
                                    <p className="text-gray-400 text-lg">Gaurav Ingle</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
