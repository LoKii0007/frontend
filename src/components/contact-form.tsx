"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectDetails: string;
};

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setSubmitStatus("success");
      reset();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        error.message || "Something went wrong. Please try again.",
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
      <div className="mb-8 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
          Start Your Project
        </h2>
        <p className="text-white/60 text-sm md:text-base">
          Tell us about your vision, and we'll help you build it.
        </p>
      </div>

      {submitStatus === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-white/60 mb-6">
            We've received your project details and will get back to you
            shortly.
          </p>
          <button
            onClick={() => setSubmitStatus("idle")}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-white/80 ml-1"
              >
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`w-full bg-black/20 border ${errors.name ? "border-red-500" : "border-white/10 focus:border-accent"} rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-200`}
                placeholder="John Doe"
              />
              {errors.name && (
                <span className="text-xs text-red-500 ml-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.name.message}
                </span>
              )}
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label
                htmlFor="company"
                className="text-sm font-medium text-white/80 ml-1"
              >
                Company{" "}
                <span className="text-white/40 font-normal">(Optional)</span>
              </label>
              <input
                id="company"
                {...register("company")}
                className="w-full bg-black/20 border border-white/10 focus:border-accent rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-200"
                placeholder="Acme Inc."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-white/80 ml-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full bg-black/20 border ${errors.email ? "border-red-500" : "border-white/10 focus:border-accent"} rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-200`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <span className="text-xs text-red-500 ml-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-white/80 ml-1"
              >
                Phone{" "}
                <span className="text-white/40 font-normal">(Optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full bg-black/20 border border-white/10 focus:border-accent rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-200"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <label
              htmlFor="projectDetails"
              className="text-sm font-medium text-white/80 ml-1"
            >
              Tell us more about your project
            </label>
            <textarea
              id="projectDetails"
              rows={4}
              {...register("projectDetails", {
                required: "Please tell us a bit about your project",
              })}
              className={`w-full bg-black/20 border ${errors.projectDetails ? "border-red-500" : "border-white/10 focus:border-accent"} rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-200 resize-none`}
              placeholder="We need a custom web application for..."
            />
            {errors.projectDetails && (
              <span className="text-xs text-red-500 ml-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />{" "}
                {errors.projectDetails.message}
              </span>
            )}
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-black font-bold uppercase tracking-wider py-4 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Submit Inquiry"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
