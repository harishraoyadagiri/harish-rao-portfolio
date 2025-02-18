import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".appear").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 appear">
            Harish Rao Yadagiri
          </h1>
          <div className="flex gap-4 justify-center mb-12 appear">
            <a href="mailto:harishrao@usf.edu" className="inline-block">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://github.com/harishrao" className="inline-block">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/harishrao" className="inline-block">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
          <ChevronDown className="w-6 h-6 absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" />
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center appear">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Software Engineer",
                company: "Wipro",
                period: "August 2021 - July 2023",
                description: "Developed Python utilities for dataset cleaning and transformation, reducing processing time by 25%. Led end-to-end MLOps for IT applications."
              },
              {
                title: "Business Insight Manager (Freelance Project)",
                company: "Chick-fil-A",
                period: "August 2023 - Present",
                description: "Conducted data-driven sales performance analysis and led a team of 20+ employees."
              },
              {
                title: "Research Assistant",
                company: "Amrita Vishwa Vidyapeetham",
                period: "March 2021 - July 2021",
                description: "Built SQL-based queries for academic research and trained faculty in SQL and data analysis tools."
              }
            ].map((job, index) => (
              <Card key={index} className="p-6 glass appear">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {job.company} • {job.period}
                </p>
                <p className="text-muted-foreground">{job.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center appear">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Programming",
                skills: "Python, Pandas, NumPy, SQL, R, C++, JavaScript, C"
              },
              {
                category: "Cloud Platforms",
                skills: "AWS EC2, S3, Lambda, RedShift, Google Cloud, Azure"
              },
              {
                category: "Databases & DevOps",
                skills: "MongoDB, MySQL, Oracle SQL, Docker, Kubernetes"
              },
              {
                category: "Tools",
                skills: "Git, Github Actions, Tableau, PowerBI, GIA"
              },
              {
                category: "Operating Systems",
                skills: "Windows, Linux, Unix, macOS"
              },
              {
                category: "Certifications",
                skills: "AI Associate (Salesforce), GenerativeAI Fundamentals"
              }
            ].map((skillSet, index) => (
              <Card key={index} className="p-6 glass appear">
                <h3 className="text-lg font-semibold mb-3">{skillSet.category}</h3>
                <p className="text-sm text-muted-foreground">{skillSet.skills}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center appear">Education</h2>
          <Card className="p-8 glass appear">
            <h3 className="text-xl font-semibold mb-2">
              Master of Science in Business Analytics and Information Systems
            </h3>
            <p className="text-lg mb-4">University of South Florida</p>
            <p className="text-muted-foreground mb-2">August 2023 - May 2025</p>
            <p className="text-muted-foreground">GPA: 3.73</p>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center appear">Projects</h2>
          <div className="space-y-8">
            {[
              {
                title: "AI Chatbot Development",
                description: "Built AI-driven chatbots using Python (spaCy, Transformers) and TensorFlow, automating customer service tasks with 89% intent recognition."
              },
              {
                title: "Credit Score Predictor",
                description: "Developed a machine learning model to predict credit scores with 92.7% accuracy using Python and scikit-learn."
              },
              {
                title: "Predictive Modeling of Bank Marketing",
                description: "Analyzed historical marketing campaign data to optimize targeting strategies, increasing lead conversion rates by 25%."
              }
            ].map((project, index) => (
              <Card key={index} className="p-6 glass appear">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 appear">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 appear">
            Available for work opportunities and collaborations
          </p>
          <div className="flex gap-4 justify-center appear">
            <Button asChild>
              <a href="mailto:harishrao@usf.edu">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/harishrao">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
