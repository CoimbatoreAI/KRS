import { School, Shield, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-taxi.jpg";
import airportImg from "@/assets/airport-taxi.jpg";
import suvImg from "@/assets/suv-taxi.jpg";
import cityImg from "@/assets/city-travel.jpg";
import driverImg from "@/assets/driver-service.jpg";

const services = [
  {
    icon: School,
    title: "School Pickup & Drop",
    desc: "A dedicated and safe transportation service for school students. We pick up children from their homes and drop them safely at their schools, and vice versa in the afternoons. Our service is driven by the owner to ensure the highest level of trust and responsibility.",
    img: driverImg,
  },
  {
    icon: Shield,
    title: "Maximum Safety",
    desc: "We understand that children are precious. That's why we don't hire temporary drivers. The vehicle is owner-driven, ensuring consistent care, safe driving habits, and a familiar face for your child every day.",
    img: cityImg,
  },
  {
    icon: Clock,
    title: "Perfect Punctuality",
    desc: "School timings are strict. We maintain rigorous schedules to ensure your child reaches school before the bell and is picked up promptly after classes end. We coordinate closely with parents for any timing changes.",
    img: heroImg,
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      <section className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Our Specialized Service</h1>
          <p className="text-primary-foreground/70 mt-2">Dedicated school transportation you can trust</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="Safe Daily Commute" subtitle="Providing peace of mind to parents across Coimbatore." />
          <div className="space-y-16">
            {services.map((s, i) => (
              <div key={s.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img src={s.img} alt={s.title} className="rounded-2xl shadow-[var(--shadow-elevated)] w-full object-cover aspect-[16/10]" loading="lazy" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="h-12 w-12 rounded-xl accent-gradient flex items-center justify-center mb-4">
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <Link to="/booking">
                    <Button className="accent-gradient text-white font-bold border-0 hover:opacity-90 transition-opacity shadow-md">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
