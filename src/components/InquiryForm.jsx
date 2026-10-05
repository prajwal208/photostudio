import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import siteConfig from "../config/siteConfig";
import {
  coverageOptions,
  eventTypes,
  guestOptions,
  referralOptions,
  serviceParamToEvent,
} from "../data/inquiryOptions";
import { submitInquiry } from "../utils/inquiry";

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-ink";

function Field({ id, label, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-[11px] uppercase tracking-[0.2em] text-muted">
        {label}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      <div className="mt-1">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-blush" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function InquiryForm() {
  const [params] = useSearchParams();
  const [status, setStatus] = useState("idle");
  const [via, setVia] = useState("");
  const preselected = serviceParamToEvent[params.get("service")] || "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      partnerName: "",
      email: "",
      phone: "",
      eventType: preselected,
      eventDate: "",
      location: "",
      guestCount: "",
      coverage: "",
      referral: "",
      message: "",
      company: "",
    },
  });

  useEffect(() => {
    if (preselected) {
      reset((current) => ({ ...current, eventType: preselected }));
    }
  }, [preselected, reset]);

  const onSubmit = async (values) => {
    if (values.company) return;
    setStatus("idle");
    try {
      const result = await submitInquiry(values);
      setVia(result.via);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success" && via === "api") {
    return (
      <div className="py-8" role="status">
        <h2 className="font-serif text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.92] font-medium">
          Thank you.
          <br />
          Your story is now in my inbox.
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-muted">
          I read every note myself and reply {siteConfig.responseTime}. If your date is close, write that in the
          subject and I will look sooner.
        </p>
      </div>
    );
  }

  if (status === "success" && via === "mailto") {
    return (
      <div className="py-8" role="status">
        <h2 className="font-serif text-[clamp(2.6rem,5vw,4.2rem)] leading-[0.95] font-medium">
          Your note is ready to send.
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-muted">
          A draft has opened in your email app, addressed to {siteConfig.email}. Send it and it comes straight to
          me. I reply {siteConfig.responseTime}.
        </p>
        <button
          type="button"
          className="mt-8 border-b border-current pb-1 text-[11px] uppercase tracking-[0.24em]"
          onClick={() => setStatus("idle")}
        >
          Edit the note
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-8">
      <p className="sr-only" aria-live="polite">
        {status === "error" ? "The inquiry could not be sent. Please try again or email directly." : ""}
      </p>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name", { required: "Please tell me your name." })}
          />
        </Field>
        <Field id="partnerName" label="Partner name" error={errors.partnerName?.message}>
          <input id="partnerName" type="text" autoComplete="off" className={fieldClass} {...register("partnerName")} />
        </Field>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Field id="email" label="Email" required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email", {
              required: "An email is needed so I can reply.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "That email does not look complete.",
              },
            })}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            aria-invalid={errors.phone ? "true" : "false"}
            {...register("phone", {
              validate: (value) =>
                !value || /^[0-9+\s()-]{8,}$/.test(value) || "Please check the phone number.",
            })}
          />
        </Field>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Field id="eventType" label="Event type" required error={errors.eventType?.message}>
          <select
            id="eventType"
            className={fieldClass}
            aria-invalid={errors.eventType ? "true" : "false"}
            {...register("eventType", { required: "Choose the kind of session." })}
          >
            <option value="">Select</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field id="eventDate" label="Event date">
          <input id="eventDate" type="date" className={fieldClass} {...register("eventDate")} />
        </Field>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Field id="location" label="Location">
          <input id="location" type="text" className={fieldClass} {...register("location")} />
        </Field>
        <Field id="guestCount" label="Estimated guest count">
          <select id="guestCount" className={fieldClass} {...register("guestCount")}>
            <option value="">Select</option>
            {guestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Field id="coverage" label="Photography coverage">
          <select id="coverage" className={fieldClass} {...register("coverage")}>
            <option value="">Select</option>
            {coverageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field id="referral" label="How did you hear about us?">
          <select id="referral" className={fieldClass} {...register("referral")}>
            <option value="">Select</option>
            {referralOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Tell me about your plans" required error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          className={`${fieldClass} resize-y`}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message", {
            required: "A few lines about the day help me reply properly.",
            minLength: { value: 12, message: "Tell me a little more, even a sentence or two." },
          })}
        />
      </Field>

      {status === "error" ? (
        <p className="text-sm text-blush" role="alert">
          Something interrupted the send. Please try again, or email {siteConfig.email} directly.
        </p>
      ) : null}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="border border-ink px-8 py-3 text-[11px] uppercase tracking-[0.28em] disabled:opacity-50"
        >
          {isSubmitting ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}
