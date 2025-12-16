import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Shield, Heart, ChevronDown } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import treeLighting from "@/assets/tree-lighting.jpg";
import scaliciBanner from "@/assets/scalici-banner.jpg";

const VariationOne = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center">
              <span className="font-bebas text-2xl text-accent-foreground">PR</span>
            </div>
            <div>
              <h1 className="font-bebas text-xl text-primary-foreground tracking-wider">PORT RICHMOND</h1>
              <p className="text-xs text-primary-foreground/70 tracking-widest uppercase">NORTH SHORE ALLIANCE</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {["Our Mission", "Events", "Get Involved", "Newsletter"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium tracking-wide transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <Button variant="hero" size="lg">
            Report a Concern
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-medium tracking-widest uppercase mb-6">
              Port Richmond North Shore Alliance
            </span>
          </div>
          
          <h1 className="opacity-0 animate-fade-up stagger-1 font-bebas text-6xl md:text-8xl lg:text-9xl text-primary-foreground leading-none tracking-tight mb-6">
            PORT RICHMOND
            <span className="block text-accent">NORTH SHORE ALLIANCE</span>
          </h1>
          
          <p className="opacity-0 animate-fade-up stagger-2 text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-light">
            Building a stronger community through unity, advocacy, and action. Together, we make Port Richmond North Shore Alliance thrive.
          </p>
          
          <div className="opacity-0 animate-fade-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Get Involved
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Our Mission
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Years Strong" },
              { number: "1,200+", label: "Active Members" },
              { number: "100+", label: "Events Hosted" },
              { number: "5", label: "Banner Classes" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-bebas text-5xl md:text-6xl text-accent mb-2">{stat.number}</div>
                <div className="text-primary-foreground/70 text-sm tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Upcoming</span>
            <h2 className="font-bebas text-5xl md:text-6xl text-foreground mt-2 tracking-tight">
              COMMUNITY EVENTS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="group relative overflow-hidden bg-card rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={treeLighting} 
                  alt="Holiday Tree Lighting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-accent text-accent-foreground px-3 py-1 text-xs font-medium tracking-wider uppercase">
                  December
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bebas text-2xl text-foreground mb-2 tracking-wide">
                  ANNUAL HOLIDAY TREE LIGHTING
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Come see the largest tree lighting on Staten Island! A magical evening for the whole community.
                </p>
                <Button variant="civic" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="group relative overflow-hidden bg-card rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={scaliciBanner} 
                  alt="Street Co-naming Ceremony"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium tracking-wider uppercase">
                  Community
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bebas text-2xl text-foreground mb-2 tracking-wide">
                  STREET CO-NAMING CEREMONY
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Honoring Victor Scalici, life-long resident and owner of Scalici Florist at Port Richmond and North Shore Alliance.
                </p>
                <Button variant="civic" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="group relative overflow-hidden bg-card rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden bg-primary flex items-center justify-center">
                <Shield className="w-24 h-24 text-accent" />
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-gold text-foreground px-3 py-1 text-xs font-medium tracking-wider uppercase">
                  Veterans
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bebas text-2xl text-foreground mb-2 tracking-wide">
                  5TH ANNUAL HERO BANNER EVENT
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Class of 2025 - Honoring our veterans, past and present. An unforgettable community celebration.
                </p>
                <Button variant="civic" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-medium tracking-widest uppercase">Our Purpose</span>
              <h2 className="font-bebas text-5xl md:text-6xl text-primary-foreground mt-2 mb-6 tracking-tight">
                BUILDING A STRONGER COMMUNITY
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Port Richmond North Shore Alliance is dedicated to fostering unity, addressing community concerns, and celebrating the rich heritage of our neighborhood. We advocate for residents, support local businesses, and honor those who serve.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, title: "Community Unity" },
                  { icon: Shield, title: "Veteran Support" },
                  { icon: Calendar, title: "Local Events" },
                  { icon: Heart, title: "Civic Pride" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-primary-foreground font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20 rounded-sm" />
              <img 
                src={heroBanner} 
                alt="Community gathering"
                className="relative z-10 w-full rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-bebas text-5xl md:text-6xl text-accent-foreground mb-6 tracking-tight">
            JOIN OUR COMMUNITY
          </h2>
          <p className="text-accent-foreground/80 text-xl max-w-2xl mx-auto mb-10">
            Be part of something bigger. Help us build a stronger, more connected Port Richmond North Shore Alliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary text-primary-foreground font-bebas tracking-wider uppercase hover:bg-primary/90"
              size="xl"
            >
              Become a Member
            </Button>
            <Button 
              className="bg-transparent border-2 border-accent-foreground text-accent-foreground font-bebas tracking-wider uppercase hover:bg-accent-foreground hover:text-accent"
              size="xl"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center">
                <span className="font-bebas text-2xl text-accent-foreground">PR</span>
              </div>
              <div>
                <h1 className="font-bebas text-xl text-primary-foreground tracking-wider">PORT RICHMOND</h1>
                <p className="text-xs text-primary-foreground/70 tracking-widest uppercase">NORTH SHORE ALLIANCE</p>
              </div>
            </div>
            
            <div className="flex gap-8">
              {["Our Mission", "Events", "Get Involved", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <p className="text-primary-foreground/50 text-sm">
              © 2025 Port Richmond North Shore Alliance. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VariationOne;
