import React from 'react';
import { X, Github, ExternalLink, Calendar, Users, Code2 } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  fullDescription?: string;
  features?: string[];
  challenges?: string[];
  githubUrl?: string;
  liveUrl?: string;
  duration?: string;
  teamSize?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const projectDetails = {
    project1: {
      fullDescription: "A simple and straightforward goal-tracking application designed to help you easily add and manage your daily or long-term goals. It's built to be a fast and effective tool for logging and tracking your objectives with a clean, clutter-free interface.",
      features: [
        "Quickly add new goals",
        "Display a clear list of all current goals",
        "Ability to remove completed goals",
        "Simple and intuitive user interface",
        "Local data persistence using Hive"
      ],
      challenges: [
        "Efficiently managing local state for immediate UI updates",
        "Designing a responsive and fast user interface",
        "Ensuring reliable data storage when the app is closed and reopened"
      ],
      githubUrl: "https://github.com/khaled-elbaiomy/goals-app",
      liveUrl: "#",
      duration: "2 Weeks",
      teamSize: "Solo"
    },
    project2: {
      fullDescription: "An engaging educational app for learning the basics of the Japanese language. The app focuses on commonly used words and phrases by dividing them into categories like numbers, family members, and common phrases, with audio support for each word.",
      features: [
        "Multiple categories (Numbers, Family, Phrases, Colors)",
        "Audio playback for correct pronunciation",
        "Colorful and attractive design to make learning fun",
        "Easy navigation between different sections",
        "Simple user experience suitable for beginners"
      ],
      challenges: [
        "Organizing and managing audio assets within the app",
        "Designing a user interface suitable for educational content",
        "Ensuring smooth audio playback across different devices"
      ],
      githubUrl: "https://github.com/khaled-elbaiomy/my-toku-app",
      liveUrl: "#",
      duration: "3 Weeks",
      teamSize: "Solo"
    },
    project3: {
      fullDescription: "A full-featured real-time chat application built with Flutter and Firebase. It allows users to create accounts and communicate with each other instantly, providing a seamless and secure messaging experience.",
      features: [
        "User authentication (login and sign-up) via Firebase Authentication",
        "Real-time message sending and receiving",
        "Classic chat interface for displaying messages",
        "Utilizes Cloud Firestore as a NoSQL database for message storage"
      ],
      challenges: [
        "Implementing real-time messaging using Firebase Firestore Streams",
        "Managing user authentication securely",
        "Building a responsive and interactive UI for conversations"
      ],
      githubUrl: "https://github.com/khaled-elbaiomy/chat_app",
      liveUrl: "#",
      duration: "1 Month",
      teamSize: "Solo"
    },
    project4: {
      fullDescription: "A news application that displays the latest news and articles from various global sources using the News API. The app allows users to stay updated on current events and browse news by categories that interest them.",
      features: [
        "Fetches and displays articles from the News API",
        "Ability to browse news by category (Business, Tech, Sports, etc.)",
        "Clean user interface for attractively displaying articles and images",
        "Continuously updates with the latest news automatically",
        "Displays article details upon selection"
      ],
      challenges: [
        "Effectively handling API requests and managing responses",
        "Displaying complex data (images and text) in a consistent and appealing way",
        "Managing state when navigating between different news categories",
        "Handling cases where an article has no associated image"
      ],
      githubUrl: "https://github.com/khaled-elbaiomy/news-app",
      liveUrl: "#",
      duration: "1 Month",
      teamSize: "Solo"
    }
  };

  const details = projectDetails[project.id as keyof typeof projectDetails];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full p-2 transition-all"
          >
            <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.name}</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>{details?.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Users className="w-5 h-5" />
              <span>{details?.teamSize}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Code2 className="w-5 h-5" />
              <span>{project.technologies.length} Technologies</span>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {details?.fullDescription}
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {details?.features && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {details?.challenges && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technical Challenges</h3>
              <ul className="space-y-2">
                {details.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-4">
            {details?.liveUrl && details.liveUrl !== '#' && (
              <a
                href={details.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
            {details?.githubUrl && (
              <a
                href={details.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-300 hover:bg-blue-50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:bg-gray-700 transition-all"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;