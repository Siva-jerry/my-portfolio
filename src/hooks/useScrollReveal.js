import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-reveal-section");
    if (!sections.length) return;

    // If user prefers reduced motion, reveal everything immediately
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      sections.forEach((sec) => sec.classList.add("is-revealed"));
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    // Trigger when section comes comfortably into the visible screen area (-70px margin)
    // so the slow, graceful fade-in unfolds right in the user's line of sight as they scroll
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -70px 0px",
      threshold: 0.04,
    });

    const isAtTop = window.scrollY < 80;

    sections.forEach((sec) => {
      if (isAtTop) {
        // At the top of the page: Only Hero is revealed on initial load
        if (sec.id === "hero") {
          setTimeout(() => {
            sec.classList.add("is-revealed");
          }, 120);
        } else {
          sec.classList.remove("is-revealed");
          observer.observe(sec);
        }
      } else {
        // If refreshed while already scrolled down:
        const rect = sec.getBoundingClientRect();
        // Reveal if section is currently occupying or near the active viewport
        if (rect.top < window.innerHeight * 0.82 && rect.bottom > 60) {
          sec.classList.add("is-revealed");
        } else {
          sec.classList.remove("is-revealed");
          observer.observe(sec);
        }
      }
    });

    // Reveal when user clicks any in-page anchor link (e.g. in Navbar or CTA buttons)
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        const href = link.getAttribute("href");
        if (href && href !== "#") {
          const target = document.querySelector(href);
          if (target && target.classList.contains("scroll-reveal-section")) {
            target.classList.add("is-revealed");
          }
        }
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target && target.classList.contains("scroll-reveal-section")) {
          target.classList.add("is-revealed");
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
}

export default useScrollReveal;
