import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        data-mobile-menu="true"
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-playfair text-2xl text-foreground">
              Port Richmond <span className="text-primary italic">Strong</span>
            </h2>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            {["About", "Events", "Community", "Get Involved"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={onClose}
                className="block text-foreground/70 hover:text-primary text-lg font-medium transition-colors py-2 border-b border-border/50"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-8 pt-8 border-t border-border">
            <Button variant="warm" size="lg" className="w-full">
              Report Issue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

