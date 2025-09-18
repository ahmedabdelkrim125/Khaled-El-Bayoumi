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
      fullDescription: "تطبيق تجارة إلكترونية شامل مبني بـ Flutter يوفر تجربة تسوق سلسة ومتكاملة. يتضمن إدارة السلة، نظام دفع آمن، ومصادقة المستخدمين.",
      features: [
        "واجهة مستخدم حديثة وسهلة الاستخدام",
        "نظام إدارة المنتجات والفئات",
        "سلة التسوق مع حفظ العناصر",
        "نظام دفع آمن مع Stripe",
        "مصادقة المستخدمين وإدارة الحسابات",
        "تتبع الطلبات والإشعارات"
      ],
      challenges: [
        "تطبيق نظام دفع آمن ومتوافق",
        "إدارة حالة التطبيق المعقدة",
        "تحسين الأداء للكتالوجات الكبيرة"
      ],
      githubUrl: "https://github.com/khaled-elbaiomy/ecommerce-app",
      liveUrl: "#",
      duration: "3 أشهر",
      teamSize: "فردي"
    },
    project2: {
      fullDescription: "تطبيق إدارة المهام المتقدم الذي يساعد المستخدمين على تنظيم مهامهم اليومية وزيادة الإنتاجية مع ميزات التعاون الجماعي.",
      features: [
        "إنشاء وتنظيم المهام بسهولة",
        "جدولة المهام والتذكيرات",
        "التعاون مع الفرق والمشاركة",
        "تتبع التقدم والإحصائيات",
        "واجهة سحب وإفلات بديهية",
        "مزامنة البيانات عبر الأجهزة"
      ],
      challenges: [
        "تطبيق نظام إشعارات محلية فعال",
        "تصميم واجهة مستخدم بديهية",
        "إدارة البيانات المحلية بكفاءة"
      ],
      githubUrl: "https://github.com/khaled-elbaiomy/task-manager",
      liveUrl: "#",
      duration: "2 شهر",
      teamSize: "فردي"
    },
    project3: {
      fullDescription: "تطبيق طقس متقدم يوفر توقعات دقيقة للطقس مع خدمات الموقع وتوقعات لمدة 7 أيام مع واجهة مستخدم جذابة.",
      features: [
        "توقعات طقس دقيقة لـ 7 أيام",
        "تحديد الموقع التلقائي",
        "بحث عن المدن عالمياً",
        "رسوم بيانية تفاعلية",
        "معلومات مفصلة عن الطقس",
        "واجهة تتكيف مع حالة الطقس"
      ],
      challenges: [
        "التعامل مع APIs خارجية",
        "تطبيق خدمات الموقع بدقة",
        "تصميم واجهة تفاعلية وجذابة"
      ],
      githubUrl: "https://github.com/khaled-elbaiomy/weather-app",
      liveUrl: "#",
      duration: "1.5 شهر",
      teamSize: "فردي"
    },
    project4: {
      fullDescription: "منصة تواصل اجتماعي مبنية بـ Flutter تتضمن المراسلة الفورية، مشاركة الصور، وإدارة الملفات الشخصية مع تصميم عصري.",
      features: [
        "المراسلة الفورية في الوقت الفعلي",
        "مشاركة الصور والوسائط",
        "ملفات شخصية قابلة للتخصيص",
        "نظام الأصدقاء والمتابعة",
        "خلاصة الأخبار التفاعلية",
        "إشعارات فورية"
      ],
      challenges: [
        "تطبيق المراسلة في الوقت الفعلي",
        "إدارة تحميل وعرض الوسائط",
        "تحسين الأداء للبيانات الكبيرة"
      ],
      githubUrl: "https://github.com/khaled-elbaiomy/social-app",
      liveUrl: "#",
      duration: "4 أشهر",
      teamSize: "فردي"
    }
  };

  const details = projectDetails[project.id as keyof typeof projectDetails];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>{details?.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5" />
              <span>{details?.teamSize}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Code2 className="w-5 h-5" />
              <span>{project.technologies.length} تقنيات</span>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {details?.fullDescription}
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">التقنيات المستخدمة</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {details?.features && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">الميزات الرئيسية</h3>
              <ul className="space-y-2">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {details?.challenges && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">التحديات التقنية</h3>
              <ul className="space-y-2">
                {details.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-4">
            {details?.liveUrl && (
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
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all"
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