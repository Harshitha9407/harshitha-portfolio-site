
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail, Phone, MapPin, ExternalLink, Download, Send, GraduationCap, Award, Code } from 'lucide-react';
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

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume PDF to the public folder
    link.download = 'Harshitha_Gummadi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: "Your resume download has started!",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-600">
              Harshitha <span className="text-blue-500">Gummadi</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Education', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Harshitha<br />
                <span className="text-indigo-600">Gummadi</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4">Java & Full Stack Developer</p>
              <p className="text-lg text-blue-600 font-medium mb-8">
                Building impactful solutions using Java and Spring Boot.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Passionate about creating efficient, user-friendly applications with
                a keen interest in backend development and problem solving.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={handleDownloadResume}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-blue-100 shadow-2xl">
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

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-indigo-600 mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm Harshitha Gummadi, a driven and enthusiastic Java and Full Stack Developer with a
                strong foundation in both frontend and backend technologies. Currently pursuing my
                B.Tech with an impressive 9.51 CGPA, I balance academic excellence with hands-on project
                development to continuously expand my technical expertise.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                My passion lies in building efficient, user-friendly applications that solve real-world
                problems. With expertise in Java, Spring Boot, and modern web technologies, I enjoy the
                challenge of transforming ideas into functional, elegant solutions. I'm particularly interested
                in creating seamless user experiences while ensuring robust backend architectures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, solving coding challenges,
                listening to music, and cooking. I'm always eager to learn and grow, both as a developer
                and as a person.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">Education</h3>
                <p className="text-gray-700">B.Tech at Malla Reddy University with 9.51 CGPA</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">Experience</h3>
                <p className="text-gray-700">Building real-world projects like Email Writer, Code Editor, and Quick Chat</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">Interests</h3>
                <p className="text-gray-700">Coding, Problem Solving, Exploring New Technologies, Music, Cooking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Projects</h2>
          <div className="w-16 h-1 bg-indigo-600 mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              <CardHeader className="text-center py-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-indigo-600">Email Writer - AI-Powered Email Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Developed an AI-powered email generation tool that creates context-aware replies. Implemented
                  RESTful APIs for seamless integration with external applications. Enabled customizable email
                  tones to match different communication styles.
                </p>
                <div className="mb-4">
                  <strong className="text-sm font-semibold">Tech Stack:</strong>
                  <p className="text-sm text-gray-600">Java, Spring Boot, REST API, OpenAI/Gemini API</p>
                </div>
                <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-50">
                  View on GitHub →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-orange-400 to-red-400"></div>
              <CardHeader className="text-center py-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-indigo-600">Disaster Prediction and Early Warning System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Developed an Early Warning System featuring an ML-powered risk detection engine for cyclones and
                  earthquakes. Implemented a multi-channel alert system (email and WhatsApp) with location-based user
                  subscriptions and detailed safety advisories. Utilized Celery with Redis for asynchronous task processing.
                </p>
                <div className="mb-4">
                  <strong className="text-sm font-semibold">Tech Stack:</strong>
                  <p className="text-sm text-gray-600">Python, Scikit-learn, Celery, Redis, PostgreSQL, HTML, CSS, JavaScript, NOAA API, Twilio</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full text-blue-600 border-blue-600 hover:bg-blue-50"
                  onClick={() => window.open('https://github.com/PhantomChillz/DisasterPredictionSystem', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on GitHub →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-green-400 to-teal-400"></div>
              <CardHeader className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-indigo-600">Quick Chat - RealTime Chat App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Developed a real-time chat application enabling instant messaging with a seamless user
                  experience. Implemented full-duplex communication using Web Sockets and STOMP
                  protocol for instant messaging. Built an interactive chat UI using React/JavaScript and connected it to
                  the backend for real-time updates. Used JWT authentication and Spring Security to ensure
                  secure user communication.
                </p>
                <div className="mb-4">
                  <strong className="text-sm font-semibold">Tech Stack:</strong>
                  <p className="text-sm text-gray-600">React, JavaScript, Spring Boot, WebSockets, JWT, Spring Security</p>
                </div>
                <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-50">
                  View on GitHub →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Skills</h2>
          <div className="w-16 h-1 bg-indigo-600 mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-8">Technical Skills</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">Java</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">Python</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Frontend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">HTML</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">CSS</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">JavaScript</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">React</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">Bootstrap</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Backend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">Spring Boot</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">Spring</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">Spring Security</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">Spring MVC</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Database Management</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">MySQL</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">MongoDB</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">Hibernate & JPA</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Version Control & Dev Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">GitHub</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-8">Soft Skills</h3>
              <div className="flex flex-wrap gap-3 mb-12">
                <Badge className="bg-indigo-100 text-indigo-700 px-4 py-2">Critical Thinking</Badge>
                <Badge className="bg-indigo-100 text-indigo-700 px-4 py-2">Adaptability</Badge>
                <Badge className="bg-indigo-100 text-indigo-700 px-4 py-2">Problem-Solving</Badge>
                <Badge className="bg-indigo-100 text-indigo-700 px-4 py-2">Communication</Badge>
                <Badge className="bg-indigo-100 text-indigo-700 px-4 py-2">Time Management</Badge>
              </div>
              
              <h3 className="text-2xl font-semibold text-indigo-600 mb-8">What I Do</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Backend Development</h4>
                  <p className="text-sm text-gray-600">Building robust and scalable server-side applications with Java & Spring Boot</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Frontend Development</h4>
                  <p className="text-sm text-gray-600">Creating responsive and interactive user interfaces with modern web technologies</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Database Design</h4>
                  <p className="text-sm text-gray-600">Designing efficient database schemas and implementing data access layers</p>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Problem Solving</h4>
                  <p className="text-sm text-gray-600">Solving complex technical challenges with algorithmic thinking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Education & Certifications</h2>
          <div className="w-16 h-1 bg-indigo-600 mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-8">Education</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-indigo-600">Bachelor of Technology (B. Tech)</h4>
                      <span className="text-sm text-blue-600 font-medium">2023-2027</span>
                    </div>
                    <p className="text-gray-600 mb-1">Malla Reddy University, Hyderabad (Telangana)</p>
                    <p className="text-blue-600 font-semibold">CGPA: 9.51</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-indigo-600">Intermediate</h4>
                      <span className="text-sm text-blue-600 font-medium">2021-2023</span>
                    </div>
                    <p className="text-gray-600 mb-1">Siddarth Adarsha Junior College, Medak (Telangana)</p>
                    <p className="text-blue-600 font-semibold">Percentage: 98.7</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-indigo-600">High School</h4>
                      <span className="text-sm text-blue-600 font-medium">2020-2021</span>
                    </div>
                    <p className="text-gray-600 mb-1">Siddarth Model High School, Medak (Telangana)</p>
                    <p className="text-blue-600 font-semibold">GPA: 10</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-8">Certifications</h3>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-indigo-600">Oracle Java Foundation</h4>
                        <p className="text-gray-600">Issued by Oracle</p>
                        <Button variant="outline" className="mt-3 text-blue-600 border-blue-600 hover:bg-blue-50">
                          View Credentials
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-indigo-600">HackerRank Python (Basic)</h4>
                        <p className="text-gray-600">Issued by HackerRank</p>
                        <Button variant="outline" className="mt-3 text-blue-600 border-blue-600 hover:bg-blue-50">
                          View Credentials
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Achievements & Awards</h2>
          <div className="w-16 h-1 bg-indigo-600 mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
              <div className="h-2 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-600">1st Prize, Technical Quiz Event</h3>
                    <p className="text-gray-600 mb-1">MallaReddy University</p>
                    <span className="text-sm text-gray-500">January 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-600">TechSurge Event</h3>
                    <p className="text-gray-600 mb-1">Participated in Yukthi Hackathon (AgriTech Domain), hosted by Coding Brigade, BVRIT</p>
                    <span className="text-sm text-gray-500">May 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-teal-50 border-green-200">
              <div className="h-2 bg-gradient-to-r from-green-400 to-teal-400"></div>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-600">Coding Challenges</h3>
                    <p className="text-gray-600 mb-1">Completed 100+ coding challenges on LeetCode & CodeChef focusing on Data Structures & Algorithms.</p>
                    <span className="text-sm text-gray-500">Ongoing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-600">Hacksavvy 25</h3>
                    <p className="text-gray-600 mb-1">Won second prize in Hacksavvy 25 at MGIT Hackathon.</p>
                    <span className="text-sm text-gray-500">2023</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-8">Interests & Hobbies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-indigo-100 text-indigo-700 px-6 py-3 text-base">Coding & Problem Solving</Badge>
              <Badge className="bg-indigo-100 text-indigo-700 px-6 py-3 text-base">Exploring New Technologies</Badge>
              <Badge className="bg-indigo-100 text-indigo-700 px-6 py-3 text-base">Music</Badge>
              <Badge className="bg-indigo-100 text-indigo-700 px-6 py-3 text-base">Cooking</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Contact Me</h2>
          <div className="w-16 h-1 bg-indigo-600 mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to me through any of the following channels. I'm always open to discussing
                new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">Email</div>
                    <a href="mailto:harshitha9407@gmail.com" className="text-blue-600 hover:underline">
                      harshitha9407@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">Phone</div>
                    <span className="text-blue-600">+91 6304707471</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">LinkedIn</div>
                    <span className="text-blue-600">harshitha-gummadi</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Github className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">GitHub</div>
                    <span className="text-blue-600">Harshitha9407</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-indigo-600 mb-4">Languages</h4>
                <p className="text-gray-600">English, Telugu</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="border-gray-300 focus:border-blue-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="border-gray-300 focus:border-blue-500"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="border-gray-300 focus:border-blue-500"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Harshitha <span className="text-blue-300">Gummadi</span>
              </h3>
              <p className="text-indigo-200 mb-4">
                A passionate Java and Full Stack Developer building creative and efficient solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Harshitha9407" target="_blank" rel="noopener noreferrer"
                   className="text-indigo-200 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/harshitha-gummadi/" target="_blank" rel="noopener noreferrer"
                   className="text-indigo-200 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:harshitha9407@gmail.com"
                   className="text-indigo-200 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Skills', 'Education', 'Achievements', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-indigo-200 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-indigo-200">
                <p>Hyderabad, Telangana</p>
                <p>harshitha9407@gmail.com</p>
                <p>+91 6304707471</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-indigo-500 mt-8 pt-8 text-center text-indigo-200">
            <p>© 2025 Harshitha Gummadi – All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
