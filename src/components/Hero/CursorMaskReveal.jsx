import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CursorMaskReveal.css";
import { BsStars } from "react-icons/bs";

/**
 * CursorMaskReveal Component
 * Stacks two distinct images directly on top of each other:
 * - Base (Main) Image: profile.jpeg
 * - Reveal (Back) Image: profile-back.jpg (visible only inside the spotlight cursor mask)
 *
 * Tracks user cursor/touch coordinates and applies inline CSS `clip-path: circle(radius at x y)`
 * with smooth easing on hover/drag and an idle auto-scan fallback.
 */
function CursorMaskReveal({
  mainImage,
  revealImage,
  mainAlt = "Siva M - Present Portrait",
  revealAlt = "Siva M - Childhood Portrait",
  spotlightRadius = 125,
}) {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 140, y: 170 });
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isAutoScanning, setIsAutoScanning] = useState(true);
  const [containerSize, setContainerSize] = useState({ width: 280, height: 360 });
  const animFrameRef = useRef(null);
  const autoScanStartTime = useRef(Date.now());

  // Track container dimensions and initialize center coordinates
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth || 280;
        const h = containerRef.current.offsetHeight || 360;
        setContainerSize({ width: w, height: h });
        setCoords((prev) => ({
          x: Math.min(prev.x || w / 2, w),
          y: Math.min(prev.y || h / 2, h),
        }));
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Gentle auto-scan floating spotlight when idle
  useEffect(() => {
    if (isHovered) {
      setIsAutoScanning(false);
      return;
    }

    let isMounted = true;
    const animateAutoScan = () => {
      if (!isMounted || isHovered) return;

      const elapsed = (Date.now() - autoScanStartTime.current) / 1000;
      const width = containerRef.current?.offsetWidth || containerSize.width || 280;
      const height = containerRef.current?.offsetHeight || containerSize.height || 360;

      const cx = width / 2 + Math.sin(elapsed * 0.95) * (width * 0.24);
      const cy = height / 2 + Math.cos(elapsed * 1.35) * (height * 0.22);

      setCoords({ x: cx, y: cy });
      setIsAutoScanning(true);

      animFrameRef.current = requestAnimationFrame(animateAutoScan);
    };

    animFrameRef.current = requestAnimationFrame(animateAutoScan);

    return () => {
      isMounted = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isHovered, containerSize.width, containerSize.height]);

  // Mouse Move Handler
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y });
    setIsHovered(true);
    setHasInteracted(true);
  }, []);

  // Mouse Enter Handler
  const handleMouseEnter = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
    setHasInteracted(true);
  }, []);

  // Mouse Leave Handler
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    autoScanStartTime.current = Date.now();
  }, []);

  // Touch Handlers for Mobile & Tablets
  const handleTouchMove = useCallback((e) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    setCoords({ x, y });
    setIsHovered(true);
    setHasInteracted(true);
  }, []);

  const handleTouchStart = useCallback((e) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setCoords({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
    setIsHovered(true);
    setHasInteracted(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setTimeout(() => {
      setIsHovered(false);
      autoScanStartTime.current = Date.now();
    }, 1800);
  }, []);

  // Active spotlight radius based on hover / auto-scan state and container size
  const effectiveSpotlightRadius = Math.min(spotlightRadius, containerSize.width * 0.38);
  const effectiveAutoScanRadius = Math.min(85, containerSize.width * 0.28);
  const currentRadius = isHovered ? effectiveSpotlightRadius : isAutoScanning ? effectiveAutoScanRadius : 0;

  // Inline CSS clip-path for spotlight reveal of the 2nd (back) image
  const maskStyle = {
    clipPath: `circle(${currentRadius}px at ${coords.x}px ${coords.y}px)`,
    WebkitClipPath: `circle(${currentRadius}px at ${coords.x}px ${coords.y}px)`,
    transition: isHovered
      ? "clip-path 0.08s ease-out, -webkit-clip-path 0.08s ease-out"
      : "clip-path 0.45s cubic-bezier(0.16, 1, 0.3, 1), -webkit-clip-path 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const backImageSrc = revealImage || mainImage;

  return (
    <div
      ref={containerRef}
      className={`cursor-mask-container ${isHovered ? "is-active" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Interactive Dual-Image Cursor Spotlight Mask Reveal"
    >
      {/* 1. Main Base Image (profile.jpeg) */}
      <div className="mask-layer mask-base-layer">
        <img
          src={mainImage}
          alt={mainAlt}
          className="mask-photo-img photo-main"
        />
        <div className="mask-base-vignette"></div>
      </div>

      {/* 2. Top Reveal Image (profile-back.jpg) Revealed ONLY by the cursor mask spotlight */}
      <div className="mask-layer mask-reveal-layer" style={maskStyle}>
        <img
          src={backImageSrc}
          alt={revealAlt}
          className="mask-photo-img photo-back"
        />
        <div className="mask-back-vignette"></div>
      </div>

      {/* Holographic Glowing Spotlight Lens Ring */}
      <div
        className="spotlight-lens-ring"
        style={{
          width: `${currentRadius * 2}px`,
          height: `${currentRadius * 2}px`,
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          opacity: currentRadius > 0 ? 1 : 0,
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      >
        <span className="lens-crosshair-center"></span>
      </div>

      {/* Interactive Discovery Hint Pill */}
      <div className={`mask-discovery-pill ${hasInteracted ? "faded" : ""}`}>
        <BsStars className="hint-sparkle-ico" />
        <span>Hover or drag to reveal childhood photo</span>
      </div>
    </div>
  );
}

export default CursorMaskReveal;
