
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck, Circle } from "lucide-react";

const certifications = [
  {
    name: "Google Cloud Certified Cloud Digital Leader (CDL)",
    issuer: "Google Cloud",
    icon: "/lovable-uploads/a27c74ff-5e31-4924-8efe-e0f4a773ae54.png",
    completed: true
  },
  {
    name: "Google Cloud Certified Associate Cloud Engineer (ACE)",
    issuer: "Google Cloud",
    icon: "/lovable-uploads/ec8da696-60d0-4198-ada8-5cc304a64437.png",
    completed: true
  },
  {
    name: "GitHub Foundations Certification",
    issuer: "GitHub",
    icon: "/lovable-uploads/3b4516fc-9b37-4cc2-87c8-df0b76a95028.png",
    completed: true
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    icon: "/lovable-uploads/CKA.png",
    completed: false
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Certifications</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-16">
              {certifications.map((cert, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
                    {cert.completed ? (
                      <div className="bg-white rounded-full p-1">
                        <CircleCheck className="w-8 h-8 text-green-500" />
                      </div>
                    ) : (
                      <div className="bg-white rounded-full p-1">
                        <div className="w-8 h-8 rounded-full border-4 border-blue-500 animate-pulse" />
                      </div>
                    )}
                  </div>
                  
                  <Card className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} hover:shadow-lg transition-all duration-300`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-4">
                          <img src={cert.icon} alt={cert.name} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">{cert.name}</h3>
                        <p className="text-gray-600">{cert.issuer}</p>
                        {!cert.completed && (
                          <div className="mt-4">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                              In Progress
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
