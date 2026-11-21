
import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Business Owner",
    role: "Trainee Testimonial",
    video:
      "https://res.cloudinary.com/rpefoddh/video/upload/v1795290615/WhatsApp_Video_2026-10-20_at_10.01.40_AM_1.mp4",
  },
  {
    id: 2,
    name: "Parent",
    role: "Parents' Review",
    video:
      "https://res.cloudinary.com/rpefoddh/video/upload/v1795290684/Parents_Review.mp4",
  },
  {
    id: 3,
    name: "Parent",
    role: "Parents' Review",
    video:
      "https://res.cloudinary.com/rpefoddh/video/upload/v1795292696/another_parent_s_review-compressed-compressed.mp4",
  },
];

export default function VideoTestimony() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const videoRefs = useRef([]);

  const changeSlide = (index) => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    setActiveIndex(index);
    setPlaying(true);
    setMuted(true);
  };

  const nextSlide = () => {
    changeSlide((activeIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    changeSlide(
      (activeIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const togglePlay = (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#050B1C] px-5 py-20 md:py-24">

      {/* HEADER */}
      <div className="mx-auto mb-10 max-w-4xl text-center md:mb-11">
        <span className="mb-4 block text-[12px] font-extrabold tracking-[3px] text-[#0788FF] md:text-[13px]">
          STRAIGHT FROM A TRAINEE
        </span>

        <h2 className="text-[32px] font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-[46px]">
          Hear it from someone who sat in the
          <br className="hidden md:block" /> room
        </h2>

        <p className="mt-5 text-sm leading-relaxed text-gray-300 md:text-[15px]">
          Short, unscripted — from people who experienced the programme.
        </p>
      </div>

      {/* VIDEO CAROUSEL */}
      <div className="relative mx-auto flex w-full max-w-[610px] items-start justify-center">

        {/* PREVIOUS BUTTON */}
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="absolute left-[-10px] top-[175px] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#101B32] text-3xl text-white transition hover:bg-[#0788FF] md:left-[-12px]"
        >
          ‹
        </button>

        {/* VIDEO CARDS */}
        <div className="flex w-full items-start justify-center gap-4">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="w-[198px] shrink-0 text-center"
            >
              {/* VIDEO */}
              <div className="group relative h-[350px] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#111827]">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.video}
                  autoPlay={index === activeIndex}
                  muted={index === activeIndex ? muted : true}
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => {
                    if (index === activeIndex) setPlaying(true);
                  }}
                  onPause={() => {
                    if (index === activeIndex) setPlaying(false);
                  }}
                  className="h-full w-full object-cover"
                />

                {/* BOTTOM GRADIENT */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />

                {/* VIDEO CONTROLS */}
                <div className="absolute bottom-3 left-0 right-0 z-10 flex items-center justify-center gap-3">

                  <button
                    onClick={() => togglePlay(index)}
                    aria-label={playing && index === activeIndex ? "Pause video" : "Play video"}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/70 text-lg text-white backdrop-blur-md transition hover:bg-[#0788FF]"
                  >
                    {playing && index === activeIndex ? "Ⅱ" : "▶"}
                  </button>

                  <button
                    onClick={() => toggleMute(index)}
                    aria-label={muted ? "Unmute video" : "Mute video"}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/70 text-lg text-white backdrop-blur-md transition hover:bg-[#0788FF]"
                  >
                    {muted ? "◖×" : "◖"}
                  </button>

                </div>
              </div>

              {/* TESTIMONIAL DETAILS */}
              <div className="mt-3 px-1 text-center text-[13px] leading-relaxed">
                <span className="font-bold text-white">
                  {item.name}
                </span>
                <span className="text-gray-400">
                  {" "}· {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="absolute right-[-10px] top-[175px] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#101B32] text-3xl text-white transition hover:bg-[#0788FF] md:right-[-12px]"
        >
          ›
        </button>
      </div>

      {/* PAGINATION */}
      <div className="mt-7 flex items-center justify-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.id}
            onClick={() => changeSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-6 bg-[#FFBD24]"
                : "w-2 bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
}