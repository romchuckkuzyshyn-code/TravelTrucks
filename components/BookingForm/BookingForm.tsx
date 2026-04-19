"use client";
import { useMutation } from "@tanstack/react-query";
import css from "./BookingForm.module.css";
import { createBooking } from "../../lib/api";
import { toast } from "react-toastify";

interface BookingFormProps {
  id: string;
}
type BookingData = {
  name: string;
  email: string;
};
const BookingForm = ({ id }: BookingFormProps) => {
  function handleSubmit(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    mutate({ name, email });
  }
  const { mutate, isPending } = useMutation({
    mutationKey: ["createBooking", id],
    mutationFn: ({ name, email }: BookingData) =>
      createBooking(id, { name, email }),

    onSuccess: () => {
      toast.success("Booking request sent successfully 🚐");
    },

    onError: () => {
      toast.error("Something went wrong 😢");
    },
  });
  return (
    <form className={css.form} action={handleSubmit}>
      <div className={css.formHeader}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.descr}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={css.inputs}>
        <input
          className={css.inputName}
          type="text"
          name="name"
          placeholder="Name*"
          required
          minLength={3}
          maxLength={10}
        />
        <input
          className={css.inputName}
          type="email"
          name="email"
          placeholder="Email*"
          required
        />
      </div>
      <button className={css.btn} type="submit" disabled={isPending}>
        Send
      </button>
    </form>
  );
};

export default BookingForm;
