
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail, Phone, MapPin, ExternalLink, Download, Send } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-900">Harshitha Gummadi</h1>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-gray-600 mt-1">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:harshitha9407@gmail.com" className="hover:text-blue-600">harshitha9407@gmail.com</a>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>+91 6304707471</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/harshitha-gummadi/" target="_blank" rel="noopener noreferrer" 
                 className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors">
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
              <a href="https://github.com/Harshitha9407" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                <Github className="w-5 h-5 text-gray-700" />
              </a>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                <img 
                  src="/lovable-uploads/4c8c63ec-9e48-418a-9eff-7d132dc61db2.png" 
                  alt="Harshitha Gummadi" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/4c8c63ec-9e48-418a-9eff-7d132dc61db2.png" 
              alt="Harshitha Gummadi" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Aspiring Software Engineer
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Full-Stack Developer | Java & Spring Boot Enthusiast
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-3 rounded-full">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-[120px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            {['about', 'education', 'projects', 'skills', 'certifications', 'achievements', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-600 hover:text-blue-600 font-medium capitalize transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                Aspiring software engineer with strong skills in Java and Spring Boot, and hands-on experience in full-stack 
                development. Passionate about solving real-world problems through scalable software solutions. A fast learner, 
                effective team player, and active participant in coding competitions and hackathons.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/4c8c63ec-9e48-418a-9eff-7d132dc61db2.png" 
                  alt="Harshitha Gummadi" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Education</h2>
          <div className="space-y-8">
            {[
              {
                degree: "B.Tech",
                institution: "Malla Reddy University",
                period: "2023–2027",
                score: "CGPA: 9.51"
              },
              {
                degree: "Intermediate",
                institution: "Siddarth Adarsha Junior College",
                period: "2021–2023",
                score: "Percentage: 98.7%"
              },
              {
                degree: "High School",
                institution: "Siddarth Model High School",
                period: "2020–2021",
                score: "CGPA: 10"
              }
            ].map((edu, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg">{edu.institution}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{edu.period}</div>
                      <div className="font-semibold text-blue-600">{edu.score}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Email Writer – AI-Powered Email Generation",
                description: [
                  "AI tool that creates context-aware email replies",
                  "RESTful APIs + customizable tones"
                ],
                techStack: "Java, Spring Boot, REST API, Gemini API"
              },
              {
                title: "Disaster Prediction and Early Warning System",
                description: [
                  "ML risk engine for earthquakes/cyclones",
                  "Multi-channel alerts via email & WhatsApp",
                  "Celery & Redis for async alerts"
                ],
                techStack: "Python, Scikit-learn, Celery, Redis, PostgreSQL, HTML, CSS, JS, NOAA API, Twilio"
              }
            ].map((project, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {project.description.map((point, i) => (
                      <li key={i} className="text-gray-700">• {point}</li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <strong className="text-sm text-gray-600">Tech Stack: </strong>
                    <span className="text-sm text-gray-700">{project.techStack}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Skills</h2>
          <div className="space-y-8">
            {[
              {
                category: "Languages",
                skills: ["Java", "Python", "HTML", "CSS", "JavaScript"]
              },
              {
                category: "Frameworks",
                skills: ["Spring Boot", "Spring MVC", "Spring Security", "Bootstrap", "React"]
              },
              {
                category: "Databases",
                skills: ["MySQL", "MongoDB", "PostgreSQL"]
              },
              {
                category: "Tools",
                skills: ["Git", "GitHub", "REST APIs", "Hibernate", "JPA"]
              },
              {
                category: "Soft Skills",
                skills: ["Problem Solving", "Communication", "Teamwork", "Leadership", "Adaptability"]
              }
            ].map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Oracle Java Foundation",
                date: "Jan 2024"
              },
              {
                title: "HackerRank Python (Basic)",
                date: "March 2024"
              }
            ].map((cert, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Achievements & Awards</h2>
          <div className="space-y-6">
            {[
              "1st Prize – Technical Quiz, Malla Reddy University",
              "Yukthi Hackathon (AgriTech Domain), BVRIT",
              "Runner-up – HackSavvy 2025, MGIT Hyderabad"
            ].map((achievement, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="pt-6">
                  <p className="text-lg text-gray-700">🏆 {achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Contact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:harshitha9407@gmail.com" className="text-gray-700 hover:text-blue-600">
                    harshitha9407@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <a href="https://www.linkedin.com/in/harshitha-gummadi/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-gray-600" />
                  <a href="https://github.com/Harshitha9407" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.linkedin.com/in/harshitha-gummadi/" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Harshitha9407" target="_blank" rel="noopener noreferrer"
               className="hover:text-gray-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:harshitha9407@gmail.com"
               className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2025 Harshitha Gummadi – All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
