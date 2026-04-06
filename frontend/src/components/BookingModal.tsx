import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import BookingForm from "./BookingForm";

interface BookingModalProps {
    preSelectedSchool?: string;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}

const BookingModal = ({ preSelectedSchool, isOpen: externalIsOpen, onOpenChange }: BookingModalProps) => {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    
    // Use external state if provided, otherwise use internal state
    const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
    const setIsOpen = (open: boolean) => {
        if (onOpenChange) {
            onOpenChange(open);
        } else {
            setInternalIsOpen(open);
        }
    };

    useEffect(() => {
        // Only show modal automatically if no external control is provided
        if (externalIsOpen === undefined) {
            const timer = setTimeout(() => {
                const hasSeenModal = sessionStorage.getItem("hasSeenBookingModal");
                if (!hasSeenModal) {
                    setIsOpen(true);
                    sessionStorage.setItem("hasSeenBookingModal", "true");
                }
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [externalIsOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden bg-white border-0 shadow-2xl">
                <div className="bg-primary p-6 text-white">
                    <DialogTitle className="text-2xl font-display font-bold">Safe Travels for Your Child</DialogTitle>
                    <DialogDescription className="text-white/80 mt-1">
                        Register now for our dedicated school pickup and drop service.
                    </DialogDescription>
                </div>
                <div className="p-6">
                    <BookingForm variant="modal" onSuccess={() => setIsOpen(false)} preSelectedSchool={preSelectedSchool} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;
