import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "Bluestock Fintech",
      role: "Software Development Engineer (SDE) Intern",
      period: "Nov 2025 - Present",
      description: [
        "Developing a Purchase Order (PO) Web Application and REST APIs to support mobile application integration",
        "Designing and implementing backend APIs to handle data exchange between web and mobile platforms",
        "Contributing to a Machine Learning–generated fundamental analysis system for stock market–listed companies",
        "Analyzing financial data and generating insights to support investment decision-making",
        "Collaborating with the team to understand fintech systems, development workflows, and real-world engineering practices",
      ],
      technologies: ["React.js", "REST APIs", "Machine Learning", "Data Analytics"],
    },
    {
      company: "Cognifyz Technologies",
      role: "Intern – Machine Learning",
      period: "June 2025 - Aug 2025",
      description: [
        "Developed a machine learning model to predict restaurant ratings using structured datasets",
        "Built a restaurant recommendation system based on user preferences and data patterns",
        "Performed cuisine-based classification and geographical data analysis",
        "Applied data preprocessing, feature engineering, and model evaluation techniques",
      ],
      technologies: ["Python", "TensorFlow", "Data Preprocessing", "ML Models"],
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Experience</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-accent/40 rounded-full" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/10 backdrop-blur-sm hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />

                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Briefcase className="h-4 w-4 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-base text-muted-foreground font-medium ml-12">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground sm:text-right ml-12 sm:ml-0">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 ml-12">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-accent mt-1.5 font-bold">•</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 ml-12">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 text-xs transition-all hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
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
