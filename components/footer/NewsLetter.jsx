import Link from "next/link";
import styles from "./styles.module.scss";

export default function NewsLetter() {
  return (
    <div className={styles.footer__newsletter}>
      <h3>sign up for our newsletter</h3>

      <div className={styles.footer__flex}>
        <input
          type="text"
          placeholder="Your Email Address..."
          className={styles.input}
        />
        <button className={styles.btn_primary}>Subscribe</button>
      </div>

      <p>
        By clicking the Subscribe button, you are agreeing to{" "}
        <Link href="/">Our Privacy & Cookie Plicy</Link>
      </p>
    </div>
  );
}
