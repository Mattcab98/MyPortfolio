import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./changeWord.module.css";

interface ChangeWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function ChangeWords({
  words,
  interval = 5000,
  className,
}: ChangeWordsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`${styles.word} ${className ?? ""}`}
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
