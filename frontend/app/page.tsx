"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./home.module.css";

const BOTTLE = "/images/jagermeister.png";

// Poza de fundal colorată în verde (duotone prin "multiply") + vignette întunecat
const BACKGROUND =
  "radial-gradient(ellipse at 50% 40%, rgba(4,9,6,.35) 0%, rgba(4,9,6,.95) 88%), " +
  "linear-gradient(#3d6e51, #3d6e51), " +
  "url('/images/fundal-web.webp')";

export default function HomePage() {
  return (
    <div
      className={styles.page}
      style={{
        backgroundImage: BACKGROUND,
        backgroundBlendMode: "normal, multiply, normal",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className={styles.main}>
        <div className={styles.stage}>
          <div className={styles.glow} />
          <div className={styles.float}>
            <div className={styles.bottleWrap}>
              <img className={styles.bottleImg} src={BOTTLE} alt="Sticlă Jägermeister" draggable={false} />
              {/* reflexia care trece peste sticlă (decupată cu forma sticlei) */}
              <div
                className={styles.shine}
                style={{
                  WebkitMaskImage: `url(${BOTTLE})`,
                  maskImage: `url(${BOTTLE})`,
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
          <div className={styles.shadow} />
        </div>

        <h1 className={styles.title}>
          Con<span>spritz</span>ädor
        </h1>
        <p className={styles.tagline}>
          Care cucerește mai mare Bucureștiul?
        </p>
        <div className={styles.actions}>
          <Link href="/host" className={styles.btnPrimary}>
            Creează joc
          </Link>
          <Link href="/join" className={styles.btnSecondary}>
            Intră într-un joc
          </Link>
        </div>
      </main>

      <div className={styles.footer}>Party game privat · Ediția Spritz Residence · 2026</div>
    </div>
  );
}
