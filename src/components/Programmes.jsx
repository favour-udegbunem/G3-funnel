
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Clock3,
  UsersRound,
  GraduationCap,
  Handshake,
} from 'lucide-react'

export default function Programmes() {
  return (
    <>
      {/* PROGRAMME INVESTMENT SECTION */}
      <section className="w-full bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-[1024px]">

          {/* Heading */}
          <div className="mb-10 text-center">
            <p className="mb-4 text-[12px] font-extrabold tracking-[3px] text-[#3A0164]">
              PROGRAMME ENROLMENT
            </p>

            <h2 className="text-3xl font-black tracking-tight text-[#080d21] sm:text-4xl md:text-5xl">
              Invest in Her Future
            </h2>
          </div>

          {/* Programme cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* Main mentorship programme */}
            <div className="flex flex-col rounded-[23px] border-[3px] border-[#E9A805] bg-[#050d21] p-6 text-white shadow-[0_12px_30px_rgba(233,168,5,0.15)] sm:p-7">

              <div className="mb-5">
                <span className="inline-flex rounded-full bg-[#E9A805] px-3 py-1.5 text-[10px] font-extrabold tracking-wide text-[#080d21]">
                  G3 MENTORSHIP PROGRAMME
                </span>
              </div>

              <h3 className="mb-2 text-[27px] font-black sm:text-[30px]">
                One-Year Mentorship
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-[#c1c9d9]">
                A guided journey designed to help your daughter grow in
                confidence, character, leadership and purpose.
              </p>

              <div className="mb-5 space-y-4 text-[13px] text-[#dce3ef]">

                <div className="flex items-start gap-3">
                  <CalendarDays size={17} className="mt-0.5 shrink-0 text-[#E9A805]" />
                  <span>One-year mentorship journey</span>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap size={17} className="mt-0.5 shrink-0 text-[#E9A805]" />
                  <span>Personal development, leadership and life skills</span>
                </div>

                <div className="flex items-start gap-3">
                  <UsersRound size={17} className="mt-0.5 shrink-0 text-[#E9A805]" />
                  <span>Mentorship and a supportive girls' community</span>
                </div>

              </div>

              <div className="mt-auto pt-3">
                <p className="mb-5 text-[34px] font-black tracking-tight text-white sm:text-[38px]">
                  ₦150,000
                </p>

                <a
                  href="#register"
                  className="flex min-h-[54px] w-full items-center justify-center gap-2 rounded-[12px] bg-[#E9A805] px-5 py-3 text-center text-sm font-extrabold text-[#080d21] shadow-[0_8px_22px_rgba(233,168,5,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5bd25]"
                >
                  Enrol Your Daughter
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>

            {/* Schools and organisations */}
            <div className="flex flex-col rounded-[23px] border border-[#dce3ef] bg-white p-6 sm:p-7">

              <div className="mb-5">
                <span className="inline-flex rounded-full bg-[#f0e8fa] px-3 py-1.5 text-[10px] font-extrabold tracking-wide text-[#3A0164]">
                  PARTNERSHIP ENQUIRIES
                </span>
              </div>

              <h3 className="mb-2 text-[27px] font-black text-[#080d21] sm:text-[30px]">
                Schools & Organisations
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-[#64748b]">
                Bring the G3 vision to your school or organisation and
                explore opportunities to support the growth and development
                of girls.
              </p>

              <div className="mb-6 space-y-4 text-[13px] text-[#475569]">

                <div className="flex items-start gap-3">
                  <Handshake size={18} className="mt-0.5 shrink-0 text-[#3A0164]" />
                  <span>Explore collaboration and partnership opportunities</span>
                </div>

                <div className="flex items-start gap-3">
                  <UsersRound size={18} className="mt-0.5 shrink-0 text-[#3A0164]" />
                  <span>Support girls through mentorship and development initiatives</span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[#3A0164]" />
                  <span>Discuss opportunities for your school or organisation</span>
                </div>

              </div>

              <div className="mt-auto pt-3">
                <p className="mb-5 text-[25px] font-black text-[#3A0164]">
                  Let's Partner
                </p>

                <a
                  href="#register"
                  className="flex min-h-[54px] w-full items-center justify-center gap-2 rounded-[12px] bg-[#3A0164] px-5 py-3 text-center text-sm font-extrabold text-white shadow-[0_8px_22px_rgba(58,1,100,0.17)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4c1680]"
                >
                  Discuss a Partnership
                  <ArrowRight size={17} />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PROMOTIONAL BANNER */}
      <section className="w-full bg-[#3A0164] px-5 py-14 text-center sm:py-[58px]">
        <div className="mx-auto max-w-[760px]">

          <h2 className="text-xl leading-[1.55] font-extrabold text-white sm:text-2xl md:text-[28px]">
            Your daughter's future deserves more than good intentions.
            <span className="text-[#E9A805]">
              {' '}Give her the mentorship, knowledge and guidance to grow.
            </span>
            Invest in her development today and help her prepare for tomorrow.
          </h2>

        </div>
      </section>
    </>
  )
}