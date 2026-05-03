"use client";

import React, { useState } from "react";
import { 
  Button, 
  Modal, 
  Input, 
  Textarea, 
  useDisclosure, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter 
} from "@heroui/react";
import { Rocket } from "@gravity-ui/icons";
import { toast } from "react-toastify";

const BookingModal = ({ status }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
     
      console.log("Booking Data:", payload);
      await new Promise((resolve) => setTimeout(resolve, 1000)); 

      toast.success("Booking confirmed successfully!");
      onClose(); 
    } catch (error) {
      toast.error("Failed to confirm booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     
      <button
        disabled={status !== "Available"}
        onClick={onOpen} 
        className={`flex-1 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg ${
          status === "Available"
            ? "bg-green-600 text-white hover:bg-green-700 active:scale-95"
            : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
      >
        {status === "Available" ? "Booking" : "Already Booked"}
      </button>

     
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        backdrop="blur" 
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleBooking}>
              <ModalHeader className="flex items-center gap-2">
                <Rocket className="text-green-600" />
                <span>Confirm Your Purchase</span>
              </ModalHeader>

              <ModalBody className="gap-4">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Your full name"
                  variant="bordered"
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  variant="bordered"
                  required
                />
                <Input
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  variant="bordered"
                  required
                />
                <Textarea
                  label="Shipping Address"
                  name="address"
                  placeholder="Enter full address"
                  variant="bordered"
                  required
                />
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button 
                  color="success" 
                  type="submit" 
                  isLoading={loading}
                  className="text-white font-bold"
                >
                  Confirm Booking
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookingModal;