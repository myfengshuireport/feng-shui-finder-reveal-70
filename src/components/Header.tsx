import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-fortune-gradient rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-prosperity-gold-foreground">福</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">My Feng Shui Calculator</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#calculator" className="text-muted-foreground hover:text-foreground transition-colors">
              Calculator
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;