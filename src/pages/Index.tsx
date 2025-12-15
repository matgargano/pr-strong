import { useState } from "react";
import VariationOne from "@/components/variations/VariationOne";
import VariationTwo from "@/components/variations/VariationTwo";

const Index = () => {
  const [activeVariation, setActiveVariation] = useState<1 | 2>(1);

  return (
    <div className={activeVariation === 2 ? "theme-warm" : ""}>
      {/* Theme Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-card/95 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-border">
        <button
          onClick={() => setActiveVariation(1)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
            activeVariation === 1
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          Variation 1: Bold Civic
        </button>
        <button
          onClick={() => setActiveVariation(2)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
            activeVariation === 2
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          Variation 2: Warm Community
        </button>
      </div>

      {activeVariation === 1 ? <VariationOne /> : <VariationTwo />}
    </div>
  );
};

export default Index;
