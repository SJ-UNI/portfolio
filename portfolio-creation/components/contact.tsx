import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Linkedin, Github, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5 animate-gradient pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Get in Touch</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-accent/40 rounded-full" />
          </div>

          <Card className="p-8 sm:p-12 bg-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-balance">{"Let's work together"}</h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl text-pretty">
                I'm currently looking for new opportunities in software engineering, web development, and machine
                learning. Feel free to reach out if you'd like to discuss a project or just say hi!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all hover:scale-105 group/btn"
                  asChild
                >
                  <a href="mailto:hariharan@example.com">
                    <Send className="h-5 w-5 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    Email Me
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:border-accent/50 hover:bg-accent/10 transition-all hover:scale-105 bg-transparent group/btn"
                  asChild
                >
                  <a href="https://linkedin.com/in/hariharan-sj" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:border-accent/50 hover:bg-accent/10 transition-all hover:scale-105 bg-transparent group/btn"
                  asChild
                >
                  <a href="https://github.com/hariharan-sj" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <footer className="mt-16 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2025 Hariharan SJ. All rights reserved.</p>
              <p className="flex items-center gap-2">
                Built with Next.js & Tailwind CSS
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
              </p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}
