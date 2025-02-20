"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { contentConfig } from "../../config/content";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const contentAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const item = contentConfig.items.find(
    (item) => item.slug === resolvedParams.slug
  );

  if (!item) {
    notFound();
  }

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-navy-900 relative overflow-hidden"
    >
      <motion.div
        variants={fadeIn}
        className="relative h-[40vh] overflow-hidden"
      >
        <motion.div
          layoutId={`image-${item.slug}`}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            filter: "blur(8px) brightness(0.5)",
            transform: "scale(1.1)",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-navy-900/30"
        />{" "}
        <div className="container mx-auto px-4 h-full relative">
          <motion.div
            variants={fadeIn}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <Link
              href="/"
              className="inline-block mt-8 text-white/80 hover:text-white transition-colors duration-300"
            >
              ← Terug naar collage
            </Link>
          </motion.div>
          <div className="flex items-center h-full pb-16">
            <div className="max-w-2xl">
              <motion.h1
                layoutId={`title-${item.slug}`}
                className="text-5xl font-bold text-white mb-4"
              >
                {item.title}
              </motion.h1>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <motion.div
          layoutId={`card-${item.slug}`}
          className="rounded-3xl overflow-hidden shadow-xl
                    backdrop-blur-xl bg-white/10 
                    border border-white/20
                    shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
        >
          <motion.div variants={contentAnimation} className="p-8 md:p-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {item.description}
              </ReactMarkdown>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}
