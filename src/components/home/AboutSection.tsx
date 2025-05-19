
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Rocket } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Startup Acceleration",
      description: "Fast-track your growth with our intensive 6-month program designed to take your startup to the next level."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Investor Network",
      description: "Gain access to our extensive network of angel investors, venture capital firms, and strategic partners."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Expert Mentorship",
      description: "Learn from industry leaders and seasoned entrepreneurs who have built successful businesses."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Incubation Center</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We help talented entrepreneurs turn their ideas into successful businesses
            through mentorship, resources, and funding opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/40 bg-card/60 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                StartupLaunch was founded in 2010 with a clear mission: to democratize entrepreneurship and make 
                startup success accessible to talented innovators from all backgrounds.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe that great ideas can come from anywhere, and our goal is to provide the resources, 
                mentorship, and capital needed to transform those ideas into thriving businesses.
              </p>
              <p className="text-muted-foreground mb-6">
                Over the past decade, we've helped launch over 200 startups, created more than 3,000 jobs, 
                and facilitated over $150 million in funding for our portfolio companies.
              </p>
              <Button>Learn More About Us</Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-accent/30 to-primary/30 blur-xl" />
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Our incubation space" 
                className="relative w-full h-auto rounded-xl shadow-xl border border-border/40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
