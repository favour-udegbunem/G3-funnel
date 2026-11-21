
import {
  Award,
  UsersRound,
  BookOpen,
  Lightbulb,
  HeartPulse,
  Compass,
} from 'lucide-react'

const inclusions = [
  {
    icon: Award,
    title: 'Personal Development & Confidence Building',
  },
  {
    icon: UsersRound,
    title: 'Mentorship & Positive Role Models',
  },
  {
    icon: BookOpen,
    title: 'Academic & Career Pathway Guidance',
  },
  {
    icon: Lightbulb,
    title: 'Leadership & Essential Life Skills',
  },
  {
    icon: HeartPulse,
    title: 'Health, Wellness & Emotional Development',
  },
  {
    icon: Compass,
    title: 'Purpose, Values & Financial Literacy',
  },
]

export default function Included() {
  return (
    <section className="w-full bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-[1024px]">

        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-11">
          <p className="mb-4 text-[12px] font-extrabold tracking-[3px] text-[#3A0164]">
            EVERYTHING YOUR DAUGHTER NEEDS TO GROW
          </p>

          <h2 className="text-3xl leading-tight font-black tracking-tight text-[#080d21] sm:text-4xl md:text-5xl">
            What's Included
          </h2>
        </div>

        {/* Inclusion cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {inclusions.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className="flex min-h-[158px] flex-col items-center justify-center rounded-[19px] border border-[#dce3ef] bg-white px-5 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#BD98F7] hover:shadow-[0_8px_25px_rgba(58,1,100,0.07)]"
              >

                {/* Icon container */}
                <div className="mb-3 flex h-[56px] w-[56px] items-center justify-center rounded-[18px] bg-[#fff4dc]">
                  <Icon
                    size={27}
                    strokeWidth={2}
                    className="text-[#10051f]"
                  />
                </div>

                {/* Inclusion title */}
                <h3 className="max-w-[260px] text-[14px] leading-[1.65] font-bold text-[#080d21] sm:text-[15px]">
                  {item.title}
                </h3>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}