import { Icon } from "@/components/ui";
import { durationPlans, planFeatures, whatsappPlanLink } from "@/lib/content";

/**
 * The four per term plans (1, 3, 6, 12 months). Shared by the home page and
 * the pricing page so they never drift apart. Buying goes through WhatsApp.
 */
export function PlanCards() {
  return (
    <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {durationPlans.map((plan) => (
        <div
          key={plan.id}
          className={`card relative flex flex-col p-6 transition-transform duration-200 hover:-translate-y-1 ${
            plan.featured
              ? "border-brand-2/60 bg-gradient-to-b from-brand-2/[0.16] to-brand-3/[0.06] shadow-xl shadow-brand-3/10 lg:-translate-y-2 lg:hover:-translate-y-3"
              : ""
          }`}
        >
          {plan.badge ? (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-1 to-brand-3 px-3 py-1 text-[11px] font-semibold text-[#1a0f07] shadow-lg shadow-brand-3/30">
              {plan.badge}
            </span>
          ) : null}

          <h3 className="text-base font-semibold text-white/80">{plan.label}</h3>
          <p className="mt-2 flex items-baseline gap-1">
            <span className="text-4xl font-bold">£{plan.price}</span>
            <span className="text-sm text-white/45">
              {plan.months === 1 ? "/month" : `/${plan.months} months`}
            </span>
          </p>

          <ul className="mt-5 space-y-2.5 text-sm">
            {planFeatures.map((item) => (
              <li key={item} className="flex gap-2 text-white/70">
                <Icon
                  name="check"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={whatsappPlanLink(plan.label, plan.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-1 to-brand-3 px-5 py-2.5 text-sm font-semibold text-[#1a0f07] transition-transform hover:-translate-y-0.5"
          >
            <svg
              viewBox="0 0 32 32"
              className="h-4 w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.745 3.047 9.377L1.05 31.3l6.13-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.31 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.386-.394.98-.574 1.55-.574.184 0 .35.01.5.016.44.02.66.046.95.74.362.87 1.242 3.166 1.348 3.388.108.222.216.522.066.832-.14.32-.264.454-.486.708-.222.254-.432.45-.654.722-.204.238-.434.492-.178.932.256.43 1.138 1.876 2.446 3.04 1.688 1.502 3.078 1.976 3.562 2.178.36.15.79.114 1.052-.168.334-.36.744-.958 1.162-1.548.296-.42.67-.472 1.062-.324.4.14 2.53 1.192 2.964 1.408.434.216.722.32.83.5.106.184.106 1.048-.28 2.14Z" />
            </svg>
            Buy via WhatsApp
          </a>
        </div>
      ))}
    </div>
  );
}
