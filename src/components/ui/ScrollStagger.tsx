"use client";

import React, { useEffect, useRef, useState } from "react";
import { RevealVariant } from "./ScrollReveal";

interface ScrollStaggerProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  staggerInterval?: number; // delay between each child in ms (e.g. 90ms)
  baseDelay?: number; // initial delay before sequence starts
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  bidirectional?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export default function ScrollStagger({
  children,
  variant = "fade-up",
  staggerInterval = 90,
  baseDelay = 0,
  duration = 750,
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
  bidirectional = true,
  className = "",
  style = {},
  as: Component = "div",
}: ScrollStaggerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const element = ref.current;
    if (!element) return;

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

  const getInitialStyle = (): React.CSSProperties => {
    switch (variant) {
      case "fade-down":
        return { transform: "translateY(-24px)", opacity: 0 };
      case "fade-left":
        return { transform: "translateX(30px)", opacity: 0 };
      case "fade-right":
        return { transform: "translateX(-30px)", opacity: 0 };
      case "zoom-in":
        return { transform: "scale(0.94)", opacity: 0 };
      case "blur-in":
        return { filter: "blur(6px)", transform: "translateY(16px)", opacity: 0 };
      case "fade-up":
      default:
        return { transform: "translateY(28px)", opacity: 0 };
    }
  };

  const visibleStyle: React.CSSProperties = {
    transform: "translate3d(0, 0, 0) scale(1)",
    opacity: 1,
    filter: "blur(0px)",
  };

  const childArray = React.Children.toArray(children);

  if (!hasMounted) {
    return (
      <Component ref={ref} className={className} style={style}>
        {children}
      </Component>
    );
  }

  return (
    <Component ref={ref} className={className} style={style}>
      {childArray.map((child, index) => {
        const delay = isVisible ? baseDelay + index * staggerInterval : 0;
        const itemTransitionStyle: React.CSSProperties = {
          transitionProperty: "opacity, transform, filter",
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: `${delay}ms`,
          willChange: isVisible ? "auto" : "opacity, transform",
          ...(isVisible ? visibleStyle : getInitialStyle()),
        };

        return (
          <div key={index} style={itemTransitionStyle} className="contents-wrapper">
            {child}
          </div>
        );
      })}
    </Component>
  );
}
