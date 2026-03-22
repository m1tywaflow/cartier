"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormValues,
} from "@/components/atoms/Zod/schemas";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
  };

  return (
    <section className=" bg-white text-black">
      <div className="max-w-3xl mx-auto text-black">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6 border p-4 rounded-2xl"
        >
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-4 rounded-2xl">
            <div className="flex flex-col">
              <label className="mb-2 text-sm text-gray-700">First name</label>
              <input
                type="text"
                placeholder="John"
                {...register("firstName")}
                className="border-b border-gray-300 py-2 focus:outline-none focus:border-black transition"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            <div className="flex flex-col ">
              <label className="mb-2 text-sm text-gray-700">Last name</label>
              <input
                type="text"
                placeholder="Doe"
                {...register("lastName")}
                className="border-b border-gray-300 py-2 focus:outline-none focus:border-black transition"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col  border p-4 rounded-2xl">
            <label className="mb-2 text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className="border-b border-gray-300 py-2 focus:outline-none focus:border-black transition"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col border p-4 rounded-2xl ">
            <label className="mb-2 text-sm text-gray-700">Message</label>
            <textarea
              placeholder="Write your message..."
              rows={4}
              {...register("message")}
              className="border-b border-gray-300 py-2 focus:outline-none focus:border-black transition resize-none"
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 border border-black py-3 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};
