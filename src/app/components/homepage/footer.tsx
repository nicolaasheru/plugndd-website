"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useScrollToAnchor } from "@/lib/useScrollToAnchor";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  {
    label: "Community",
    href: "https://chat.whatsapp.com/FAiHb4BV0MBIKXyKYp7VIa",
  },
  { label: "Contact", href: "https://wa.link/xo9fej" },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const scrollToAnchor = useScrollToAnchor(0.7);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("http")) {
        return;
      }

      if (href.startsWith("/#")) {
        e.preventDefault();
        const anchorId = href.slice(2);

        if (pathname === "/") {
          scrollToAnchor(anchorId);
        } else {
          router.push(`/?section=${anchorId}`);
        }
      }
    },
    [scrollToAnchor, pathname, router],
  );

  return (
    <footer
      className={`transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-sm bg-[#1a1a1a]/70 border-t border-white/5"
          : "bg-[#1a1a1a] border-t border-transparent"
      } px-5 py-6 lg:px-24 lg:py-20`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-60 mb-5 lg:mb-16">
          {/* Left Column - Logo & Tagline */}
          <div className="space-y-2 lg:space-y-6">
            <Image
              src="/intro-logo/plugndd_logo.png"
              alt="PLUGNDD Logo"
              width={200}
              height={50}
              className="h-6 lg:h-10 w-auto"
            />
            <p
              className="text-[#A1A1A1] text-xs lg:text-base leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              The intelligence you need to win your market.
            </p>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-2 lg:space-y-6 flex flex-col">
            <p
              className="text-[#A1A1A1] text-xs lg:text-base"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Get in touch
            </p>
            <div className="flex gap-4">
              <Link
                href="mailto:plugndd@gmail.com "
                className="text-white hover:text-[#92d5e3] transition-colors"
                aria-label="Email"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 lg:w-8 lg:h-8"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6L12 13L2 6" />
                </svg>
              </Link>

              <Link
                href="https://www.instagram.com/plugnddprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#92d5e3] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 lg:w-8 lg:h-8"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
              </Link>

              <Link
                href="https://wa.link/xo9fej"
                className="text-white hover:text-[#92d5e3] transition-colors"
                aria-label="Phone"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 lg:w-8 lg:h-8"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-60">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-3 lg:gap-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.label}
                onMouseEnter={() => setHoveredItem(link.label)}
                onMouseLeave={() => setHoveredItem(null)}
                animate={{
                  color:
                    hoveredItem === link.label
                      ? "#92d5e3"
                      : isActive(link.href)
                        ? "#92d5e3"
                        : "#A1A1A1",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs lg:text-base transition-colors"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color:
                      hoveredItem === link.label
                        ? "#92d5e3"
                        : isActive(link.href)
                          ? "#92d5e3"
                          : "#A1A1A1",
                    transition: "color 0.2s ease-in-out",
                  }}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Strategic Collaboration */}
          <div className="flex items-center gap-3">
            <p
              className="text-[#A1A1A1] text-xs lg:text-base"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              In strategic collaboration with
            </p>
            <Link href="https://www.inkubatorit.com/">
              <Image
              src="/logo-iit.png"
              alt="Inkubator IT"
              width={120}
              height={35}
              className="h-5 lg:h-7 w-auto"
              />
            </Link>
         </div>
        </div>
      </div>
    </footer>
  );
}
