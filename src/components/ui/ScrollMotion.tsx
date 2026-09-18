"use client";

import { useEffect } from "react";

/** Adds motion only after hydration, so the page stays readable without JavaScript. */
export function ScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-motion]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          element.removeAttribute("data-motion-pending");
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0.08 },
    );

    for (const element of targets) {
      // Anything already in view is left visible; only upcoming content is staged.
      if (element.getBoundingClientRect().top > window.innerHeight * 0.88) {
        element.setAttribute("data-motion-pending", "");
        observer.observe(element);
      }
    }

    return () => {
      observer.disconnect();
      for (const element of targets) element.removeAttribute("data-motion-pending");
    };
  }, []);

  return null;
}
