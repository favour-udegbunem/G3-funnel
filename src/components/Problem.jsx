
import { X } from 'lucide-react'

const challenges = [
  "Your daughter has so much potential, but sometimes struggles to recognise her own worth and abilities.",
  "You're concerned about the influences around her and wish she had the right mentors and positive role models.",
  "She is growing up, but may not yet have the confidence, leadership skills and life skills to navigate life's challenges.",
  "You want her to make informed decisions about her future, discover her purpose and become a responsible young woman.",
]

export default function Problem() {
  return (
    <section className="w-full bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-[1024px]">

        {/* Section heading */}
        <h2 className="mb-10 text-center text-3xl leading-tight font-black tracking-tight text-[#10051f] sm:mb-11 sm:text-4xl md:text-5xl">
          Does this sound like your daughter?
        </h2>

        {/* Challenges grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="flex min-h-[98px] items-start gap-4 rounded-[18px] border border-[#dce2ed] bg-white px-5 py-5 transition-all duration-300 hover:border-[#BD98F7] hover:shadow-md sm:px-5"
            >
              {/* X icon */}
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fee7e8]">
                <X size={17} strokeWidth={2} className="text-[#f04452]" />
              </div>

              {/* Challenge text */}
              <p className="text-[15px] leading-[1.75] font-normal text-[#151225] sm:text-base">
                {challenge}
              </p>
            </div>
          ))}

        </div>

        {/* Closing statement */}
        <p className="mt-10 text-center text-lg leading-relaxed font-bold text-[#10051f] sm:mt-11 sm:text-xl">
          Your daughter has the potential to become so much more.{' '}
          <span className="text-[#3A8BFA]">
            She needs the right mentorship, knowledge and opportunities to discover and develop that potential.
          </span>
        </p>

      </div>
    </section>
  )
}