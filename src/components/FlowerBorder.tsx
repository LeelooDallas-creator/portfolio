import { useEffect, useRef, useState } from "react";

const FlowerBorder = () => {
  const flowerEmoji = "🌸";
  const containerRef = useRef<HTMLDivElement>(null);
  const [flowerCount, setFlowerCount] = useState(20);

  useEffect(() => {
    if (!containerRef.current) return;

    const calculateFlowers = () => {
      if (!containerRef.current) return;

      const style = window.getComputedStyle(containerRef.current);
      const width =
        containerRef.current.clientWidth -
        parseFloat(style.paddingLeft) -
        parseFloat(style.paddingRight);

      const emojiWidth = 24;

      const maxFlowers = Math.floor(width / emojiWidth);

      setFlowerCount(Math.min(Math.max(maxFlowers, 5), 20));
    };

    calculateFlowers();

    const resizeObserver = new ResizeObserver(() => {
      calculateFlowers();
    });

    resizeObserver.observe(containerRef.current);

    window.addEventListener("resize", calculateFlowers);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateFlowers);
    };
  }, []);

  const flowers = flowerEmoji.repeat(flowerCount);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        padding: "2.5rem 2rem",
        margin: "2rem auto",
        maxWidth: "100%",
        fontSize: "1rem",
        color: "var(--text-main)",
        textAlign: "center",
        boxSizing: "border-box",
      }}
      data-testid="flower-border"
    >
      <style>{`
        .flower-line {
          position: absolute;
          left: 0;
          width: 100%;
          font-size: 1.3rem;
          letter-spacing: 0.25rem;
          color: var(--violet);
          white-space: nowrap;
          overflow: hidden;
          user-select: none;
          pointer-events: none;
          top: 0;
        }
        .flower-line.bottom {
          top: auto;
          bottom: 0;
        }
        .flower-content {
          position: relative;
          display: inline-block;
          padding: 0 1rem; /* padding horizontal sans fleurs sur les côtés */
          box-sizing: border-box;
          max-width: 100%;
          white-space: normal;
          /* suppression des fleurs latérales */
        }
        @media (max-width: 600px) {
          .flower-line {
            font-size: 1.1rem;
            letter-spacing: 0.15rem;
          }
        }
      `}</style>

      <div className="flower-line top">{flowers}</div>

      <div className="flower-content">
        Recherche un poste en back-end ou en fullstack pour janvier 2026
      </div>

      <div className="flower-line bottom">{flowers}</div>
    </div>
  );
};

export default FlowerBorder;
