import { useState } from "react";
import { User, MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ReviewFormProps {
    onSuccess?: () => void;
}

const ReviewForm = ({ onSuccess }: ReviewFormProps) => {
    const [form, setForm] = useState({
        name: "",
        review: "",
        rating: 5,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.review) {
            toast.error("Please fill in all fields.");
            return;
        }

        setIsSubmitting(true);
        try {
            const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
            const response = await fetch(`${baseUrl}/api/reviews`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                toast.success("Thank you for your review!");
                setForm({ name: "", review: "", rating: 5 });
                if (onSuccess) onSuccess();
            } else {
                toast.error("Failed to submit review. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting review:", error);
            toast.error("Connecting to server failed. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const update = (key: string, value: string | number) =>
        setForm((prev) => ({ ...prev, [key]: value }));

    return (
        <div className="bg-card/95 backdrop-blur-lg rounded-2xl p-6 shadow-[var(--shadow-elevated)] max-w-2xl mx-auto border border-slate-100">
            <h3 className="text-xl font-display font-bold text-foreground mb-4 text-center">
                Share Your Experience
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="pl-10 h-12"
                        required
                    />
                </div>

                <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                        placeholder="Your Review"
                        value={form.review}
                        onChange={(e) => update("review", e.target.value)}
                        className="pl-10 min-h-[100px] py-3"
                        required
                    />
                </div>

                <div className="flex items-center gap-4 py-2">
                    <span className="text-sm font-medium text-muted-foreground">Rating:</span>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => update("rating", star)}
                                className="focus:outline-none transition-transform hover:scale-110"
                            >
                                <Star
                                    className={`h-6 w-6 ${star <= form.rating
                                        ? "fill-accent text-accent"
                                        : "text-muted border-slate-200"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full accent-gradient text-white font-bold text-base h-12 border-0 hover:opacity-90 transition-opacity shadow-lg"
                >
                    {isSubmitting ? "Submitting..." : "Post Review"}
                </Button>
            </form>
        </div>
    );
};

export default ReviewForm;
