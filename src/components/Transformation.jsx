
import { Check } from 'lucide-react'

const transformations = [
  "Develop stronger self-confidence, recognise her worth and become comfortable expressing herself.",
  "Build good character, discipline and positive values that guide her choices and relationships.",
  "Develop leadership, communication and interpersonal skills to positively influence the people around her.",
  "Gain practical life skills, financial literacy and the knowledge to navigate everyday challenges.",
  "Discover her strengths, explore her interests and become more intentional about her purpose and future."
]

export default function Transformation() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050d21] px-5 py-20 text-white sm:py-24">

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,75,150,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1024px] flex-col items-center">

        {/* Eyebrow */}
        <p className="mb-4 text-center text-[12px] font-extrabold tracking-[3px] text-[#008cff]">
          THE TRANSFORMATION
        </p>

        {/* Heading */}
        <h2 className="mb-10 text-center text-3xl leading-tight font-black tracking-tight text-white sm:mb-11 sm:text-4xl md:text-5xl">
          By the end of one year, your daughter will:
        </h2>

        {/* Transformation cards */}
        <div className="flex w-full max-w-[645px] flex-col gap-[15px]">

          {transformations.map((item, index) => (
            <div
              key={index}
              className="flex min-h-[88px] items-start gap-[15px] rounded-[17px] bg-[#111c35] px-[19px] py-[19px] transition-all duration-300 hover:bg-[#172440]"
            >

              {/* Gold check icon */}
              <div className="mt-0.5 flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#ffb91f]">
                <Check
                  size={19}
                  strokeWidth={3}
                  className="text-[#081126]"
                />
              </div>

              {/* Outcome text */}
              <p className="text-[15px] leading-[1.75] font-medium text-white sm:text-base">
                {item}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}