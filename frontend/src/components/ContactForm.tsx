import { useState } from "react";
import { User, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// FormSubmit.co - Free form forwarding service
// No API key needed - just set your destination email
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/sakthiks555@gmail.com";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare data for FormSubmit.co
        const payload = {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
            _subject: `New Contact Message: ${form.subject}`,
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
                toast.success("Message sent successfully! We will get back to you soon.");
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                const data = await response.json();
                console.error("FormSubmit Error:", data);
                toast.error("Failed to send message. Please try again or contact us via phone.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("An error occurred. Please try again later.");
        }
    };

    const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="pl-10 h-11"
                    required
                />
            </div>
            <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Email Address"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="pl-10 h-11"
                    required
                />
            </div>
            <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className="pl-10 h-11"
                    required
                />
            </div>
            <div className="relative">
                <Textarea
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="min-h-[120px] pt-3"
                    required
                />
            </div>
            <Button type="submit" className="w-full accent-gradient text-white font-bold h-12 shadow-lg">
                Send Message
            </Button>
        </form>
    );
};

export default ContactForm;
