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
      fullDescription: "تطبيق بسيط ومباشر لتتبع الأهداف يساعدك على إضافة وإدارة أهدافك اليومية أو طويلة الأمد بسهولة. تم تصميمه ليكون أداة سريعة وفعالة لتسجيل ما تريد إنجازه ومتابعته بواجهة نظيفة وخالية من التعقيدات.",
      features: [
        "إضافة أهداف جديدة بسرعة",
        "عرض قائمة واضحة لجميع الأهداف",
        "إمكانية إزالة الأهداف عند اكتمالها",
        "واجهة مستخدم بسيطة وبديهية",
        "حفظ البيانات محليًا على الجهاز باستخدام Hive"
      ],
      challenges: [
        "إدارة الحالة المحلية للأهداف بكفاءة لضمان التحديث الفوري للواجهة",
        "تصميم واجهة مستخدم سريعة الاستجابة",
        "ضمان حفظ البيانات بشكل موثوق عند إغلاق التطبيق وإعادة فتحه"
      ],
      githubUrl: "https://github.com/khaled-elbaiomy/goals-app",
      liveUrl: "#",
      duration: "أسبوعان",
      teamSize: "فردي"
    },
    project2: {
      fullDescription: "تطبيق تعليمي ممتع لتعلم أساسيات اللغة اليابانية. يركز التطبيق على الكلمات والجمل الأكثر استخدامًا من خلال تقسيمها إلى فئات مثل الأرقام وأفراد العائلة والعبارات الشائعة، مع دعم صوتي لكل كلمة.",
      features: [
        "أقسام متعددة (أرقام، عائلة، عبارات، ألوان)",
        "تشغيل ملفات صوتية للنطق الصحيح لكل كلمة",
        "تصميم ملون وجذاب لجعل التعلم ممتعًا",
        "سهولة التنقل بين الأقسام المختلفة",
        "تجربة مستخدم بسيطة ومناسبة للمبتدئين"
      ],
      challenges: [
        "تنظيم وإدارة الملفات الصوتية داخل التطبيق",
        "تصميم واجهة مستخدم مناسبة للمحتوى التعليمي",
        "ضمان تشغيل الصوت بسلاسة على مختلف الأجهزة"
      ],
      githubUrl: "https://github.com/khaled-elbaiomy/my-toku-app",
      liveUrl: "#",
      duration: "3 أسابيع",
      teamSize: "فردي"
    },
    project3: {
      fullDescription: "تطبيق محادثة فوري متكامل مبني باستخدام Flutter و Firebase. يتيح للمستخدمين إنشاء حسابات والتواصل مع بعضهم البعض في الوقت الفعلي، مما يوفر تجربة محادثة سلسة وآمنة.",
      features: [
        "نظام مصادقة المستخدمين (تسجيل دخول وإنشاء حساب) عبر Firebase Authentication",
        "إرسال واستقبال الرسائل في الوقت الفعلي",
        "واجهة عرض الرسائل بتصميم كلاسيكي لتطبيقات المحادثة",
        "استخدام Cloud Firestore كقاعدة بيانات NoSQL لتخزين الرسائل"
      ],
      challenges: [
        "تطبيق المراسلة في الوقت الفعلي باستخدام Firebase Firestore Streams",
        "إدارة مصادقة المستخدمين بشكل آمن",
        "بناء واجهة مستخدم تفاعلية وسريعة الاستجابة للمحادثات"
      ],
      githubUrl: "https://github.com/khaled-elbaiomy/chat_app",
      liveUrl: "#",
      duration: "شهر واحد",
      teamSize: "فردي"
    },
    project4: {
      fullDescription: "تطبيق إخباري يعرض آخر الأخبار والمقالات من مصادر عالمية مختلفة باستخدام News API. يتيح التطبيق للمستخدمين البقاء على اطلاع دائم بالأحداث الجارية وتصفح الأخبار حسب الفئات التي تهمهم.",
      features: [
        "عرض الأخبار والمقالات من News API",
        "إمكانية تصفح الأخبار حسب الفئات (أعمال، تكنولوجيا، رياضة، إلخ)",
        "واجهة مستخدم نظيفة لعرض المقالات والصور بشكل جذاب",
        "تحديث مستمر لأحدث الأخبار تلقائيًا",
        "عرض تفاصيل الخبر عند الضغط عليه"
      ],
      challenges: [
        "التعامل الفعال مع طلبات API وإدارة الاستجابات",
        "عرض البيانات المعقدة (الصور والنصوص) بشكل متناسق وجذاب",
        "إدارة الحالة عند التنقل بين الفئات الإخبارية المختلفة",
        "التعامل مع حالات عدم وجود صورة للمقال"
      ],
      githubUrl: "https://github.com/khaled-elbaiomy/news-app",
      liveUrl: "#",
      duration: "شهر واحد",
      teamSize: "فردي"
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
              <span>{project.technologies.length} تقنيات</span>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {details?.fullDescription}
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">التقنيات المستخدمة</h3>
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">الميزات الرئيسية</h3>
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">التحديات التقنية</h3>
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
                عرض مباشر
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
                عرض الكود
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;