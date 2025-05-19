
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-primary/50 to-accent/50 p-1">
          <div className="bg-black/80 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-border/40">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Launch Your Startup?</h2>
              <p className="text-lg text-neutral-300 mb-8">
                Apply today to join our next cohort of innovative startups. 
                Get access to funding, mentorship, and resources to accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-md">Apply for Incubation</Button>
                <Button size="lg" variant="outline" className="text-md">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
