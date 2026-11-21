
import { useEffect, useState } from "react";
import { TrendingUp, ArrowRight } from "lucide-react";

// IMPORTANT: Replace this example with the actual offer deadline.
const OFFER_DEADLINE = new Date("2026-12-01T23:59:59+01:00");

export default function G3CallToAction() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const difference = OFFER_DEADLINE.getTime() - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        setExpired(true);
        return;
      }

      setExpired(false);

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTime();

    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HRS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#050B1C] px-5 py-20 text-center md:py-24">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFBD24]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">

        {/* URGENCY ICON */}
        <div className="mb-6 text-[#FFBD24]">
          <TrendingUp size={38} strokeWidth={2.5} />
        </div>

        {/* HEADLINE */}
        <h2 className="max-w-4xl text-[32px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[48px]">
          Don't Wait Until It's Too Late to Shape Her Future.
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-[1.9] text-gray-300 sm:text-base">
          Your daughter deserves the right guidance, knowledge
          and confidence to navigate life. Give her the tools
          she needs to grow into a confident, purposeful and
          responsible young woman.
        </p>

        {/* OFFER DEADLINE */}
        <p className="mt-7 text-sm font-medium text-gray-300">
          {expired
            ? "This offer has ended."
            : "The G3 special offer closes in:"}
        </p>

        {/* COUNTDOWN */}
        <div className="mt-5 flex items-center justify-center gap-2.5 sm:gap-3">

          {countdownItems.map((item) => (
            <div
              key={item.label}
              className="flex h-[72px] w-[72px] flex-col items-center justify-center rounded-xl border border-white/10 bg-[#131A2B] sm:h-[82px] sm:w-[82px]"
            >
              <span className="text-[28px] font-black leading-none tracking-tight text-white sm:text-[34px]">
                {String(item.value).padStart(2, "0")}
              </span>

              <span className="mt-2 text-[9px] font-medium tracking-wide text-gray-400 sm:text-[10px]">
                {item.label}
              </span>
            </div>
          ))}

        </div>

        {/* CTA BUTTON */}
        <a
          href="#books"
          className={`mt-8 inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-[17px] text-[15px] font-bold text-[#050B1C] shadow-[0_12px_35px_rgba(255,189,36,0.25)] transition-all duration-300 ${
            expired
              ? "pointer-events-none cursor-not-allowed bg-gray-400 opacity-60"
              : "bg-[#FFBD24] hover:-translate-y-1 hover:bg-[#FFD05A] hover:shadow-[0_15px_40px_rgba(255,189,36,0.35)]"
          }`}
          aria-disabled={expired}
          onClick={(e) => {
            if (expired) e.preventDefault();
          }}
        >
          {expired ? "Offer Closed" : "Rserve Her Spot Now"}
          {!expired && <ArrowRight size={19} />}
        </a>

        {/* BOTTOM MESSAGE */}
        <p className="mt-5 max-w-md text-xs leading-relaxed text-gray-500">
          Don't miss the opportunity to invest in the girl
          she's becoming.
        </p>

      </div>
    </section>
  );
}