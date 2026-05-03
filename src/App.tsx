import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, Linkedin, Github, Briefcase, GraduationCap, Award, Users, Cog, ChartLine, Globe, CheckCircle, Menu, X, ChevronDown } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  skills: string[];
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const experiences: Experience[] = [
    {
      title: "Vice President",
      company: "Citi",
      period: "January 2022 - Present (4 years 5 months)",
      location: "Chennai Area, India",
      skills: ["Windows Servers", "Citrix XenApp", "Citrix XenDesktop", "VMware Horizon", "Ivanti", "Systrack"],
      color: "blue"
    },
    {
      title: "Assistant Vice President",
      company: "Citi",
      period: "September 2018 - December 2021 (3 years 4 months)",
      location: "Chennai, Tamil Nadu, India",
      skills: ["Windows Servers", "Citrix XenApp", "Citrix XenDesktop", "VMware Horizon", "Ivanti", "Systrack"],
      color: "blue"
    },
    {
      title: "Manager",
      company: "Citi",
      period: "September 2016 - August 2018 (2 years)",
      location: "Chennai Area, India",
      skills: ["Citrix XenApp", "Citrix XenDesktop", "VMware Horizon"],
      color: "blue"
    },
    {
      title: "Manager",
      company: "Citi",
      period: "February 2015 - August 2016 (1 year 7 months)",
      location: "Chennai Area, India",
      skills: ["Wintel"],
      color: "blue"
    },
    {
      title: "Associate Consultant",
      company: "HCL Technologies",
      period: "February 2013 - February 2015 (2 years 1 month)",
      skills: [],
      color: "green"
    },
    {
      title: "Lead Infrastructure Engineer",
      company: "Mphasis",
      period: "October 2008 - February 2013 (4 years 5 months)",
      location: "Chennai",
      skills: [],
      color: "purple"
    },
    {
      title: "Team Lead",
      company: "GMAC Financial Services",
      period: "October 2007 - September 2008 (1 year)",
      skills: [],
      color: "orange"
    },
    {
      title: "Desktop Engineer",
      company: "Ashok Leyland",
      period: "July 2006 - October 2007 (1 year 4 months)",
      skills: [],
      color: "orange"
    },
    {
      title: "Customer Support Engineer",
      company: "Infonet Solutions",
      period: "January 2006 - July 2006 (7 months)",
      location: "Chennai",
      skills: [],
      color: "orange"
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: "Technical Skills",
      icon: <Cog className="w-6 h-6" />,
      skills: ["Windows Server", "Citrix XenApp", "Citrix XenDesktop", "VMware Horizon", "Ivanti", "Systrack", "Wintel"],
      color: "blue"
    },
    {
      title: "IT Service Management",
      icon: <Users className="w-6 h-6" />,
      skills: ["ITIL", "IT Service Management", "Infrastructure Management", "Team Leadership", "Project Management"],
      color: "purple"
    },
    {
      title: "Certifications",
      icon: <Award className="w-6 h-6" />,
      skills: ["CCNA", "ITIL Certified"],
      color: "amber"
    },
    {
      title: "Languages",
      icon: <Globe className="w-6 h-6" />,
      skills: ["English (Fluent)"],
      color: "indigo"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Leadership", "Problem Solving", "Communication", "Strategic Planning"],
      color: "teal"
    },
    {
      title: "Industry Knowledge",
      icon: <ChartLine className="w-6 h-6" />,
      skills: ["Banking & Finance", "Financial Services", "Enterprise IT"],
      color: "emerald"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' | 'hover') => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-600',
        text: 'text-blue-600',
        border: 'border-blue-600',
        hover: 'hover:text-blue-700'
      },
      green: {
        bg: 'bg-green-600',
        text: 'text-green-600',
        border: 'border-green-600',
        hover: 'hover:text-green-700'
      },
      purple: {
        bg: 'bg-purple-600',
        text: 'text-purple-600',
        border: 'border-purple-600',
        hover: 'hover:text-purple-700'
      },
      orange: {
        bg: 'bg-orange-600',
        text: 'text-orange-600',
        border: 'border-orange-600',
        hover: 'hover:text-orange-700'
      },
      amber: {
        bg: 'bg-amber-600',
        text: 'text-amber-600',
        border: 'border-amber-600',
        hover: 'hover:text-amber-700'
      },
      indigo: {
        bg: 'bg-indigo-600',
        text: 'text-indigo-600',
        border: 'border-indigo-600',
        hover: 'hover:text-indigo-700'
      },
      teal: {
        bg: 'bg-teal-600',
        text: 'text-teal-600',
        border: 'border-teal-600',
        hover: 'hover:text-teal-700'
      },
      emerald: {
        bg: 'bg-emerald-600',
        text: 'text-emerald-600',
        border: 'border-emerald-600',
        hover: 'hover:text-emerald-700'
      }
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || colorMap.blue[type];
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
      </button>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 md:hidden"
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`flex space-x-8 ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
              <button onClick={() => scrollToSection('hero')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full flex items-center justify-center">
              <Briefcase className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Vignesh Mohanadoss
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6">
              Vice President at Citi
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
              Chennai, Tamil Nadu, India
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/rmvignesh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:rmvignesh@live.com" className="text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+919840333990" className="text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-slate-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Professional Summary
          </h2>
          <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-8 shadow-lg">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              Experienced IT professional with over 15 years of expertise in IT infrastructure management, 
              specializing in Windows Servers, Citrix technologies, and VMware solutions. Currently serving 
              as Vice President at Citi, leading enterprise-level infrastructure operations and driving 
              digital transformation initiatives. Proven track record in IT service management, 
              team leadership, and implementing robust, scalable solutions for financial services organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Professional Experience
          </h2>
          
          <div className="relative timeline-line">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card relative pl-12 pb-8">
                <div className={`absolute left-0 w-10 h-10 ${getColorClasses(exp.color, 'bg')} rounded-full flex items-center justify-center`}>
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div className={`bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border-l-4 ${getColorClasses(exp.color, 'border')}`}>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exp.title}</h3>
                  <p className={`${getColorClasses(exp.color, 'text')} font-medium mb-2`}>{exp.company}</p>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">{exp.period}</p>
                  {exp.location && <p className="text-slate-700 dark:text-slate-200 mb-2">{exp.location}</p>}
                  {exp.skills.length > 0 && (
                    <ul className="text-slate-600 dark:text-slate-300 text-sm">
                      {exp.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>• {skill}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card bg-slate-50 dark:bg-slate-700 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className={`${getColorClasses(category.color, 'text')} mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2 text-slate-700 dark:text-slate-200">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Education
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Bachelor of Technology (B.Tech.), Information Technology
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Raja College of Engg & Tech</p>
                  <p className="text-slate-600 dark:text-slate-300">2001 - 2005</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Higher Secondary Education
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">VHN Hr Sec School</p>
                  <p className="text-slate-600 dark:text-slate-300">1999 - 2001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900 dark:bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Get In Touch</h2>
          
          <div className="bg-slate-800 dark:bg-slate-800 rounded-xl p-8 shadow-xl">
            <p className="text-xl mb-8 text-slate-200">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <a href="mailto:rmvignesh@live.com" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                rmvignesh@live.com
              </a>
              <a href="tel:+919840333990" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +91 98403 33990
              </a>
              <a href="https://www.linkedin.com/in/rmvignesh" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
            </div>
            
            <div className="border-t border-slate-700 pt-6">
              <p className="text-slate-400">
                © 2024 Vignesh Mohanadoss. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
