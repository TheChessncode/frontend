"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { WaitlistModal } from "../ui/WaitlistModal";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: ["Chess + Coding", "Strategy + Innovation", "Logic + Creativity"],
    loop: true,
    delaySpeed: 2000,
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isLoaded);

  useEffect(() => {
    setIsLoaded(true);

    const initializeVideos = () => {
      const videos = [videoRef.current, mobileVideoRef.current].filter(Boolean);
      videos.forEach((video) => {
        if (video) {
          video.muted = true;
          video.play().catch(console.error);
        }
      });
    };

    initializeVideos();
  }, []);

  const togglePlay = (video: HTMLVideoElement | null) => {
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (video: HTMLVideoElement | null) => {
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const gradientBackground = {
    hidden: { backgroundPosition: "0% 50%" },
    visible: {
      backgroundPosition: "100% 50%",
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  };

  return (
    <>
      <motion.section
        className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden py-[20px]"
        // @ts-expect-error - Framer Motion backgroundPosition type issue
        variants={gradientBackground}
        initial="hidden"
        animate="visible"
        style={{
          background:
            "linear-gradient(-45deg, var(--bg-primary), var(--brand-primary-dark), var(--brand-primary-light), var(--brand-primary))",
          backgroundSize: "400% 400%",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6 lg:gap-8   lg:mt-0 px-4 lg:px-8">
          <section className="flex flex-col justify-center gap-6 lg:gap-8 order-2 lg:order-1 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center lg:text-left">
                <p className="uppercase text-[var(--brand-primary)] text-sm font-semibold tracking-widest mb-4">
                  <span className="text-[white]">{text}</span>
                  <Cursor cursorColor="var(--brand-primary)" />
                </p>
                <h1 className="text-[white] text-2xl lg:text-4xl font-bold leading-tight">
                  Empowering Girls and Women through Chess and Coding
                </h1>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left">
                <p className="text-[white]/60 text-lg lg:text-xl leading-relaxed">
                  Chessncode transforms strategic thinking from the chessboard
                  into computational thinking for the digital world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="mailto:hello@chessncode.org"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[var(--brand-primary)] text-white px-8 py-4 text-base font-semibold rounded-xl hover:bg-[var(--brand-primary-dark)] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Sponsor a Scholar</span>
                </motion.a>

                <motion.button
                  onClick={() => setIsModalOpen(true)} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-[white]/60 text-[white]/60 px-8 py-4 text-base font-semibold rounded-xl hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] hover:text-white transition-all duration-200"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-l from-[var(--brand-primary)] to-[var(--brand-primary-dark)] rounded-xl p-6 text-center lg:text-left"
            >
              <div className="max-w-md mx-auto lg:mx-0">
                <p className="text-white/90 text-sm font-light mb-2 tracking-widest uppercase">
                  Preparation
                </p>
                <p className="text-white text-xl lg:text-2xl font-bold leading-tight">
                  For the next generation
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mt-4"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[white]">
                  1M+
                </div>
                <div className="text-sm text-[white]/70">Students by 2035</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[white]">
                  100%
                </div>
                <div className="text-sm text-[white]/70">Impact</div>
              </div>
            </motion.div>
          </section>

          {/* RIGHT COLUMN - VIDEO CONTENT (Desktop & Mobile) */}
          <section className="flex flex-col gap-6 lg:gap-8 order-1 lg:order-2 lg:h-[80dvh]">
            {/* Desktop Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:flex h-full w-full relative mt-[20px] rounded-2xl overflow-hidden group shadow-2xl"
            >
              <video
                ref={videoRef}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover object-center rounded-2xl"
                preload="auto"
                poster="/elora-portrait.jpeg"
              >
                <source src="/Elora-Project-Episode2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 rounded-2xl to-black/50" />

              {/* Control Buttons */}
              <div className="absolute bottom-6 right-6 flex gap-3">
                <button
                  onClick={() => togglePlay(videoRef.current)}
                  className="bg-white/20 backdrop-blur-lg p-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white" />
                  )}
                </button>
                <button
                  onClick={() => toggleMute(videoRef.current)}
                  className="bg-white/20 backdrop-blur-lg p-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-110"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>

              {/* Video Title Overlay */}
              <div className="absolute top-6 left-6">
                <div className="bg-black/40 backdrop-blur-sm px-[10px] py-[3px] rounded-full">
                  <span className="text-white text-sm font-medium">
                    Project ELora
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Mobile Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:hidden w-full h-[50vh] mt-[20px] relative rounded-2xl overflow-hidden group shadow-xl"
            >
              <video
                ref={mobileVideoRef}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover object-center"
                preload="auto"
                poster="/elora-portrait.jpeg"
              >
                <source src="/Elora-Project-Episode2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/50" />

              {/* Control Buttons */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={() => togglePlay(mobileVideoRef.current)}
                  className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 text-white" />
                  ) : (
                    <Play className="w-4 h-4 text-white" />
                  )}
                </button>
                <button
                  onClick={() => toggleMute(mobileVideoRef.current)}
                  className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>

              {/* Video Title Overlay */}
              <div className="absolute top-4 left-4">
                <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-medium">
                    Project Elora
                  </span>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </motion.section>

      {/* Add the modal component at the bottom */}
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
