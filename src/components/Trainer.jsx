import {
  Award,
  BookOpen,
  GraduationCap,
  Users,
} from "lucide-react";
import coach from "../images/coach-precious.jpg";

const achievements = [
  {
    value: "13+ Years",
    label: "Mentoring and empowering girls",
    icon: Users,
  },
  {
    value: "300+",
    label: "Teen mentors and coaches trained",
    icon: GraduationCap,
  },
  {
    value: "10 Books",
    label: "Authored to inspire growth and purpose",
    icon: BookOpen,
  },
  {
    value: "TEDx",
    label: "Speaker and advocate for personal development",
    icon: Award,
  },
];

export default function Trainer() {
  return (
    <section className="bg-[#050B1D] px-5 py-20 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#E9A805]">
            Meet Your Mentor
          </p>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Learn from a woman who has dedicated her life to{" "}
            <span className="text-[#E9A805]">
              raising a generation of confident girls.
            </span>
          </h2>
        </div>

        {/* Founder Profile */}
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[280px_1fr] lg:gap-12">

          {/* Founder Image */}
          <div className="mx-auto w-full max-w-[280px]">
            <div className="overflow-hidden rounded-[28px] border-2 border-[#E9A805] bg-[#111B35]">
              <img
                src={coach}
                alt="Coach Precious Flourish Ifeanyichukwu"
                className="h-[350px] w-full object-cover"
              />
            </div>
          </div>

          {/* Founder Biography */}
          <div>
            <h3 className="mb-2 text-3xl font-extrabold sm:text-4xl">
              Coach Precious Flourish Ifeanyichukwu
            </h3>

            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#E9A805]">
              Founder, Global Giant Girls | Girls Coach & Mentor
            </p>

            <div className="space-y-4 text-base leading-7 text-slate-300">
              <p>
                Coach Precious Flourish Ifeanyichukwu is a passionate girls'
                coach, mentor, author and speaker committed to raising bold,
                confident, purpose-driven girls who are equipped to make a
                meaningful impact in their world.
              </p>

              <p>
                With over 13 years of experience mentoring girls, she founded
                Global Giant Girls (G3), a mentorship and leadership movement
                dedicated to helping girls discover their identity, build
                strong character, develop leadership abilities and unlock
                their potential.
              </p>

              <p>
                She is also the Vice Chancellor of the School of Teen Mentors
                and Coaches (SOTMAC), through which she has trained over 300
                teen mentors and coaches. As an author of 10 books, she
                continues to equip parents, mentors and young people with
                practical knowledge for personal growth and development.
              </p>

              <p className="font-semibold text-white">
                Her vision is simple: to raise a generation of girls who are
                confident in who they are, clear about their purpose, and
                prepared to lead and transform their world.
              </p>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.value}
                className="rounded-2xl border border-white/10 bg-[#111B35] px-4 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#E9A805]/60"
              >
                <Icon className="mx-auto mb-3 h-6 w-6 text-[#E9A805]" />

                <h4 className="mb-2 text-xl font-extrabold text-[#E9A805] sm:text-2xl">
                  {item.value}
                </h4>

                <p className="text-xs leading-5 text-slate-300 sm:text-sm">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}