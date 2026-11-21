
import { useRef, useState } from 'react'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  VolumeX,
} from 'lucide-react'

const testimonials = [
  { id: 1, name: 'Parent Testimonial', role: 'Parent / Guardian' },
  { id: 2, name: 'Mentorship Story', role: 'G3 Mentorship Experience' },
  { id: 3, name: 'Girl Testimonial', role: 'Programme Participant' },
  { id: 4, name: 'Parent Testimonial', role: 'Parent / Guardian' },
  { id: 5, name: 'Mentorship Story', role: 'G3 Mentorship Experience' },
  { id: 6, name: 'Girl Testimonial', role: 'Programme Participant' },
]

function ProgrammeCard() {
  return (
    <div className="w-full max-w-[414px] overflow-hidden rounded-[21px] border border-[#E9A805]/40 bg-[#0d1730] shadow-[0_20px_45px_rgba(233,168,5,0.28)]">

      <div className="flex h-[35px] items-center justify-center gap-2 border-b border-white/10 bg-[#27282d] text-[11px] font-extrabold tracking-[2px] text-[#E9A805]">
        <span className="h-[9px] w-[9px] rounded-full bg-[#E9A805] shadow-[0_0_0_4px_rgba(233,168,5,0.15)]" />
        G3 MENTORSHIP PROGRAMME
      </div>

      <div className="px-4 pt-[17px] pb-[18px]">
        <h2 className="mb-1 text-[34px] font-black tracking-tight text-white">
          One Year
        </h2>

        <p className="mb-2.5 text-[14px] font-bold text-[#008cff]">
          A year of growth, guidance and mentorship
        </p>

        <span className="inline-block rounded-full bg-[#0084ff]/15 px-3 py-1 text-[10px] font-extrabold text-[#008cff]">
          ENROLMENT OPEN
        </span>
      </div>

      <div className="grid grid-cols-3 border-t border-white/10">
        {[
          { number: '01', label: 'YEAR' },
          { number: '12', label: 'MONTHS' },
          { number: '∞', label: 'POTENTIAL' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex h-[80px] flex-col items-center justify-center border-r border-white/10 last:border-r-0"
          >
            <span className="text-[27px] font-black leading-none text-white">
              {item.number}
            </span>
            <span className="mt-2 text-[9px] font-bold text-[#9ba5b9]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TestimonialCard({ item }) {
  return (
    <div className="w-[174px] shrink-0 snap-center sm:w-[190px]">
      {/* Video placeholder */}
      <div className="group relative h-[300px] overflow-hidden rounded-t-[17px] rounded-b-[17px] border border-white/15 bg-gradient-to-b from-[#30234a] via-[#171d36] to-[#080e20] sm:h-[366px]">

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
            <Play size={24} className="ml-1 text-white" />
          </div>

          <p className="text-[11px] font-extrabold tracking-[2px] text-[#E9A805]">
            VIDEO PLACEHOLDER
          </p>

          <p className="mt-2 text-xs leading-relaxed text-white/60">
            Add G3 testimonial video here
          </p>
        </div>

        {/* Video controls placeholder */}
        <div className="absolute right-0 bottom-0 left-0 flex items-center justify-center gap-3 bg-gradient-to-t from-black/70 to-transparent px-3 pt-12 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#071126]/90 text-white">
            <Play size={17} />
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#071126]/90 text-white">
            <VolumeX size={17} />
          </div>
        </div>
      </div>

      {/* Testimonial details */}
      <div className="mt-3 text-center">
        <p className="text-[13px] font-bold text-white">
          {item.name}
        </p>

        <p className="mt-1 text-[12px] leading-relaxed text-[#aeb9ce]">
          {item.role}
        </p>
      </div>
    </div>
  )
}

function Testimonials() {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollCarousel = (direction) => {
    const container = carouselRef.current
    if (!container) return

    const cardWidth = container.querySelector('.testimonial-card')
      ?.getBoundingClientRect().width

    if (!cardWidth) return

    container.scrollBy({
      left: direction * (cardWidth + 16),
      behavior: 'smooth',
    })

    setActiveIndex((current) =>
      Math.max(0, Math.min(5, current + direction))
    )
  }

  const goToSlide = (index) => {
    const container = carouselRef.current
    if (!container) return

    const cardWidth = container.querySelector('.testimonial-card')
      ?.getBoundingClientRect().width

    if (!cardWidth) return

    container.scrollTo({
      left: index * (cardWidth + 16),
      behavior: 'smooth',
    })

    setActiveIndex(index)
  }

  return (
    <div className="mt-[38px] w-full max-w-[590px]">

      {/* Testimonial heading */}
      <div className="mb-5 text-center">
        <p className="text-[12px] font-extrabold tracking-[2px] text-[#aeb9ce]">
          HEAR FROM OUR G3 FAMILIES
        </p>

        <p className="mt-1 text-[11px] font-extrabold tracking-[2px] text-[#E9A805]">
          REAL STORIES. REAL GROWTH.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="testimonial-card"
            >
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>

        {/* Previous button */}
        <button
          type="button"
          onClick={() => scrollCarousel(-1)}
          disabled={activeIndex === 0}
          aria-label="Previous testimonials"
          className="absolute top-[38%] -left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#101a30] text-white shadow-lg transition hover:bg-[#25304a] disabled:opacity-40"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next button */}
        <button
          type="button"
          onClick={() => scrollCarousel(1)}
          disabled={activeIndex === 5}
          aria-label="Next testimonials"
          className="absolute top-[38%] -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#101a30] text-white shadow-lg transition hover:bg-[#25304a] disabled:opacity-40"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Pagination */}
      <div className="mt-7 flex items-center justify-center gap-4">
        {testimonials.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? 'w-6 bg-[#E9A805]'
                : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050d21] px-5 pt-[58px] pb-[100px] text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_8%,rgba(0,75,150,0.25),transparent_48%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[850px] flex-col items-center text-center">

        {/* Eyebrow */}
        <p className="mb-[23px] text-[13px] font-extrabold tracking-[2.5px] text-[#E9A805]">
          G3 ONE-YEAR MENTORSHIP PROGRAMME
        </p>

        {/* Headline */}
        <h1 className="max-w-[830px] text-[clamp(38px,5.2vw,58px)] leading-[1.055] font-black tracking-[-2px] text-white max-sm:text-[clamp(34px,9vw,45px)] max-sm:leading-[1.08]">
          <span className="whitespace-nowrap text-[#E9A805]">
            ₦150,000
          </span>{' '}
          feels like a lot of money to invest in your daughter's future, but not exposing her to the right knowledge, mentorship and guidance might cost her more.
        </h1>

        {/* Supporting text */}
        <p className="mt-[19px] mb-[30px] max-w-[590px] text-[21px] leading-[1.45] font-normal text-[#c1c9d9] max-sm:mt-[18px] max-sm:mb-[27px] max-sm:text-[16px]">
          Join the G3 One-Year Mentorship Programme, and give your daughter the guidance, confidence, life skills and support she needs to navigate her teenage years and prepare for a purposeful future.
        </p>

        {/* Programme card */}
        <ProgrammeCard />

        {/* Price and CTA */}
        <div className="mt-[35px] flex flex-col items-center">

          <p className="mb-[17px] text-[15px] text-white">
            Investment{' '}
            <strong className="text-[21px] font-black">
              ₦150,000
            </strong>
          </p>

          <a
            href="#register"
            className="flex min-h-[56px] min-w-[233px] items-center justify-center gap-3 rounded-[13px] bg-[#E9A805] px-7 py-3 text-[15px] font-extrabold text-[#080d19] shadow-[0_10px_28px_rgba(233,168,5,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5bd25]"
          >
            Reserve My Seat
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Testimonial video carousel - still part of Hero */}
        <Testimonials />

      </div>
    </section>
  )
}
