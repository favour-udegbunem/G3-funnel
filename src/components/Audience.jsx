
import { ThumbsUp, UserRoundX } from 'lucide-react'

export default function Audience() {
  return (
    <section className="w-full bg-[#050d21] px-5 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1024px]">

        {/* Section heading */}
        <h2 className="mb-10 text-center text-3xl leading-tight font-black tracking-tight sm:mb-11 sm:text-4xl md:text-5xl">
          Is this programme for you?
        </h2>

        {/* Audience cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* Suitable audience */}
          <div className="min-h-[212px] rounded-[18px] border-2 border-[#008cff] bg-[#111c35] px-6 py-6">

            <div className="mb-4 flex items-center gap-3">
              <ThumbsUp
                size={27}
                strokeWidth={2}
                className="shrink-0 text-[#008cff]"
              />

              <h3 className="text-xl font-extrabold text-white sm:text-[22px]">
                It's for you if...
              </h3>
            </div>

            <p className="text-[15px] leading-[1.85] text-[#d5dbea] sm:text-base">
              You're a parent or guardian who wants more for your daughter
              than just academic success. You want her to develop
              <strong className="font-extrabold text-white">
                {' '}confidence, good character, leadership skills and a clear
                sense of purpose.
              </strong>
              You're ready to invest in her personal growth and support her
              mentorship journey.
            </p>

          </div>

          {/* Not suitable audience */}
          <div className="min-h-[212px] rounded-[18px] border border-white/10 bg-[#111c35] px-6 py-6">

            <div className="mb-4 flex items-center gap-3">
              <UserRoundX
                size={27}
                strokeWidth={2}
                className="shrink-0 text-[#ff263d]"
              />

              <h3 className="text-xl font-extrabold text-white sm:text-[22px]">
                It's not for you if...
              </h3>
            </div>

            <p className="text-[15px] leading-[1.85] text-[#d5dbea] sm:text-base">
              You're looking for an instant transformation without
              your daughter's participation, or you expect mentorship
              to replace your involvement as a parent or guardian.
              This programme works best when the girl, her family and
              her mentors are committed to the growth journey.
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}