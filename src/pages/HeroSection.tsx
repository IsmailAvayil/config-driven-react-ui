import type { HeroType } from "../types/hero-type";

export default function Hero({ title, subtitle, styles }: HeroType) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
