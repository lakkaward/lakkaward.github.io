
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "On-Premise LLM Deployment",
    description: "Deployed large language models on local infrastructure optimized for CPU environments, enabling private AI capabilities with reduced operational costs.",
    technologies: ["Python", "Docker", "ollama", "Hugging Face", "LLM"],
    demo: "https://dypllm.github.io"
  },
  {
    title: "Jenkins CI/CD Pipeline with Testing",
    description: "Implemented comprehensive CI/CD pipeline with automated testing, code quality checks, and deployment stages for reliable software delivery.",
    technologies: ["Jenkins", "Docker", "GitHub", "Shell", "JUnit"],
    github: "https://github.com/lakkawardhananjay/sample_jenkins_CI-CT"
  },
  {
    title: "Advanced DevOps Pipeline",
    description: "Built end-to-end DevOps solution with infrastructure as code, monitoring, alerting, and auto-scaling capabilities for high-availability applications.",
    technologies: ["Kubernetes", "Terraform", "Prometheus", "Grafana"],
    github: "https://github.com/dhananjaylakkawar/devops-pipeline",
  },
  {
    title: "Effortless 3-Tier Deployment on AWS",
    description: "Developed infrastructure as code templates for quick deployment of scalable three-tier architectures on AWS cloud platform.",
    technologies: ["AWS", "CloudFormation", "EC2", "RDS", "ELB"],
    github: "https://github.com/lakkawardhananjay/DC_react-node-mysql",
    Hashnode: "https://deploying-3-tier-application-with-github-actions.hashnode.space/default-guide/three-teir-application-deployment-on-aws-ec2"
  },
  {
    title: "Slide Studio – AI-Powered Presentation Tools",
    description: "Created AI tool that automatically generates professional presentation slides from text input, streamlining content creation process.",
    technologies: ["Python","GCP","Cloud Run"],
    demo: "https://slide-studio.vercel.app"
  },
  {
    title: "Cloud-Powered Data Analytics Pipeline",
    description: "Designed data processing pipeline with real-time analytics capabilities, handling large datasets efficiently using cloud-native services.",
    technologies: ["GCP", "BigQuery", "DataFlow", "cloud fuctions", "Looker"],
    github: "https://github.com/lakkawardhananjay/data-analyis-with-looker"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              Hashnode={project.Hashnode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  title, 
  description, 
  technologies,
  github,
  demo,
  Hashnode
}: { 
  title: string; 
  description: string; 
  technologies: string[];
  github?: string;
  demo?: string;
  Hashnode?: string;
}) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-blue-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-3">
  {github && (
    <Button variant="outline" size="sm" asChild className="bg-blue-50 hover:bg-blue-100 border-blue-200">
      <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <Github className="w-4 h-4 text-blue-700" />
        <span className="text-blue-700">GitHub</span>
      </a>
    </Button>
  )}
  
  {demo && (
    <Button variant="outline" size="sm" asChild className="bg-blue-50 hover:bg-blue-100 border-blue-200">
      <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <ExternalLink className="w-4 h-4 text-blue-700" />
        <span className="text-blue-700">Live Demo</span>
      </a>
    </Button>
  )}

  {Hashnode && (
    <Button variant="outline" size="sm" asChild className="bg-blue-50 hover:bg-blue-100 border-blue-200">
      <a href={Hashnode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <ExternalLink className="w-4 h-4 text-blue-700" />
        <span className="text-blue-700">Hashnode</span>
      </a>
    </Button>
  )}
</CardFooter>
    </Card>
  );
};

export default Projects;
