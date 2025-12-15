import { cn } from "@/lib/utils";

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const HamburgerIcon = ({ isOpen, onClick, className }: HamburgerIconProps) => {
  return (
    <button
      id="mobile-menu-button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={cn(
        "w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md transition-all duration-300",
        className
      )}
      aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
      aria-expanded={isOpen}
    >
      <span
        id="hamburger-top"
        className={cn(
          "w-6 h-0.5 bg-current transition-all duration-300 ease-in-out",
          isOpen && "rotate-45 translate-y-2"
        )}
      />
      <span
        id="hamburger-middle"
        className={cn(
          "w-6 h-0.5 bg-current transition-all duration-300 ease-in-out",
          isOpen && "opacity-0"
        )}
      />
      <span
        id="hamburger-bottom"
        className={cn(
          "w-6 h-0.5 bg-current transition-all duration-300 ease-in-out",
          isOpen && "-rotate-45 -translate-y-2"
        )}
      />
    </button>
  );
};

export default HamburgerIcon;

