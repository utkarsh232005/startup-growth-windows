
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StartupsSection = () => {
  const startups = [
    {
      name: "EcoFlow",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      description: "Sustainable energy solutions for homes and businesses. Raised $12M in Series A funding.",
      year: 2019,
      category: "CleanTech",
      funding: "$12M"
    },
    {
      name: "MediConnect",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      description: "Telemedicine platform connecting patients with healthcare providers. Acquired for $40M.",
      year: 2018,
      category: "HealthTech",
      funding: "$8M"
    },
    {
      name: "UrbanFarm",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      description: "Vertical farming technology for urban environments. Expanded to 6 major cities.",
      year: 2020,
      category: "AgTech",
      funding: "$7.5M"
    },
    {
      name: "LearnNext",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      description: "AI-powered personalized learning platform for K-12 students. 2M+ active users.",
      year: 2021,
      category: "EdTech",
      funding: "$5.2M"
    },
    {
      name: "SecureChain",
      logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      description: "Blockchain security solutions for enterprise applications. Recently IPO'd at $300M valuation.",
      year: 2017,
      category: "Cybersecurity",
      funding: "$23M"
    },
    {
      name: "DeliveryBot",
      logo: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      description: "Autonomous delivery robots for last-mile logistics. Operating in 12 countries.",
      year: 2019,
      category: "Robotics",
      funding: "$18M"
    },
  ];

  return (
    <section id="startups" className="py-16 md:py-24 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These innovative startups graduated from our incubation program and are now making a global impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="p-6 border-b">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                      <img 
                        src={startup.logo} 
                        alt={`${startup.name} logo`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{startup.name}</h3>
                      <p className="text-sm text-muted-foreground">{startup.category} • Founded {startup.year}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{startup.description}</p>
                </div>
                <div className="p-4 bg-muted/50 flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">Total Funding</span>
                    <p className="font-semibold">{startup.funding}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button>View All Success Stories</Button>
        </div>
      </div>
    </section>
  );
};

export default StartupsSection;
