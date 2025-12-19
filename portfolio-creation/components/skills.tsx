import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Palette, Database, Brain, Wrench, Network } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "SQL"],
      icon: Code2,
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
      icon: Palette,
    },
    {
      title: "Backend & Database",
      skills: ["REST APIs", "MySQL", "Node.js"],
      icon: Database,
    },
    {
      title: "ML & Analytics",
      skills: ["TensorFlow", "OpenCV", "WEKA"],
      icon: Brain,
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "Android Studio", "UiPath Studio"],
      icon: Wrench,
    },
    {
      title: "Networking",
      skills: ["TCP/IP", "Nmap", "Wireshark"],
      icon: Network,
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Technical Skills</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-accent/40 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.title}
                  className={`p-6 bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 backdrop-blur-sm group hover:-translate-y-1 animate-slide-up opacity-0 stagger-${(index % 4) + 1}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 transition-all hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
