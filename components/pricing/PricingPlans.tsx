"use client";

import { useState } from "react";

import { Button, Icon } from "@/components/ui";
import {
  billingOptions,
  formatGbp,
  plans,
  priceForCycle,
  totalForCycle,
  type BillingKey,
} from "@/lib/content";

export function PricingPlans() {
  const [billing, setBilling] = useState<BillingKey>("yearly");
  const option = billingOptions.find((b) => b.key === billing)!;

  return (
    <div>
      {/* billing toggle */}
      <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
        {billingOptions.map((b) => (
          <button
            key={b.key}
            type="button"
            onClick={() => setBilling(b.key)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              billing === b.key
                ? "bg-white text-[#0a0a0c]"
                : "text-white/60 hover:text-white"
            }`}
          >
            {b.label}
            {b.note ? (
              <span
                className={`ml-1.5 text-xs ${
                  billing === b.key ? "text-brand-2" : "text-brand-3"
                }`}
              >
                {b.note}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => {
          const perMonth = priceForCycle(plan.monthlyPrice, option.discount);
          const total = totalForCycle(
            plan.monthlyPrice,
            option.discount,
            option.months,
          );
          return (
            <div
              key={plan.id}
              className={`card relative flex flex-col p-6 ${
                plan.featured ? "border-brand-2/60 bg-brand-2/[0.06]" : ""
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-brand-1 to-brand-3 px-3 py-1 text-[11px] font-semibold text-white">
                  Most popular
                </span>
              ) : null}

              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-white/55">{plan.tagline}</p>

              <p className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{formatGbp(perMonth)}</span>
                <span className="text-sm text-white/50">/mo</span>
              </p>
              <p className="mt-1 text-xs text-white/45">
                {billing === "monthly"
                  ? "Billed monthly"
                  : `${formatGbp(total)} billed every ${option.months} months`}
              </p>
              <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60">
                <Icon name="devices" className="h-3.5 w-3.5" />
                {plan.connections}{" "}
                {plan.connections === 1 ? "connection" : "connections"}
              </p>

              <ul className="mt-6 space-y-2.5 text-sm">
                {plan.features.map((item) => (
                  <li key={item} className="flex gap-2 text-white/70">
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={plan.featured ? "primary" : "ghost"}
                className="mt-7 w-full"
              >
                Get {plan.name}
              </Button>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-white/40">
        Prices in GBP and include VAT where it applies.
      </p>
    </div>
  );
}
