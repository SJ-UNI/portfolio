import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 sm:pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5 animate-gradient pointer-events-none" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance animate-slide-up opacity-0">
            Hariharan SJ
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8 text-balance animate-slide-up opacity-0 stagger-1">
            Software Engineer & IT Student
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 sm:mb-12 leading-relaxed text-pretty animate-slide-up opacity-0 stagger-2">
            Building responsive web applications and machine learning solutions. Currently working at Bluestock Fintech,
            developing full-stack fintech systems and ML-powered financial analysis tools.
          </p>
          <div className="flex flex-wrap items-center gap-4 animate-slide-up opacity-0 stagger-3">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all hover:scale-105"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="hover:border-accent/50 hover:bg-accent/10 transition-all hover:scale-110 bg-transparent"
                asChild
              >
                <a href="https://github.com/hariharan-sj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:border-accent/50 hover:bg-accent/10 transition-all hover:scale-110 bg-transparent"
                asChild
              >
                <a
                  href="https://linkedin.com/in/hariharan-sj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:border-accent/50 hover:bg-accent/10 transition-all hover:scale-110 bg-transparent"
                asChild
              >
                <a href="mailto:hariharan@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
