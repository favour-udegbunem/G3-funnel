
import {
  HeartHandshake,
  MessageCircle,
  Lightbulb,
  UsersRound,
} from 'lucide-react'

const benefits = [
  {
    icon: Lightbulb,
    title: 'Discover Her Potential',
    description:
      'Help your daughter recognise her strengths, discover her gifts and develop confidence in who she is.',
  },
  {
    icon: MessageCircle,
    title: 'Guidance That Matters',
    description:
      'Give her access to mentorship, encouragement and guidance as she navigates important stages of growing up.',
  },
  {
    icon: HeartHandshake,
    title: 'Practical Growth',
    description:
      'Go beyond theory with personal development, leadership and essential life skills she can apply in everyday life.',
  },
  {
    icon: UsersRound,
    title: 'A Community That Supports Her',
    description:
      'Connect her with other girls, positive role models and a community that encourages learning, growth and purpose.',
  },
]

export default function WhyG3() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050d21] px-5 py-20 text-white sm:py-24">

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,75,150,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1024px]">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-11">

          <p className="mb-4 text-[12px] font-extrabold tracking-[3px] text-[#008cff]">
            WHY G3 MENTORSHIP
          </p>

          <h2 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            She needs guidance, not just information.
          </h2>

        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <div
                key={index}
                className="min-h-[154px] rounded-[18px] border border-white/10 bg-[#111c35] px-6 py-6 transition-all duration-300 hover:border-[#BD98F7]/50 hover:bg-[#172440]"
              >

                {/* Icon */}
                <div className="mb-4 text-[#008cff]">
                  <Icon size={31} strokeWidth={1.9} />
                </div>

                {/* Card title */}
                <h3 className="mb-1.5 text-[18px] font-extrabold text-white">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[1.7] text-[#c1c9d9] sm:text-[15px]">
                  {benefit.description}
                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}