"use client";
import React, { useRef, useState } from "react";

const WebomoFeatures = () => {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayFullscreen = () => {
    setIsPlaying(true);

    if (videoRef.current) {
      videoRef.current.play();

      // Request fullscreen on the video container
      if (videoContainerRef.current.requestFullscreen) {
        videoContainerRef.current.requestFullscreen();
      } else if (videoContainerRef.current.webkitRequestFullscreen) {
        videoContainerRef.current.webkitRequestFullscreen(); // Safari
      } else if (videoContainerRef.current.msRequestFullscreen) {
        videoContainerRef.current.msRequestFullscreen(); // IE11
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center py-20">
      <h2 className="mb-8 max-w-2xl pb-10 text-center text-3xl font-bold text-black dark:text-white md:text-5xl">
        Entdecke unsere neusten Arbeiten
      </h2>
      <div className="w-full max-w-3xl px-4">
        <div
          ref={videoContainerRef}
          className="relative aspect-video overflow-hidden rounded-2xl bg-slate-950"
        >
          {/* Video element */}
          <video
            ref={videoRef}
            src="/images/webomo-videos/webomo-demo.mp4"
            className={`h-full w-full ${isPlaying ? "block" : "hidden"}`}
            controls={true} // Hide default controls
            onEnded={() => setIsPlaying(true)} // Reset when video ends
          />

          {/* Play Button Overlay */}
          {!isPlaying && (
            <button
              onClick={handlePlayFullscreen}
              className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 22v-20l18 10-18 10z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default WebomoFeatures;
