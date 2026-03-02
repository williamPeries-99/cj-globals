import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DESTINATIONS } from "../constants";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const DestinationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const destination = DESTINATIONS.find((d) => d.id === id);

  if (!destination) {
    return (
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Destination Not Found
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          The destination you are looking for is unavailable or has been moved.
        </p>
        <button
          type="button"
          className="mt-8 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
          onClick={() => navigate(-1)}
        >
          Back to Destinations
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 pb-16">
      <section className="relative h-72 w-full overflow-hidden sm:h-96">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col">
            <p className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur font-heading">
              Study in
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl font-heading">
              {destination.name}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-100 sm:text-base">
              {destination.description}
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pt-10 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 backdrop-blur p-6 shadow-[0_18px_60px_rgba(2,6,23,0.08)] sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-primary font-heading">
            Key Benefits
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            {destination.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="h-4 w-4 text-accent mt-1 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 backdrop-blur p-6 shadow-[0_18px_60px_rgba(2,6,23,0.08)] sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-primary font-heading">
            Application Steps
          </h2>
          <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            {destination.process.map((step, idx) => (
              <li
                key={step}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-semibold">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 backdrop-blur p-6 shadow-[0_18px_60px_rgba(2,6,23,0.08)] sm:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-primary font-heading">
              Ready to apply?
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              We’ll shortlist universities, guide your application, and support your visa process end-to-end.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary shadow-glow hover:bg-primary hover:text-white transition-colors"
              onClick={() =>
                navigate(
                  `/apply?country=${encodeURIComponent(destination.name)}`
                )
              }
            >
              Apply for {destination.name}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-colors"
              onClick={() => navigate(-1)}
            >
              Back to Destinations
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DestinationDetails;

