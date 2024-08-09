'use client';

import Link from 'next/link';
import styles from './navigation.module.css';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      {/* <div className={styles.box}>
        {path === '/' ? (
          <Link href="/" className={styles.link}>
            Billionaires-Wiki
          </Link>
        ) : (
          <Link href="/" className={styles.link}>
            Billionaires-Wiki
          </Link>
        )}
      </div> */}
      <Link href="/" className={styles.link}>
        Billionaires-Wiki
      </Link>
    </nav>
  );
}
