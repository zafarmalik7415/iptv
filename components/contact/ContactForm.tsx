"use client";

import { useState } from "react";

import { Button, Icon } from "@/components/ui";
import { contact } from "@/lib/content";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", topic: "presales", message: "" });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Demo only: no backend wired up yet. Simulate a request, then offer a
    // mailto fallback so the message is never lost.
    setTimeout(() => setStatus("sent"), 700);
  }

  if (status === "sent") {
    const body = encodeURIComponent(
      `Name: ${form.name}\nTopic: ${form.topic}\n\n${form.message}`,
    );
    return (
      <div className="card p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-lg font-semibold">Thanks, {form.name || "there"}!</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-white/60">
          This demo form isn’t connected to a mailbox yet. Send the same details
          straight to our team using the button below and we’ll reply fast.
        </p>
        <Button
          href={`mailto:${contact.email}?subject=Website%20enquiry&body=${body}`}
          className="mt-5"
        >
          <Icon name="mail" className="h-4 w-4" />
          Email {contact.email}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name">
          <input
            required
            value={form.name}
            onChange={update("name")}
            className={inputCls}
            placeholder="Alex Doe"
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            className={inputCls}
            placeholder="you@email.com"
          />
        </Field>
      </div>

      <Field label="What's this about?">
        <select value={form.topic} onChange={update("topic")} className={inputCls}>
          <option value="presales">Before I subscribe</option>
          <option value="setup">Setup help</option>
          <option value="billing">Billing / refund</option>
          <option value="channel">Channel request</option>
          <option value="other">Something else</option>
        </select>
      </Field>

      <Field label="Message">
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={`${inputCls} resize-y`}
          placeholder="Tell us which device you use and what you'd like to watch…"
        />
      </Field>

      <Button type="submit" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
      <p className="text-center text-xs text-white/40">
        We reply to every message. {contact.responseTime}.
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/12 bg-white/[0.03] px-3.5 py-2.5 text-sm outline-none placeholder:text-white/30 focus:border-brand-2/60";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-white/55">
        {label}
      </span>
      {children}
    </label>
  );
}
