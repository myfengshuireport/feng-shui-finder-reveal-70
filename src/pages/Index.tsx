import Header from "@/components/Header";
import Calculator from "@/components/Calculator";
import heroImage from "@/assets/feng-shui-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        
        <div className="relative z-10 container mx-auto px-6 pt-20">
          <Calculator />
        </div>
      </section>

      {/* Additional sections for a complete landing page */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Ancient Wisdom, Modern Insights</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-fortune-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">陰</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Balance & Harmony</h4>
              <p className="text-muted-foreground">Discover the perfect balance of yin and yang in your living space</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-fortune-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">五</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Five Elements</h4>
              <p className="text-muted-foreground">Understand how wood, fire, earth, metal, and water influence your life</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-fortune-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">福</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Prosperity & Fortune</h4>
              <p className="text-muted-foreground">Unlock the secrets to attracting wealth and good fortune</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
