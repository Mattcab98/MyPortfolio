import { useEffect, useState, useRef } from "react";
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiGit } from "react-icons/di";
import styles from "./cardSkills.module.css";

const icons = [
  { component: DiHtml5, className: styles.iconHtml, percent: 100 },
  { component: DiCss3, className: styles.iconCss, percent: 100 },
  { component: DiJsBadge, className: styles.iconJs, percent: 80 },
  { component: DiReact, className: styles.iconReact, percent: 80 },
  { component: DiGit, className: styles.iconGit, percent: 100 },
];

export default function CardSkills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 a 1

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // porcentaje de scroll dentro de la sección
      const totalScroll = rect.height + windowHeight;
      const scrolled = windowHeight - rect.top;
      const progress = Math.min(Math.max(scrolled / totalScroll, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // actualizar al montar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className={styles.skillsSection}>
      {icons.map(({ component: Icon, className, percent }, index) => {
        const maxWidthVW = (80 * percent) / 100;
        const leftVW = maxWidthVW * scrollProgress;

        return (
          <div key={index} className={styles.bgSkill}>
            <div
              className={styles.skill}
              style={{ left: `${leftVW}vw` }}
            >
              <Icon className={`${styles.icon} ${className}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
