import { Link } from "react-router-dom";
import { Phone, Shield, Clock, DollarSign, Car, Star, MapPin, Plane, Building, Map, Users, School } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import BookingModal from "@/components/BookingModal";
import ReviewForm from "@/components/ReviewForm";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-taxi.jpg";
import airportImg from "@/assets/airport-taxi.jpg";
import suvImg from "@/assets/suv-taxi.jpg";
import travellerImg from "@/assets/traveller.jpg";
import driverImg from "@/assets/driver-service.jpg";
import s1Img from "@/assets/s1.png";
import s2Img from "@/assets/s2.png";
import s3Img from "@/assets/s3.png";

// Testimonials will be fetched from the backend now.
interface Review {
  _id: string;
  name: string;
  review: string;
  rating: number;
}


const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${baseUrl}/api/reviews`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative container mx-auto px-4 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">Dedicated School Service</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-primary-foreground mb-6">
              Safe School Transportation for Your Children
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
              Reliable pickup and drop service from home to school and vice versa. Driven by the owner for maximum safety and trust since 2011.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button size="lg" className="accent-gradient text-white font-bold px-8 border-0 hover:opacity-90 transition-opacity shadow-lg">
                  Register Now
                </Button>
              </Link>
              <a href="tel:9500595550">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-white hover:text-primary font-bold px-8 shadow-sm">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </Button>
              </a>
            </div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <BookingForm variant="hero" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={driverImg} alt="KRS CABS owner driven school service" className="rounded-2xl shadow-[var(--shadow-elevated)] w-full object-cover aspect-[4/3]" loading="lazy" />
            </div>
            <div>
              <SectionHeading title="Owner Driven Service" subtitle="Safety is our top priority for your children." center={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                KRS CABS specializes in providing dedicated school transportation. Unlike other services, our vehicles are driven by the owner himself, ensuring a level of responsibility and care that is unmatched. We treat your children like our own.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "Personal", label: "Care & Attention" },
                  { num: "Fixed", label: "Monthly Routes" },
                  { num: "Reliable", label: "On-time Service" },
                  { num: "Trusted", label: "By 500+ Parents" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card p-4 text-center">
                    <div className="text-xl font-display font-bold text-accent">{stat.num}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <SectionHeading title="Our Specialized School Service" subtitle="Convenient and safe daily commute for students." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: "Home to School", desc: "Primacy on punctuality to ensure students never miss their morning bells." },
              { icon: School, title: "School to Home", desc: "Safe return trips immediately after school hours, straight to your doorstep." },
              { icon: Shield, title: "Safety Assured", desc: "Owner-driven vehicles with constant communication with parents." },
            ].map((s) => (
              <div key={s.title} className="glass-card p-6 hover:shadow-[var(--shadow-elevated)] transition-shadow group">
                <div className="h-12 w-12 rounded-xl accent-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools We Serve */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionHeading title="Schools We Serve" subtitle="Reliable transportation to prestigious institutions." />
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "S1",
                name: "Sri Chaitanya Techno School",
                location: "Vadavalli",
                fullName: "Sri Chaitanya Techno School, Vadavalli",
                image: s1Img
              },
              {
                id: "S2",
                name: "Bharatiya Vidya Bhavan",
                location: "R.S. Puram",
                fullName: "Bharatiya Vidya Bhavan (R.S. Puram)",
                image: s2Img
              },
              {
                id: "S3",
                name: "Bharatiya Vidya Bhavans Public School",
                location: "Ajjanu (CBSE)",
                fullName: "Bharatiya Vidya Bhavans Public School (CBSE), Ajjanu",
                image: s3Img
              },
            ].map((school) => (
              <div
                key={school.fullName}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-all duration-300 relative overflow-hidden group cursor-pointer"
                onClick={() => {
                  setSelectedSchool(school.fullName);
                  setIsModalOpen(true);
                }}
              >
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10">
                  {school.id}
                </div>
                <div className="h-24 w-full flex items-center justify-center mb-6 px-4">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-800 mb-2">{school.name}</h3>
                <p className="text-slate-500 font-medium">{school.location}</p>
                <div className="mt-4 px-4 py-1 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Daily pickup & drop
                </div>
                <div className="mt-4">
                  <Button size="sm" className="accent-gradient text-white font-bold">
                    Enquire Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">Why Trust KRS CABS</h2>
            <div className="mt-4 h-1 w-16 rounded-full accent-gradient mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Owner Driven", desc: "No random drivers. Only the owner drives." },
              { icon: Clock, title: "Punctual", desc: "Fixed timings for pickup and drop." },
              { icon: Users, title: "Monthly Plans", desc: "Affordable and consistent monthly rates." },
              { icon: Star, title: "Verified", desc: "Clean background and years of experience." },
            ].map((w) => (
              <div key={w.title} className="text-center p-6">
                <div className="h-14 w-14 rounded-full accent-gradient flex items-center justify-center mx-auto mb-4">
                  <w.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{w.title}</h3>
                <p className="text-sm text-primary-foreground/70">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="What Parents Say" subtitle="Hear from parents who trust KRS CABS for their children." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {isLoading ? (
              <p className="text-center col-span-full">Loading reviews...</p>
            ) : reviews.length > 0 ? (
              reviews.map((t) => (
                <div key={t._id} className="glass-card p-6 flex flex-col h-full animate-fade-in">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 italic flex-grow">"{t.review}"</p>
                  <p className="font-semibold text-sm">{t.name}</p>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-muted-foreground">Be the first to share your experience!</p>
            )}
          </div>

          <div className="max-w-xl mx-auto py-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-grow bg-slate-200" />
              <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Post a Review</span>
              <div className="h-px flex-grow bg-slate-200" />
            </div>
            <ReviewForm onSuccess={fetchReviews} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding accent-gradient text-accent-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Secure Your Child's Route</h2>
          <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto">
            Limited slots available for the academic year 2026-27. Register now to guarantee a safe commute.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold px-8 hover:bg-primary/90 shadow-lg">
                Register Online
              </Button>
            </Link>
            <a href="tel:9500595550">
              <Button size="lg" variant="outline" className="bg-transparent border-accent-foreground/30 text-accent-foreground hover:bg-white hover:text-accent font-bold px-8 shadow-sm">
                <Phone className="mr-2 h-4 w-4" /> 9500595550
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* School Enquiry Modal */}
      <BookingModal
        preSelectedSchool={selectedSchool}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </main>
  );
};

export default Index;
