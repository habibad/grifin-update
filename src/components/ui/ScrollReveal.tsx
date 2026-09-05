"use client";

import React, { useEffect, useRef, useState } from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "blur-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  threshold?: number;
  rootMargin?: string;
  bidirectional?: boolean; // bidirectional: exits when scrolling away, re-animates on return
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
  bidirectional = true,
  className = "",
  style = {},
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          if (bidirectional) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [bidirectional, threshold, rootMargin]);

  // Initial transform and filter styles according to variant
  const getInitialStyle = (): React.CSSProperties => {
    switch (variant) {
      case "fade-down":
        return { transform: "translateY(-26px)", opacity: 0 };
      case "fade-left":
        return { transform: "translateX(36px)", opacity: 0 };
      case "fade-right":
        return { transform: "translateX(-36px)", opacity: 0 };
      case "zoom-in":
        return { transform: "scale(0.95)", opacity: 0 };
      case "blur-in":
        return { filter: "blur(8px)", transform: "translateY(16px)", opacity: 0 };
      case "fade-up":
      default:
        return { transform: "translateY(32px)", opacity: 0 };
    }
  };

  const visibleStyle: React.CSSProperties = {
    transform: "translate3d(0, 0, 0) scale(1)",
    opacity: 1,
    filter: "blur(0px)",
  };

  // Luxury cubic-bezier transition curve
  const transitionStyle: React.CSSProperties = {
    transitionProperty: "opacity, transform, filter",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: isVisible ? `${delay}ms` : "0ms",
    willChange: isVisible ? "auto" : "opacity, transform",
    ...(isVisible ? visibleStyle : getInitialStyle()),
    ...style,
  };

  // SSR or before mount fallback: render normally to prevent flash
  if (!hasMounted) {
    return (
      <Component ref={ref} className={className} style={style}>
        {children}
      </Component>
    );
  }

  return (
    <Component ref={ref} className={className} style={transitionStyle}>
      {children}
    </Component>
  );
}
