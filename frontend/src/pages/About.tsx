import { Shield, Award, Users, Heart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import driverImg from "@/assets/driver-service.jpg";
import cityImg from "@/assets/city-travel.jpg";

const values = [
  { icon: Shield, title: "Child Safety", desc: "Our highest priority. Owner-driven vehicles ensure maximum security for your children." },
  { icon: Award, title: "Owner Driven", desc: "Personal responsibility. No random drivers, only the trusted owner behind the wheel." },
  { icon: Users, title: "Punctuality", desc: "On-time pickup and drop to ensure your child never misses a class or a safe return." },
  { icon: Heart, title: "Transparency", desc: "Honest communication with parents and fixed monthly rates with no surprises." },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cityImg})` }} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">About Us</h1>
          <p className="text-primary-foreground/70 mt-2">Know more about KRS CABS</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Our Mission" center={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2011, KRS CABS was born with a single-minded focus — to provide absolute safety for school-going children in Coimbatore. We recognized the anxiety parents feel about their children's daily commute and decided to create a service built on trust.
              </p>
              <p>
                What makes us truly unique is our "Owner Driven" model. We don't believe in outsourcing your child's safety to temporary drivers. Every route is personally managed and driven by the owner, ensuring a level of responsibility and care that commercial fleets simply cannot match.
              </p>
              <p>
                Over the past decade, we have become the preferred choice for hundreds of parents. Our commitment isn't just to transportation, but to being a reliable part of your child's daily educational journey, ensuring they start and end their day in a safe, familiar, and caring environment.
              </p>
            </div>
          </div>
          <img src={driverImg} alt="KRS CABS owner driven school service" className="rounded-2xl shadow-[var(--shadow-elevated)] w-full object-cover aspect-[4/3]" loading="lazy" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto text-center max-w-3xl">
          <SectionHeading title="Safety as a Standard" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            To provide the safest, most reliable, and most trusted school transportation service in Coimbatore, treating every child with the same care and protection we would give our own.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="Our Values" subtitle="The principles that guide everything we do." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-6 text-center hover:shadow-[var(--shadow-elevated)] transition-shadow">
                <div className="h-14 w-14 rounded-full accent-gradient flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
