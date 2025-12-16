import { useEffect } from "react";
import { X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99998] flex items-center justify-center p-4"
      onClick={(e) => {
        // Close if clicking the backdrop (not the modal content)
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in-0 duration-300"
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className={cn(
          "relative z-[99999] bg-white rounded-3xl p-10 max-w-[420px] w-full shadow-2xl",
          "animate-in fade-in-0 zoom-in-95 duration-300",
          "demo-modal-content"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Logo/Image */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="font-playfair text-3xl text-primary">PR</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-3xl text-center text-gray-900 mb-4">
          Draft Demo
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 mb-8 leading-relaxed">
          This is a draft/demo version of the Port Richmond Strong website. 
          The final site is currently under development. Please contact us for 
          more information or to provide feedback.
        </p>

        {/* Call to Action Button */}
        <div className="space-y-4">
            <a href="tel:+16463970468">
          <Button
            variant="warm"
            size="lg"
            className="w-full group"
            onClick={(e) => {
              e.stopPropagation();
              // You can add phone link here: window.location.href = 'tel:+1234567890';
            }}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us
          </Button>
          </a>

          {/* Contact Link */}
          <a
            href="https://waypoint.agency/contact/"
            
            className="block text-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Visit Contact Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;

