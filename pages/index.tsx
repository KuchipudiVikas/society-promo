import { useEffect, useRef } from "react";
import Hls from "hls.js";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <div
      className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen`}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
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
      <div className="relative z-10   mx-auto justify-center my-auto items-center flex flex-col  max-w-[1300px]  p-24 h-screen text-white">
        <div className="flex flex-col items-center p-10 rounded-3xl gap-7 bg-gray-500/20">
          <div className="text-[100px] gradient-text font-extrabold">
            Society
          </div>
          <div className="text-[45px] font-bold text-center">
            <span className="">🎉</span>{" "}
            <span className="gradient-white">
              The Social Media Revolution Is Coming!{" "}
            </span>
          </div>
          <div className="text-[18px] font-medium text-center">
            👩‍🎤 MySpace-Era Profiles, Your Way Personalize your vibe without
            needing HTML. Glitter gifs? Playlists? Done{" "}
          </div>
          <div className="text-[18px] font-medium text-center">
            👥 Communities That Get You Find groups you love—no trolls, no
            drama, just real connections. Monetize your groups, with built-in
            shops, courses, blogs, calendars, and more!{" "}
          </div>
          <div className="text-[18px] font-medium text-center">
            🎥 Short Videos Vine vibes meet creativity. Post real life videos,
            skits, ideas, tutorials or just your cat being awesome.{" "}
          </div>
          <div className="text-[18px] font-medium text-center">
            🛍️ Sell, Create, Thrive A digital marketplace cooler than Etsy or
            Gumroad, a freelancer section like Fiverr, and a course marketplace
            like Udemy—without the outrageous fees.{" "}
          </div>
          <div className="text-[18px] font-medium text-center">
            🙅‍♂️ Just the Good Stuff No mind-reading algorithms, no selling your
            info. Your data stays yours—always. 🚀{" "}
          </div>
          <div className="text-[18px] font-medium text-center">
            Don’t Miss Out! We’re launching soon. Be there from Day 1! 👉 Join
            the Waitlist Now
          </div>

          <div className="flex gap-5 mt-10">
            <input
              type="text"
              className="bg-white p-2 px-4 w-[300px]"
              placeholder="Name"
              style={{
                border: "1px solid white",
                borderRadius: "25px",
              }}
            />
            <input
              type="text"
              className="bg-white p-2 px-4 w-[300px]"
              placeholder="Email"
              style={{
                border: "1px solid white",
                borderRadius: "25px",
              }}
            />
            <button
              style={{
                border: "1px solid white",
              }}
              className="p-2 rounded-3xl bg-white px-5 text-black font-bold"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
