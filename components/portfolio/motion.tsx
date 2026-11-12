"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Restrained, one-time entrance animations. Content remains visible without JS. */
export function PortfolioMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.from('[data-animate="hero"]', {
        autoAlpha: 0,
        y: 22,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
      });

      gsap.utils.toArray<HTMLElement>('[data-animate="reveal"]').forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 20,
          duration: 0.65,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            once: true,
          },
        });
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
