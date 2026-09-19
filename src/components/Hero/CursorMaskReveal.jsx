import React, { useState, useRef, useEffect, useCallback } from "react";
import "./CursorMaskReveal.css";
import { BsStars } from "react-icons/bs";

/**
 * CursorMaskReveal Component
 * Stacks two distinct images directly on top of each other:
 * - Base (Main) Image: Main-profile.jpeg (always visible)
 * - Reveal (Back) Image: profile-back.jpg (strictly revealed ONLY when cursor/touch is on the image)
 *
 * Tracks cursor position and applies CSS `clip-path: circle(radius at x y)` exclusively when hovered.
 */
function CursorMaskReveal({
  mainImage,
  revealImage,
  mainAlt = "Siva M - Present Portrait",
  revealAlt = "Siva M - Childhood Portrait",
  spotlightRadius = 75,
}) {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 280, height: 360 });

  // Track container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth || 280;
        const h = containerRef.current.offsetHeight || 360;
        setContainerSize({ width: w, height: h });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

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
  }, []);

  // Touch Handlers for Mobile & Tablets
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

  const handleTouchEnd = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Spotlight radius is active ONLY when user is hovering/touching
  const effectiveSpotlightRadius = Math.min(spotlightRadius, containerSize.width * 0.3);
  const currentRadius = isHovered ? effectiveSpotlightRadius : 0;

  // Inline CSS clip-path for spotlight reveal of the 2nd (back) image
  const maskStyle = {
    clipPath: `circle(${currentRadius}px at ${coords.x}px ${coords.y}px)`,
    WebkitClipPath: `circle(${currentRadius}px at ${coords.x}px ${coords.y}px)`,
    opacity: isHovered ? 1 : 0,
    transition: isHovered
      ? "clip-path 0.06s ease-out, -webkit-clip-path 0.06s ease-out, opacity 0.25s ease"
      : "clip-path 0.3s cubic-bezier(0.16, 1, 0.3, 1), -webkit-clip-path 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
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
      {/* 1. Main Base Image (Main-profile.jpeg) - Always Visible */}
      <div className="mask-layer mask-base-layer">
        <img
          src={mainImage}
          alt={mainAlt}
          className="mask-photo-img photo-main"
        />
        <div className="mask-base-vignette"></div>
      </div>

      {/* 2. Top Reveal Image (profile-back.jpg) - Visible ONLY when cursor is placed on the image */}
      <div className="mask-layer mask-reveal-layer" style={maskStyle}>
        <img
          src={backImageSrc}
          alt={revealAlt}
          className="mask-photo-img photo-back"
        />
        <div className="mask-back-vignette"></div>
      </div>

      {/* Holographic Glowing Spotlight Lens Ring - Visible ONLY when hovering */}
      <div
        className={`spotlight-lens-ring ${isHovered ? "is-visible" : ""}`}
        style={{
          width: `${effectiveSpotlightRadius * 2}px`,
          height: `${effectiveSpotlightRadius * 2}px`,
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          opacity: isHovered ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0.5})`,
        }}
        aria-hidden="true"
      >
        <span className="lens-crosshair-center"></span>
      </div>

      {/* Interactive Discovery Hint Pill */}
      <div className={`mask-discovery-pill ${hasInteracted ? "faded" : ""}`}>
        <BsStars className="hint-sparkle-ico" />
        <span>Hover over photo to reveal childhood photo</span>
      </div>
    </div>
  );
}

export default CursorMaskReveal;
