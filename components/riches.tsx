import styles from '@/app/(home)/home.module.css';
import { IRiches } from '@/app/(home)/page';
import Link from 'next/link';

export default function Riches({
  id,
  squareImage,
  name,
  netWorth,
  industries,
}: IRiches) {
  return (
    <div className={styles.rich}>
      <div className={styles.box}>
        <Link prefetch className={styles.link} href={`/person/${id}`}>
          <img className={styles.img} src={squareImage} alt={id} />
          <h2 className={styles.name}>{name}</h2>
          <h3 className={styles.info}>
            {netWorth.toString().slice(0, -7)} Billion / {industries}
          </h3>
        </Link>
      </div>
    </div>
  );
}
