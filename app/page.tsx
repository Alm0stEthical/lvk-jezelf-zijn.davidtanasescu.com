"use client";

import { contentConfig } from "../config/content";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight-new";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const itemFadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.2 } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    transition: { duration: 0.15 } 
  },
};

export default function Home() {
  const [noisePattern, setNoisePattern] = useState<string>("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = 100;
    canvas.height = 100;

    const imageData = ctx.createImageData(100, 100);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255;
      data[i] = value;
      data[i + 1] = value;
      data[i + 2] = value;
      data[i + 3] = 15;
    }

    ctx.putImageData(imageData, 0, 0);
    setNoisePattern(canvas.toDataURL());
  }, []);

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-navy-900 relative overflow-hidden"
    >
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .1) 0, hsla(210, 100%, 55%, .04) 50%, hsla(210, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 45%, .04) 80%, transparent 100%)"
        translateY={-400}
        width={600}
        height={1400}
        duration={8}
        xOffset={150}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 pointer-events-none will-change-opacity"
        style={{
          backgroundImage: `url(${noisePattern})`,
          backgroundRepeat: "repeat",
          transform: "translate3d(0,0,0)",
        }}
      />

      <motion.div
        variants={fadeIn}
        className="container mx-auto px-4 pt-16 pb-8 relative text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-32 h-32 mx-auto mb-6 relative group will-change-transform"
          whileHover={{
            rotate: 360,
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src="/david.png"
            alt="David Tanasescu"
            width={500}
            height={500}
            className="rounded-full object-cover shadow-xl"
          />
        </motion.div>
        <motion.h1
          variants={fadeIn}
          className="text-4xl font-bold text-white mb-3"
        >
          David Tanasescu
        </motion.h1>
        <motion.p variants={fadeIn} className="text-muted-foreground mb-12">
          Hoi, ik ben een{" "}
          <span className="font-bold text-blue-500">webdeveloper</span> en{" "}
          <span className="font-bold text-blue-500">penetratietester</span>.
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="container mx-auto px-4 py-8 relative"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl font-bold text-white mb-8 text-center"
        >
          Collage
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {contentConfig.items.map((item) => (
            <motion.div
              key={item.slug}
              variants={itemFadeIn}
              layoutId={`card-${item.slug}`}
              className="transform-gpu"
            >
              <Link
                href={`/${item.slug}`}
                data-cursor-hover
                className="group relative rounded-3xl overflow-hidden
                         backdrop-blur-md bg-white/5
                         shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                         border border-white/10
                         hover:shadow-2xl transition-all duration-500 
                         hover:-translate-y-2 block"
              >
                <div className="absolute inset-0 -z-10">
                  <motion.img
                    layoutId={`image-${item.slug}`}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover scale-110 blur-[2px]"
                  />
                  <div className="absolute inset-0 bg-navy-900/40 backdrop-blur-[8px]" />
                </div>

                <div className="aspect-video overflow-hidden">
                  <motion.img
                    layoutId={`image-${item.slug}-main`}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover 
                             transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="relative p-6 bg-white/5 border-t border-white/10">
                  <motion.h2
                    layoutId={`title-${item.slug}`}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {item.title}
                  </motion.h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
