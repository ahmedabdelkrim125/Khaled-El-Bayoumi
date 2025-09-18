import React, { useState } from 'react';
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code,
    Smartphone,
    Download,
    MapPin,
    Calendar,
    GraduationCap,
    Moon,
    Sun,
    MessageCircle,
    Phone
} from 'lucide-react';
import ProjectModal from './components/ProjectModal';
import { useDarkMode } from './hooks/useDarkMode';

import goalsAppImage from './images/goals App.png';
import tokuAppImage from './images/toku app.png';
import chatAppImage from './images/chat App.png';
import newsAppImage from './images/News App.png';


function App() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [projectImages, setProjectImages] = useState({
        project1: goalsAppImage,
        project2: tokuAppImage,
        project3: chatAppImage,
        project4: newsAppImage
    });

    const projects = [
        {
            id: 'project1',
            name: 'goals App',
            description: 'تطبيق بسيط لتتبع الأهداف يساعدك على إضافة وإدارة أهدافك الشخصية أو أهداف مشاريعك. تتبع تقدمك بواجهة نظيفة وسهلة الاستخدام.',
            technologies: ['Flutter', 'Dart', 'Hive'],
            image: projectImages.project1,
            githubUrl: 'https://github.com/khaled-elbaiomy/goals-app',
            liveUrl: '#'
        },
        {
            id: 'project2',
            name: 'Toku App',
            description: 'تطبيق لتعلم اللغة اليابانية، يساعدك على تعلم الأرقام، أفراد العائلة، العبارات الأساسية، والألوان مع نطق صوتي لكل كلمة.',
            technologies: ['Flutter', 'Dart', 'Audioplayers'],
            image: projectImages.project2,
            githubUrl: 'https://github.com/khaled-elbaiomy/my-toku-app',
            liveUrl: '#'
        },
        {
            id: 'project3',
            name: 'Scholar Chat App',
            description: 'تطبيق محادثة فوري متكامل مع نظام تسجيل دخول وإنشاء حسابات، مبني باستخدام Firebase لإرسال واستقبال الرسائل في الوقت الفعلي.',
            technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
            image: projectImages.project3,
            githubUrl: 'https://github.com/khaled-elbaiomy/chat_app',
            liveUrl: '#'
        },
        {
            id: 'project4',
            name: 'News Cloud App',
            description: 'تطبيق إخباري يعرض آخر الأخبار من مصادر عالمية مختلفة مع إمكانية تصفح الأخبار حسب الفئات مثل الأعمال والترفيه والرياضة.',
            technologies: ['Flutter', 'Dart', 'Dio', 'News API'],
            image: projectImages.project4,
            githubUrl: 'https://github.com/khaled-elbaiomy/news-app',
            liveUrl: '#'
        }
    ];

    const openProjectModal = (project: any) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeProjectModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'
    }`}>
            <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gray-900/90 backdrop-blur-md border-gray-700'
          : 'bg-white/90 backdrop-blur-md border-gray-200'
      }`}>
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent`}>
                            Khaled El-Bayoumi
                        </div>
                        <div className="flex items-center space-x-8">
                            <div className="hidden md:flex space-x-8">
                                <a href="#about" className={`font-medium transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}>About</a>
                                <a href="#projects" className={`font-medium transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}>Projects</a>
                                <a href="#contact" className={`font-medium transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}>Contact</a>
                            </div>
                            <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="pt-24 pb-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Smartphone className="w-4 h-4" />
                                Flutter Developer
                            </div>
                            <h1 className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Khaled</span>
                            </h1>
                            <p className={`text-xl mb-8 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                                A passionate Flutter Developer specializing in building beautiful, high-performance mobile applications
                                with professional UI design and exceptional user experiences.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
                >
                                    <Code className="w-5 h-5" />
                                    View My Work
                                </a>
                                <a
                  href="/Khaled Kamal Elbaiomy CV .pdf"
                  download
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 transition-all ${
                    isDarkMode
                      ? 'bg-gray-800 text-gray-200 border-gray-600 hover:border-blue-400 hover:bg-blue-900/20'
                      : 'bg-white text-gray-800 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                                    <Download className="w-5 h-5" />
                                    Download CV
                                </a>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl ring-8 ring-white">
                                    <img
                    src="/IMG_8774.jpg"
                    alt="Khaled El-Bayoumi"
                    className="w-full h-full object-cover"
                  />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                                    <Smartphone className="w-12 h-12 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>About Me</h2>
                        <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
                            Dedicated to crafting exceptional mobile experiences through clean code and innovative design
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? 'bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-blue-800'
                  : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100'
              }`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <GraduationCap className="w-6 h-6 text-blue-600" />
                                    <h3 className={`text-xl font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Education</h3>
                                </div>
                                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                                    Computer Science graduate with a strong foundation in software engineering principles.
                                    Specialized in mobile application development with focus on cross-platform solutions.
                                </p>
                            </div>

                            <div className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? 'bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-800'
                  : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-100'
              }`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <Code className="w-6 h-6 text-green-600" />
                                    <h3 className={`text-xl font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Experience</h3>
                                </div>
                                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                                    Fresh Flutter developer with solid expertise in Dart programming and Flutter framework.
                                    Experienced in building production-ready mobile applications with clean architecture and optimal performance.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Technical Skills</h3>
                                <div className="space-y-4">
                                    {[
                    { skill: 'Flutter & Dart', level: 90 },
                    { skill: 'Mobile App Development', level: 85 },
                    { skill: 'UI/UX Design', level: 80 },
                    { skill: 'Firebase Integration', level: 85 },
                    { skill: 'State Management', level: 80 }
                  ].map((item, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between mb-2">
                                                <span className={`font-medium ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>{item.skill}</span>
                                                <span className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>{item.level}%</span>
                                            </div>
                                            <div className={`w-full rounded-full h-2 ${
                        isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                                                <div
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.level}%` }}
                        ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className={`py-20 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-800/50 to-blue-900/50'
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}>
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Featured Projects</h2>
                        <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
                            A showcase of my mobile development work, featuring diverse applications built with Flutter
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className={`group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                isDarkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white'
              }`}>
                                <div className="relative">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className={`text-2xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{project.name}</h3>
                                    <p className={`mb-6 leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, index) => (
                                            <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                      onClick={() => openProjectModal(project)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
                    >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </button>
                                        <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-all ${
                        isDarkMode
                          ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:bg-blue-900/20'
                          : 'border-gray-300 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Let's Connect</h2>
                    <p className={`text-xl mb-12 max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
                        Ready to collaborate on your next mobile app project? Let's discuss how we can bring your ideas to life.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <a
              href="https://github.com/khaled-elbaiomy"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-gray-800 hover:to-gray-900'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-800 hover:to-gray-900'
              }`}
            >
                            <Github className={`w-10 h-10 mx-auto mb-3 transition-colors ${
                isDarkMode
                  ? 'text-gray-300 group-hover:text-white'
                  : 'text-gray-700 group-hover:text-white'
              }`} />
                            <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                isDarkMode
                  ? 'text-white group-hover:text-white'
                  : 'text-gray-900 group-hover:text-white'
              }`}>GitHub</h3>
                            <p className={`text-sm transition-colors ${
                isDarkMode
                  ? 'text-gray-400 group-hover:text-gray-300'
                  : 'text-gray-600 group-hover:text-gray-300'
              }`}>View my code</p>
                        </a>

                        <a
              href="https://www.linkedin.com/in/khaled-elbaiomy-400a3528b/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-blue-900/30 to-blue-800/30 hover:from-blue-600 hover:to-blue-700'
                  : 'bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-600 hover:to-blue-700'
              }`}
            >
                            <Linkedin className={`w-10 h-10 mx-auto mb-3 transition-colors ${
                isDarkMode
                  ? 'text-blue-400 group-hover:text-white'
                  : 'text-blue-600 group-hover:text-white'
              }`} />
                            <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                isDarkMode
                  ? 'text-white group-hover:text-white'
                  : 'text-gray-900 group-hover:text-white'
              }`}>LinkedIn</h3>
                            <p className={`text-sm transition-colors ${
                isDarkMode
                  ? 'text-gray-400 group-hover:text-blue-100'
                  : 'text-gray-600 group-hover:text-blue-100'
              }`}>Connect professionally</p>
                        </a>

                        <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Khaledk6kh5@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-red-900/30 to-red-800/30 hover:from-red-500 hover:to-red-600'
                  : 'bg-gradient-to-br from-red-50 to-red-100 hover:from-red-500 hover:to-red-600'
              }`}
            >
                            <Mail className={`w-10 h-10 mx-auto mb-3 transition-colors ${
                isDarkMode
                  ? 'text-red-400 group-hover:text-white'
                  : 'text-red-500 group-hover:text-white'
              }`} />
                            <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                isDarkMode
                  ? 'text-white group-hover:text-white'
                  : 'text-gray-900 group-hover:text-white'
              }`}>Email</h3>
                            <p className={`text-sm transition-colors ${
                isDarkMode
                  ? 'text-gray-400 group-hover:text-red-100'
                  : 'text-gray-600 group-hover:text-red-100'
              }`}>Send me a message</p>
                        </a>

                        <a
              href="https://wa.me/2001069360386"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-green-900/30 to-green-800/30 hover:from-green-500 hover:to-green-600'
                  : 'bg-gradient-to-br from-green-50 to-green-100 hover:from-green-500 hover:to-green-600'
              }`}
            >
                            <MessageCircle className={`w-10 h-10 mx-auto mb-3 transition-colors ${
                isDarkMode
                  ? 'text-green-400 group-hover:text-white'
                  : 'text-green-500 group-hover:text-white'
              }`} />
                            <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                isDarkMode
                  ? 'text-white group-hover:text-white'
                  : 'text-gray-900 group-hover:text-white'
              }`}>WhatsApp</h3>
                            <p className={`text-sm transition-colors ${
                isDarkMode
                  ? 'text-gray-400 group-hover:text-green-100'
                  : 'text-gray-600 group-hover:text-green-100'
              }`}>Chat with me</p>
                        </a>
                    </div>

                    <div className={`mb-12 p-8 rounded-2xl ${
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700'
              : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'
          }`}>
                        <h3 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Contact Information</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-full ${
                  isDarkMode ? 'bg-red-900/30' : 'bg-red-100'
                }`}>
                                    <Mail className={`w-6 h-6 ${
                    isDarkMode ? 'text-red-400' : 'text-red-600'
                  }`} />
                                </div>
                                <div className="text-left">
                                    <p className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Email</p>
                                    <p className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Khaledk6kh5@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-full ${
                  isDarkMode ? 'bg-green-900/30' : 'bg-green-100'
                }`}>
                                    <Phone className={`w-6 h-6 ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`} />
                                </div>
                                <div className="text-left">
                                    <p className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Phone / WhatsApp</p>
                                    <p className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>+20 106 936 0386</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Khaledk6kh5@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
                            <Mail className="w-6 h-6" />
                            Send Email
                        </a>
                        <a
              href="https://wa.me/2001069360386"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
                            <MessageCircle className="w-6 h-6" />
                            WhatsApp Me
                        </a>
                    </div>
                </div>
            </section>

            <footer className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Khaled Kamal Mohamed El-Bayoumi
                            </h3>
                            <p className="text-gray-400 mt-2">Flutter Developer | Mobile App Specialist</p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-4 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <span>Khaledk6kh5@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>+20 106 936 0386</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <a href="https://github.com/khaled-elbaiomy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/khaled-elbaiomy-400a3528b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Khaledk6kh5@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </a>
                            <a href="https://wa.me/2001069360386" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <MessageCircle className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Khaled El-Bayoumi. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
        </div>
    );
}

export default App;