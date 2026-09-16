"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionSystem() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      if (reduced) return;
      if (document.querySelector(".hero-visual")) {
        gsap.timeline({ defaults: { ease: "power3.out" } }).to(".hero-visual", { autoAlpha: 1, duration: 1.1 }).to(".hero-line", { scaleX: 1, duration: .85 }, "-=.55").from(".hero-title span", { yPercent: 110, duration: .85, stagger: .08 }, "-=.55").from(".hero-copy > *", { y: 20, autoAlpha: 0, duration: .65, stagger: .08 }, "-=.5");
      }
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => gsap.from(element, { y: 45, autoAlpha: 0, duration: .9, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } }));
      gsap.utils.toArray<HTMLElement>("[data-line-grow]").forEach((element) => gsap.fromTo(element, { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: element, start: "top 80%", end: "bottom 35%", scrub: true } }));
      if (document.querySelector(".xa-transition")) {
        gsap.to(".xa-left", { xPercent: -28, scrollTrigger: { trigger: ".xa-transition", start: "top top", end: "bottom top", scrub: 1 } });
        gsap.to(".xa-right", { xPercent: 28, scrollTrigger: { trigger: ".xa-transition", start: "top top", end: "bottom top", scrub: 1 } });
      }
      gsap.utils.toArray<HTMLElement>(".parallax-image img").forEach((image) => gsap.to(image, { yPercent: 9, ease: "none", scrollTrigger: { trigger: image.parentElement, start: "top bottom", end: "bottom top", scrub: true } }));
      if (document.querySelector(".manifesto")) gsap.to(".manifesto-word:nth-child(2)", { x: 42, scrollTrigger: { trigger: ".manifesto", start: "top bottom", end: "bottom top", scrub: true } });
    });
    const trackEvents = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-event]");
      if (!target) return;
      const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer ||= [];
      dataLayer.push({ event: target.dataset.event, page_path: window.location.pathname, ...Object.fromEntries(new URLSearchParams(window.location.search)) });
    };
    document.addEventListener("click", trackEvents);
    return () => { context.revert(); document.removeEventListener("click", trackEvents); };
  }, []);
  return null;
}
