import Link from "next/link";
import styles from "./styles.module.scss";

export default function UserMenu({ session }) {
  return (
    <div className={styles.menu}>
      {session ? (
        <>
          <div className={styles.flex}>
            <img
              src={session.data.user.image}
              alt=""
              className={styles.menu__img}
            />

            <div className={styles.col}>
              <span>Welcome Back,</span>
              <h3>{session.data.user.name.split(" ")[0]}</h3>
              <span onClick={() => signOut()}>Sign out</span>
            </div>
          </div>

          <ul>
            <li>
              <Link href="/profile">Account</Link>
            </li>

            <li>
              <Link href="/profile/orders">My Orders</Link>
            </li>

            <li>
              <Link href="/profile/messages">Message Center</Link>
            </li>

            <li>
              <Link href="/profile/address">Address</Link>
            </li>

            <li>
              <Link href="/profile/whishlist">Whishlist</Link>
            </li>
          </ul>
        </>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>
      )}
    </div>
  );
}
