import { Phone, MapPin, Clock, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import cityImg from "@/assets/city-travel.jpg";

const Contact = () => {
  return (
    <main className="pt-20">
      <section className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cityImg})` }} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Contact Us</h1>
          <p className="text-primary-foreground/70 mt-2">Get in touch with KRS CABS</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="Get In Touch" subtitle="We're here to help you with your travel needs." />
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone", content: "9500595550", href: "tel:9500595550" },
                { icon: Mail, title: "Email", content: "info@krscabs.com", href: "mailto:info@krscabs.com" },
                {
                  icon: MapPin,
                  title: "Address",
                  content: "5A, Siddhivinayakar Colony, Siruvani Road, Vadavalli – 641041",
                },
                { icon: Clock, title: "Working Hours", content: "24/7 — Available Round the Clock" },
              ].map((item) => (
                <div key={item.title} className="glass-card p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl accent-gradient flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-accent hover:underline text-sm">{item.content}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-display font-bold mb-6">Send us a Message</h3>
              <ContactForm />
            </div>

            {/* Map */}
            <div className="glass-card overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.284474743784!2d76.90157907504538!3d11.01726998914651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAxJzAyLjIiTiA3NsKwNTQnMTUuMCJF!5e0!3m2!1sen!2sin!4v1773229943958!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="KRS CABS Location"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
