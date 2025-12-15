import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users, Heart, Star, Quote } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import treeLighting from "@/assets/tree-lighting.jpg";
import scaliciBanner from "@/assets/scalici-banner.jpg";
import HamburgerIcon from "@/components/HamburgerIcon";
import MobileMenu from "@/components/MobileMenu";
import DemoModal from "@/components/DemoModal";

const VariationTwo = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    
    // Only intercept if not hamburger, modal, or mobile menu elements
    if (
      !target.closest('#mobile-menu-button') &&
      !target.closest('.demo-modal-content') &&
      !target.id.includes('hamburger') &&
      !target.closest('[id*="hamburger"]') &&
      !target.closest('[data-mobile-menu="true"]')
    ) {
      // Prevent navigation if clicking on a link
      if (target.tagName === 'A' || target.closest('a')) {
        e.preventDefault();
      }
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background font-dm" onClick={handleLinkClick}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="group">
            <h1 className="font-playfair text-2xl text-foreground">
              Port Richmond <span className="text-primary italic">Strong</span>
            </h1>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {["About", "Events", "Community", "Get Involved"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground/70 hover:text-primary text-sm font-medium transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="warm" size="lg" className="hidden md:flex">
              Report Issue
            </Button>
            <HamburgerIcon
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Demo Modal */}
      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="min-h-screen pt-24 pb-12 flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="opacity-0 animate-slide-in">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" />
                  Staten Island, New York
                </span>
              </div>
              
              <h1 className="opacity-0 animate-slide-in stagger-1 font-playfair text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6">
                Building a <span className="italic text-primary">stronger</span> Port Richmond, together.
              </h1>
              
              <p className="opacity-0 animate-slide-in stagger-2 text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                We're a civic association dedicated to celebrating our community's heritage, advocating for residents, and creating meaningful connections that make our neighborhood thrive.
              </p>
              
              <div className="opacity-0 animate-slide-in stagger-3 flex flex-wrap gap-4">
                <Button variant="warm" size="xl" className="group">
                  Join Our Community
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="warmOutline" size="xl">
                  Upcoming Events
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative opacity-0 animate-fade-in">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <img 
                  src={heroBanner} 
                  alt="Port Richmond Community"
                  className="w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-playfair text-2xl text-foreground">50+ Years</p>
                      <p className="text-muted-foreground text-sm">Serving Our Community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Community First", desc: "Bringing neighbors together through events, advocacy, and shared purpose." },
              { icon: Star, title: "Honor Our Heroes", desc: "Celebrating veterans and community leaders who make Port Richmond special." },
              { icon: Heart, title: "Local Pride", desc: "Supporting small businesses and preserving our neighborhood's unique character." },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-playfair text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-primary text-sm font-medium">What's Happening</span>
              <h2 className="font-playfair text-4xl md:text-5xl text-foreground mt-2">
                Upcoming <span className="italic">Events</span>
              </h2>
            </div>
            <Button variant="warmGhost" className="mt-4 md:mt-0">
              View All Events <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Event */}
            <div className="group relative overflow-hidden rounded-3xl">
              <img 
                src={treeLighting} 
                alt="Holiday Tree Lighting"
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="bg-[#000000] opacity-60 hover:opacity-0 absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-cream inline-flex items-center gap-2 text-cream/80 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  December 2025
                </span>
                <h3 className=" font-playfair text-3xl text-cream mb-3">
                  Annual Holiday Tree Lighting
                </h3>
                <p className="text-cream mb-4">
                  Come see the largest tree lighting on Staten Island! Help us spread holiday cheer.
                </p>
                <Button 
                  className="bg-cream text-charcoal font-semibold rounded-full hover:bg-cream/90"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Other Events */}
            <div className="space-y-6">
              <div className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-6">
                  <img 
                    src={scaliciBanner} 
                    alt="Street Co-naming"
                    className="w-32 h-32 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <span className="text-primary text-xs font-medium tracking-wider uppercase">Community</span>
                    <h4 className="font-playfair text-xl text-foreground mt-1 mb-2">Street Co-naming Ceremony</h4>
                    <p className="text-muted-foreground text-sm mb-3">Honoring Victor Scalici at Port Richmond Avenue & Hooker Place.</p>
                    <Button variant="warmGhost" size="sm" className="p-0 h-auto">
                      Details <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-6">
                  <div className="w-32 h-32 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Star className="w-12 h-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-primary text-xs font-medium tracking-wider uppercase">Veterans</span>
                    <h4 className="font-playfair text-xl text-foreground mt-1 mb-2">5th Annual Hero Banner Event</h4>
                    <p className="text-muted-foreground text-sm mb-3">Class of 2025 - Honoring our veterans, past and present.</p>
                    <Button variant="warmGhost" size="sm" className="p-0 h-auto">
                      Details <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-6">
                  <div className="w-32 h-32 bg-secondary rounded-xl flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-primary text-xs font-medium tracking-wider uppercase">Support</span>
                    <h4 className="font-playfair text-xl text-foreground mt-1 mb-2">Operation Cover Our Veterans</h4>
                    <p className="text-muted-foreground text-sm mb-3">Supporting veteran needs in our community.</p>
                    <Button variant="warmGhost" size="sm" className="p-0 h-auto">
                      Details <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <Quote className="w-16 h-16 text-primary-foreground/20 mx-auto mb-8" />
          <blockquote className="font-playfair text-3xl md:text-4xl text-primary-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            "None of this would be possible without our incredible community. Together, we honor our veterans, celebrate our heritage, and build a stronger Port Richmond."
          </blockquote>
          <p className="text-primary-foreground/70">— Port Richmond Strong Leadership</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-secondary/50 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-6">
              Ready to make a <span className="italic text-primary">difference</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Join our community of neighbors working together to make Port Richmond the best it can be. Every voice matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="xl" className="group">
                Become a Member
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="warmOutline" size="xl">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="font-playfair text-2xl text-background mb-4">
                Port Richmond <span className="italic">Strong</span>
              </h3>
              <p className="text-background/60 max-w-md leading-relaxed">
                A civic association dedicated to building a stronger, more connected community in Port Richmond, Staten Island.
              </p>
            </div>
            
            <div>
              <h4 className="text-background font-medium mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About Us", "Events", "Get Involved", "Newsletter"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-background/60 hover:text-background transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-background font-medium mb-4">Resources</h4>
              <div className="space-y-2">
                {["Report a Concern", "Local Businesses", "Newsletters", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-background/60 hover:text-background transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/10 mt-12 pt-8 text-center">
            <p className="text-background/40 text-sm">
              © 2024 Port Richmond Strong. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VariationTwo;
