"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar } from "@/app/components/navbar/navbar";
import Footer from "@/app/components/homepage/footer";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
  author: string | null;
}

const STARS = [
  { x: 5,  y: 8,  s: 1.5, d: 4.5, delay: 0,   blue: false },
  { x: 22, y: 7,  s: 1,   d: 5.2, delay: 1.2, blue: true  },
  { x: 40, y: 18, s: 1.5, d: 6,   delay: 1.8, blue: false },
  { x: 60, y: 13, s: 1,   d: 4.8, delay: 2,   blue: true  },
  { x: 76, y: 26, s: 1.5, d: 5.5, delay: 0.4, blue: false },
  { x: 91, y: 17, s: 1,   d: 4.2, delay: 0.9, blue: true  },
  { x: 14, y: 72, s: 1,   d: 5.8, delay: 2.2, blue: false },
  { x: 47, y: 88, s: 1.5, d: 4.6, delay: 1.6, blue: true  },
  { x: 83, y: 76, s: 1,   d: 5.1, delay: 1.3, blue: false },
  { x: 94, y: 48, s: 1.5, d: 6.2, delay: 1.1, blue: true  },
  { x: 2,  y: 44, s: 1,   d: 4.9, delay: 2.5, blue: false },
  { x: 49, y: 4,  s: 1.5, d: 5.3, delay: 0.5, blue: true  },
];

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="group flex flex-col rounded-2xl border border-white/8 overflow-hidden bg-white/3 hover:border-white/15 hover:bg-white/5 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] bg-[#1a2a38] overflow-hidden flex-shrink-0">
        {article.urlToImage ? (
          <Image
            src={article.urlToImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(146,213,227,0.3)" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
            </svg>
          </div>
        )}
        {/* Source badge */}
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[10px] text-white/70 font-medium">
          {article.source.name}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <h3 className="text-sm md:text-base font-semibold text-white leading-snug line-clamp-2 group-hover:text-[#92d5e3] transition-colors duration-200">
          {article.title}
        </h3>
        {article.description && (
          <p className="text-xs text-white/50 leading-relaxed line-clamp-2">
            {article.description}
          </p>
        )}
        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="text-[10px] text-white/30">{timeAgo(article.publishedAt)}</span>
          <span className="text-[10px] text-[#92d5e3]/60 flex items-center gap-1">
            Read
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function NewsletterPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/news?category=all`)
      .then((r) => r.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#111B23] overflow-hidden">
      <Navbar />

      {/* Techy background */}
      <div className="fixed inset-0 pointer-events-none z-0">

        {/* Deep glow blobs */}
        <div className="absolute top-[5%] left-[10%] w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(53,113,163,0.18) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(146,213,227,0.1) 0%, transparent 70%)" }} />

        {/* Twinkling stars */}
        {STARS.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.s,
              height: star.s,
              background: star.blue ? "rgba(146,213,227,0.7)" : "rgba(255,255,255,0.6)",
              boxShadow: star.blue ? "0 0 3px 1px rgba(146,213,227,0.3)" : "0 0 2px 1px rgba(255,255,255,0.15)",
            }}
            animate={{ opacity: [0.1, 0.7, 0.1] }}
            transition={{ duration: star.d, repeat: Infinity, ease: "easeInOut", delay: star.delay }}
          />
        ))}

      </div>

      <div className="relative z-10 pt-24 pb-20 px-5 md:px-12 max-w-7xl mx-auto">

        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#3571A3]/15 blur-[100px] pointer-events-none" />

        {/* Header */}
        <div className="relative text-center mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#92d5e3] text-xs font-medium tracking-widest uppercase mb-3"
          >
            Stay Ahead
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(1.75rem,6vw,4rem)] font-bold text-white leading-tight"
          >
            Intelligence Digest
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm md:text-base text-white/40 max-w-md mx-auto"
          >
            Curated reads on marketing, culture, and the signals shaping what&apos;s next.
          </motion.p>
        </div>

        {/* Articles grid */}
        {loading && (
          <div className="flex justify-center items-center py-32">
            <div className="w-8 h-8 rounded-full border-2 border-[#92d5e3]/30 border-t-[#92d5e3] animate-spin" />
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-32 text-white/30 text-sm">
            Failed to load articles. Make sure your <code className="text-[#92d5e3]/60">GUARDIAN_API_KEY</code> is set.
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {articles.map((article, i) => (
              <ArticleCard key={article.url} article={article} index={i} />
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
