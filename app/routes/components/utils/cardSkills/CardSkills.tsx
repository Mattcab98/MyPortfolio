import { useEffect, useRef, useState } from "react";
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiGit } from "react-icons/di";
import styles from "./cardSkills.module.css";

const icons = [
  { component: DiHtml5, className: styles.iconHtml },
  { component: DiCss3, className: styles.iconCss },
  { component: DiJsBadge, className: styles.iconJs },
  { component: DiReact, className: styles.iconReact },
  { component: DiGit, className: styles.iconGit },
];

type Bubble = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  ref: HTMLDivElement | null;
};

export default function CardSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const BUBBLE_SIZE = 70;

  const bubblesRef = useRef<Bubble[]>(
    Array(icons.length)
      .fill(0)
      .map(() => ({ x: 0, y: 0, dx: 0, dy: 0, ref: null }))
  );

  // ✅ Estado para hover individual
  const [hovered, setHovered] = useState(Array(icons.length).fill(false));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Inicializar posiciones y velocidades
    bubblesRef.current.forEach((b) => {
      b.x = Math.random() * (width - BUBBLE_SIZE);
      b.y = Math.random() * (height - BUBBLE_SIZE);
      b.dx = (Math.random() - 0.6) * 2.5;
      b.dy = (Math.random() - 0.6) * 2.5;
    });

    let animationFrame: number;

    const animate = () => {
      bubblesRef.current.forEach((b, index) => {
        if (!b.ref || hovered[index]) return; // ❌ si está hovered, no se mueve

        let newX = b.x + b.dx;
        let newY = b.y + b.dy;

        if (newX < 0) { newX = 0; b.dx = Math.abs(b.dx); }
        if (newX > width - BUBBLE_SIZE) { newX = width - BUBBLE_SIZE; b.dx = -Math.abs(b.dx); }
        if (newY < 0) { newY = 0; b.dy = Math.abs(b.dy); }
        if (newY > height - BUBBLE_SIZE) { newY = height - BUBBLE_SIZE; b.dy = -Math.abs(b.dy); }

        b.x = newX;
        b.y = newY;

        b.ref.style.left = `${newX}px`;
        b.ref.style.top = `${newY}px`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [hovered]); // ❗ depende de hovered

  return (
    <div ref={containerRef} className={styles.skillsSection}>
      {icons.map((icon, index) => {
        const Icon = icon.component;
        return (
          <div
            key={index}
            className={`${styles.skill} ${hovered[index] ? styles.hovered : ""}`}
            ref={(el) => { bubblesRef.current[index].ref = el; }}
            onMouseEnter={() => {
              setHovered((prev) => {
                const newHovered = [...prev];
                newHovered[index] = true;
                return newHovered;
              });
            }}
            onMouseLeave={() => {
              setHovered((prev) => {
                const newHovered = [...prev];
                newHovered[index] = false;
                return newHovered;
              });
            }}
          >
            <Icon className={`${styles.icon} ${icon.className}`} />
          </div>
        );
      })}
    </div>
  );
}
