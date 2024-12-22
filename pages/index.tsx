import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();

        hls.loadSource(
          "https://vz-94c0f611-bf0.b-cdn.net/cc070237-675e-4481-a207-55f344878995/playlist.m3u8"
        );
        hls.attachMedia(videoRef.current);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          // Set to the highest available quality
          hls.currentLevel = hls.levels.length - 1;
        });
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoRef.current.src =
          "https://vz-94c0f611-bf0.b-cdn.net/cc070237-675e-4481-a207-55f344878995/playlist.m3u8";
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Video Background */}
      <div className="fixed inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mx-auto h-screen p-4 sm:p-10 lg:max-w-[1300px]">
        <div className="flex flex-col items-center p-6 sm:p-10 rounded-3xl gap-7 bg-gray-500/20">
          {/* Society Heading */}
          <div className="gradient-text font-extrabold text-center">
            <h1 className="text-[60px] sm:text-[80px] lg:text-[100px] leading-tight sm:leading-[1.2]">
              Society
            </h1>
          </div>
          {/* Subtitle */}
          <div className="text-[25px] sm:text-[35px] font-bold text-center">
            <span>🎉</span>{" "}
            <span className="gradient-white">
              The Social Media Revolution Is Coming!
            </span>
          </div>
          {/* Sections */}
          <div className="flex flex-col gap-4">
            <Section
              title="👩‍🎤 Fully Customizable Profiles"
              description="MySpace-Era profiles. Full customization without HTML, Music Playlists, Top friends, and lots more."
            />
            <Section
              title="👥 Communities That Get You"
              description="Find groups you love—no trolls, no drama, just real connections. Monetize your groups, with built-in shops, courses, blogs, calendars, and more!"
            />
            <Section
              title="🎥 Short Videos Vine vibes meet creativity"
              description="Post real-life videos, skits, ideas, tutorials, or just your cat being awesome."
            />
            <Section
              title="🛍️ Sell, Create, Thrive"
              description="A digital marketplace cooler than Etsy or Gumroad, a freelancer section like Fiverr, and a course marketplace like Udemy—without the outrageous fees."
            />
            <Section
              title="🙅‍♂️ Just the Good Stuff"
              description="No mind-reading algorithms, no selling your info. Your data stays yours—always. 🚀"
            />
          </div>
          {/* Call to Action */}
          <div className="text-center">
            <h1 className="text-[20px] sm:text-[24px] mb-3 font-semibold">
              Don’t Miss Out! We’re launching soon.
            </h1>
            <p>Be there from Day 1! 👉 Join the Waitlist Now</p>
          </div>
          {/* Form */}
          <div className="flex flex-col md:flex-row gap-5 items-center mt-10 w-full justify-center">
            <input
              type="text"
              className="bg-white p-2 px-4 w-[300px] sm:w-full rounded-3xl"
              placeholder="Name"
            />
            <input
              type="text"
              className="bg-white p-2 px-4 w-[300px] sm:w-full rounded-3xl"
              placeholder="Email"
            />
            <button className="p-2 px-5 sm:w-full w-[300px] text-black font-bold bg-white rounded-3xl">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function Section({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-[20px] sm:text-[24px] font-semibold">{title}</h2>
      <p className="text-[14px] sm:text-[16px]">{description}</p>
    </div>
  );
}
