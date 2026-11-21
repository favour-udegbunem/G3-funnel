
import { ImagePlus } from "lucide-react";

const galleryGroups = [
  {
    main: "Mentorship and learning",
    images: ["G3 community moments", "Leadership in action"],
  },
  {
    main: "Growing together at G3",
    images: ["Mentorship sessions", "Celebrating achievements"],
  },
];

function ImagePlaceholder({ title, large = false }) {
  return (
    <div
      className={`group flex w-full items-center justify-center overflow-hidden rounded-xl border border-[#BD98F7]/30 bg-gradient-to-br from-[#F7F2FC] via-[#F0E8FA] to-[#E8DDF6] transition duration-300 hover:border-[#3A0164]/50 ${
        large
          ? "h-[220px] sm:h-[300px]"
          : "h-[130px] sm:h-[155px]"
      }`}
    >
      <div className="flex flex-col items-center gap-2 px-2 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#3A0164] shadow-sm sm:h-12 sm:w-12">
          <ImagePlus size={22} strokeWidth={1.7} />
        </div>

        <div>
          <p className="text-xs font-semibold text-[#3A0164] sm:text-sm">
            {title}
          </p>
          <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#806A9B]">
            Image placeholder
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#3A0164]">
            Inside Global Giant Girls
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#080D20] sm:text-4xl lg:text-5xl">
            Real girls. Real growth.{" "}
            <span className="text-[#3A0164]">
              Real transformation.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            A glimpse into the G3 community — where girls learn, build
            confidence, discover their purpose, develop leadership skills
            and grow together.
          </p>
        </div>

        {/* Two Main Gallery Columns */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 lg:gap-5">

          {galleryGroups.map((group) => (
            <div key={group.main} className="min-w-0">

              {/* Main Image Container */}
              <ImagePlaceholder
                title={group.main}
                large
              />

              <p className="mt-2 mb-4 text-xs font-bold text-[#080D20] sm:text-sm">
                {group.main}
              </p>

              {/* Two Smaller Image Containers Under Each Main Image */}
              <div className="grid grid-cols-2 gap-3">
                {group.images.map((image) => (
                  <div key={image} className="min-w-0">
                    <ImagePlaceholder title={image} />

                    <p className="mt-2 text-[11px] font-bold leading-5 text-[#080D20] sm:text-xs">
                      {image}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}