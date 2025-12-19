import { Card } from "@/components/ui/card"
import { GraduationCap, MapPin } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">About</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-accent/40 rounded-full" />
          </div>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed">
            <p className="text-foreground/90">
              I am an Information Technology undergraduate with strong practical experience in building responsive web
              applications, developing machine learning models, and working with data analytics. Currently pursuing my
              B.Tech at University College of Engineering, Trichy, I've gained hands-on experience through internships
              at leading fintech and technology companies.
            </p>
            <p className="text-muted-foreground">
              At Bluestock Fintech, I'm developing Purchase Order web applications and REST APIs for mobile integration,
              while contributing to ML-powered fundamental analysis systems for stock market companies. Previously, I
              built restaurant recommendation systems and rating prediction models using structured datasets at Cognifyz
              Technologies.
            </p>
            <p className="text-muted-foreground">
              Passionate about applying technical skills to real-world projects, I specialize in React.js, Python, SQL,
              and modern development tools. I continuously seek opportunities to learn and grow in professional
              environments, staying current with emerging technologies and best practices in software engineering.
            </p>
          </div>

          <Card className="mt-8 sm:mt-12 p-6 sm:p-8 bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <GraduationCap className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground">Education</h3>
                </div>
                <p className="font-medium">B.Tech in Information Technology</p>
                <p className="text-sm text-muted-foreground">University College of Engineering, Trichy</p>
                <p className="text-sm text-muted-foreground">2022 - 2026 • CGPA: 7.4/10.0</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                </div>
                <p className="font-medium">Trichy, Tamil Nadu</p>
                <p className="text-sm text-muted-foreground">Open to remote opportunities</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
