"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useScrollToAnchor } from "@/lib/useScrollToAnchor";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const scrollToAnchor = useScrollToAnchor(0.7);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    // placeholder
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Digest", href: "/newsletter" },
    {
      name: "Community",
      href: "https://chat.whatsapp.com/FAiHb4BV0MBIKXyKYp7VIa ",
    },
    { name: "Contact", href: "https://wa.link/xo9fej" },
  ];

  const ctaButtonHref = "/dna";

  const isActive = (href: string) => pathname === href;

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
        closeMenu();
      }
    },
    [scrollToAnchor, pathname, router],
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav
      className={`z-[100] w-full px-6 py-6 md:py-8 md:px-8 fixed top-0 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-sm bg-[#111B23]/70 border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/intro-logo/plugndd_logo.png"
            alt="PLUGNDD Logo"
            width={100}
            height={40}
            priority
            className="w-48 h-auto"
          />
        </Link>

        <div className="flex items-center gap-8 max-lg:hidden">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              animate={{
                color:
                  hoveredItem === item.name
                    ? "#92d5e3"
                    : isActive(item.href)
                      ? "#92d5e3"
                      : "#A1A1A1",
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-plus-jakarta text-sm"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color:
                    hoveredItem === item.name
                      ? "#92d5e3"
                      : isActive(item.href)
                        ? "#92d5e3"
                        : "#A1A1A1",
                  transition: "color 0.2s ease-in-out",
                }}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          <div className="w-px h-5 bg-gray-600"></div>

          <Link
            href={ctaButtonHref}
            className="whitespace-nowrap inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:brightness-125"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              border: "1px solid rgba(146,213,227,0.4)",
              background: "linear-gradient(135deg, rgba(53,113,163,0.25) 0%, rgba(146,213,227,0.08) 100%)",
              color: "#92d5e3",
              boxShadow: "0 0 12px rgba(146,213,227,0.15), inset 0 0 12px rgba(146,213,227,0.05)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#92d5e3] animate-pulse" />
            Find your creator personality!
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="lg:hidden text-[#A1A1A1] hover:text-[#92d5e3] transition-colors duration-200 p-2"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu full-screen overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
        className="fixed inset-0 z-[150] lg:hidden"
      >
        <div className="relative flex flex-col min-h-lvh px-6 py-5 bg-background">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex-shrink-0" onClick={closeMenu}>
              <Image
                src="/intro-logo/plugndd_logo.png"
                alt="PLUGNDD Logo"
                width={100}
                height={40}
                priority
                className="w-44 h-auto"
              />
            </Link>
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 text-[#A1A1A1] hover:text-[#92d5e3] transition-colors duration-200"
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <div className="relative w-6 h-6">
                <span className="absolute inset-x-0 top-1/2 block h-0.5 bg-current rotate-45" />
                <span className="absolute inset-x-0 top-1/2 block h-0.5 bg-current -rotate-45" />
              </div>
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-lg font-medium ${
                    active ? "text-[#92d5e3]" : "text-[#A1A1A1]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="h-px bg-white/10" />
            <Link
              href={ctaButtonHref}
              onClick={closeMenu}
              className="text-lg font-medium"
            >
              Find your creator personality!
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
