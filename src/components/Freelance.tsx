import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, UserCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Freelance = () => {
  const { t } = useLanguage();
  const content = t.freelance;

  const icons = {
    UserCheck: <UserCheck className="h-6 w-6 text-osa-cian" />,
    Zap: <Zap className="h-6 w-6 text-osa-cian" />,
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="freelance" className="py-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-4 text-gradient">
            {content.title} <span className="text-gradient">{content.titleHighlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg transition-colors">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#1a1c23] dark:bg-white/5 border border-white/10 rounded-[50px] p-8 md:p-12 shadow-2xl">
          <p className="text-gray-300 text-center leading-relaxed mb-10">{content.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-osa-cian/10 p-3 rounded-full border border-osa-cian/20">
                  {icons[benefit.icon]}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="glow" size="lg" onClick={handleScrollToContact} className="group">
              {content.button}
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;