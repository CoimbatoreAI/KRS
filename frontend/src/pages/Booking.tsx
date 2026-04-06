import BookingForm from "@/components/BookingForm";
import SectionHeading from "@/components/SectionHeading";
import { Phone, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-taxi.jpg";

const Booking = () => {
  return (
    <main className="pt-20">
      <section className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">School Service</h1>
          <p className="text-primary-foreground/70 mt-2">Registration for academic year 2026-27</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-2xl">
          <SectionHeading title="Service Registration" subtitle="Register your child for dedicated school transportation." />
          <BookingForm variant="page" />

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <a
              href="tel:9500595550"
              className="glass-card p-6 flex items-center gap-4 hover:shadow-[var(--shadow-elevated)] transition-shadow"
            >
              <div className="h-12 w-12 rounded-full accent-gradient flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Call to Book</p>
                <p className="text-accent font-bold">9500595550</p>
              </div>
            </a>
            <a
              href="https://wa.me/919500595550?text=Hi%2C%20I%20want%20to%20book%20a%20cab"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center gap-4 hover:shadow-[var(--shadow-elevated)] transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.39-4.412 9.762-9.785 9.862m8.411-18.472A11.595 11.595 0 0012.057 0C5.395 0 .016 5.38 0 12.042c0 2.13.554 4.21 1.61 6.062L0 24l6.135-1.61a11.531 11.531 0 005.918 1.623h.005c6.649 0 12.031-5.38 12.034-12.043.002-3.23-1.258-6.26-3.543-8.544z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm">WhatsApp Booking</p>
                <p className="text-[#25D366] font-bold">Chat Now</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
