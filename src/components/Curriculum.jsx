
import { ArrowRight, Target } from 'lucide-react'

const programmeHighlights = [
  {
    number: '1',
    title: 'Self-Discovery & Confidence',
    description:
      'Help your daughter discover her strengths, recognise her worth and develop the confidence to express herself.',
  },
  {
    number: '2',
    title: 'Character, Values & Personal Development',
    description:
      'Build positive values, emotional intelligence, discipline and the character to make responsible decisions.',
  },
  {
    number: '3',
    title: 'Leadership & Essential Life Skills',
    description:
      'Develop communication, critical thinking, leadership and practical skills she can apply in everyday life.',
  },
  {
    number: '4',
    title: 'Academic & Career Pathway Guidance',
    description:
      'Explore her interests, identify her strengths and gain guidance to make informed academic and career choices.',
  },
  {
    number: '5',
    title: 'Mentorship, Purpose & Opportunities',
    description:
      'Connect with positive mentors, grow in purpose and discover opportunities to develop and showcase her potential.',
  },
]

export default function Curriculum() {
  return (
    <section className="w-full bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto flex max-w-[1024px] flex-col items-center">

        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-11">

          <p className="mb-2 text-[12px] font-extrabold tracking-[3px] text-[#3A0164]">
            ONE-YEAR MENTORSHIP JOURNEY
          </p>

          <h2 className="text-3xl leading-tight font-black tracking-tight text-[#080d21] sm:text-4xl md:text-5xl">
            Explore the G3 Programme Highlights
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#64748b] sm:text-base">
            A year of mentorship, personal development, practical life skills
            and guidance to help your daughter grow into her potential.
          </p>

        </div>

        {/* Programme highlights */}
        <div className="flex w-full max-w-[723px] flex-col gap-[19px]">

          {programmeHighlights.map((item) => (
            <div
              key={item.number}
              className="flex min-h-[118px] items-start gap-[15px] rounded-[20px] border border-[#dce3ef] bg-white px-[22px] py-[22px] transition-all duration-300 hover:border-[#BD98F7] hover:shadow-[0_8px_25px_rgba(58,1,100,0.06)] sm:px-[23px]"
            >

              {/* Number circle */}
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#3A0164] text-base font-extrabold text-white">
                {item.number}
              </div>

              {/* Text content */}
              <div className="min-w-0 flex-1">

                <p className="mb-1 text-[11px] font-extrabold tracking-[1px] text-[#3A0164]">
                  AREA {item.number}
                </p>

                <h3 className="text-[17px] leading-snug font-extrabold text-[#080d21] sm:text-[19px]">
                  {item.title}
                </h3>

                <p className="mt-1.5 flex items-start gap-2 text-[13px] leading-[1.65] text-[#64748b] sm:text-[15px]">
                  <Target
                    size={15}
                    className="mt-[3px] shrink-0 text-[#64748b]"
                  />
                  <span>{item.description}</span>
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* Full programme button */}
        <a
          href="#register"
          className="mt-[30px] inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[9px] bg-[#E9A805] px-[23px] py-[14px] text-[15px] font-extrabold text-[#10051f] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5bd25] hover:shadow-lg"
        >
          Explore the Full Programme
          <ArrowRight size={17} />
        </a>

      </div>
    </section>
  )
}