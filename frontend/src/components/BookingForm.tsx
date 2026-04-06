import { useState, useEffect } from "react";
import { User, School, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// FormSubmit.co - Free form forwarding service
// No API key needed - just set your destination email
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/sakthiks555@gmail.com";

interface BookingFormProps {
  variant?: "hero" | "page" | "modal";
  onSuccess?: () => void;
  preSelectedSchool?: string;
}

const BookingForm = ({ variant = "hero", onSuccess, preSelectedSchool }: BookingFormProps) => {
  const [form, setForm] = useState({
    parentName: "",
    studentName: "",
    schoolName: preSelectedSchool || "",
    pickupLocation: "",
    phone: "",
    serviceType: "Both Ways",
  });

  // Update schoolName when preSelectedSchool changes
  useEffect(() => {
    if (preSelectedSchool) {
      setForm((prev) => ({ ...prev, schoolName: preSelectedSchool }));
    }
  }, [preSelectedSchool]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data for FormSubmit.co
    const payload = {
      "Parent Name": form.parentName,
      "Student Name": form.studentName,
      "School Name": form.schoolName,
      "Pickup Location": form.pickupLocation,
      "Phone": form.phone,
      "Service Type": form.serviceType,
      _subject: `New School Service Registration: ${form.studentName}`,
      _template: "table",
      _captcha: "false"
    };

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Registration submitted successfully! We will contact you soon.");
        setForm({
          parentName: "",
          studentName: "",
          schoolName: "",
          pickupLocation: "",
          phone: "",
          serviceType: "Both Ways",
        });
        if (onSuccess) onSuccess();
      } else {
        const data = await response.json();
        console.error("FormSubmit Error:", data);
        toast.error("Failed to submit. Please try again or contact us via phone.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const isPage = variant === "page";
  const isModal = variant === "modal";

  return (
    <form
      onSubmit={handleSubmit}
      className={`${isPage || isModal ? "p-2" : "bg-card/95 backdrop-blur-lg rounded-2xl p-6 shadow-[var(--shadow-elevated)]"
        } space-y-4`}
    >
      {(isPage || isModal) && (
        <h2 className="text-2xl font-display font-bold text-foreground mb-4">
          Register for school service
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Parent/Guardian Name"
            value={form.parentName}
            onChange={(e) => update("parentName", e.target.value)}
            className="pl-10"
            required
          />
        </div>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent" />
          <Input
            placeholder="Student Name"
            value={form.studentName}
            onChange={(e) => update("studentName", e.target.value)}
            className="pl-10"
            required
          />
        </div>
        <div className="relative">
          <School className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <select
            value={form.schoolName}
            onChange={(e) => update("schoolName", e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            required
          >
            <option value="" disabled>Select School</option>
            <option value="Sri Chaitanya Techno School, Vadavalli">Sri Chaitanya Techno School, Vadavalli</option>
            <option value="Bharatiya Vidya Bhavan (R.S. Puram)">Bharatiya Vidya Bhavan (R.S. Puram)</option>
            <option value="Bharatiya Vidya Bhavans Public School (CBSE), Ajjanu">Bharatiya Vidya Bhavans Public School (CBSE), Ajjanu</option>
          </select>
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pickup Address"
            value={form.pickupLocation}
            onChange={(e) => update("pickupLocation", e.target.value)}
            className="pl-10"
            required
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Contact Number"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="pl-10"
            required
          />
        </div>
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <select
            value={form.serviceType}
            onChange={(e) => update("serviceType", e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            required
          >
            <option value="Both Ways">Both Ways (Pickup & Drop)</option>
            <option value="Pickup Only">Pickup only (Home to School)</option>
            <option value="Drop Only">Drop only (School to Home)</option>
          </select>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full accent-gradient text-white font-bold text-base h-12 border-0 hover:opacity-90 transition-opacity shadow-lg"
      >
        Submit Registration
      </Button>
    </form>
  );
};

export default BookingForm;

