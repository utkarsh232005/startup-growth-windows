
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Turn Your <span className="text-primary">Ideas</span> Into <span className="text-primary">Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Join our incubation center to access mentorship, funding, and resources 
              needed to transform your startup idea into a thriving business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-md">Apply for Incubation</Button>
              <Button size="lg" variant="outline" className="text-md">
                Schedule a Tour
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Startups working together" 
                className="relative rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
