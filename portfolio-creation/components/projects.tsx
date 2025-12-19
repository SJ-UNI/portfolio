import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Developed a personal portfolio website using React.js and Tailwind CSS, featuring full mobile responsiveness and smooth UI interactions. Deployed securely on Firebase Hosting for fast, reliable access and continuous updates.",
      technologies: ["React.js", "Tailwind CSS", "Firebase"],
      link: "https://mohan-r.web.app/",
      github: null,
    },
    {
      title: "Food Delivery Web Application",
      description:
        "Built a web application for browsing restaurants and placing food orders. Features include restaurant listings, menu browsing, and an intuitive ordering interface built with vanilla JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#projects",
      github: null,
    },
    {
      title: "Restaurant Rating Predictor",
      description:
        "Machine learning model that predicts restaurant ratings using structured datasets. Implemented data preprocessing, feature engineering, and various ML algorithms to achieve accurate predictions.",
      technologies: ["Python", "TensorFlow", "Data Analytics"],
      link: "#projects",
      github: null,
    },
    {
      title: "Restaurant Recommendation System",
      description:
        "Built an intelligent recommendation system based on user preferences and data patterns. Performed cuisine-based classification and geographical data analysis to provide personalized restaurant suggestions.",
      technologies: ["Python", "Machine Learning", "WEKA"],
      link: "#projects",
      github: null,
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Featured Work</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-accent/40 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 backdrop-blur-sm animate-slide-up opacity-0 stagger-${(index % 4) + 1}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />

                <div className="relative">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 text-xs transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-accent/5 border-accent/30 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all group/btn"
                      asChild
                    >
                      <a
                        href={project.link || "#projects"}
                        target={project.link && project.link !== "#projects" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Project
                      </a>
                    </Button>
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all group/btn bg-transparent"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
