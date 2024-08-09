import { Metadata } from 'next';
import { API_URL } from '@/app/api';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'The rich',
};

interface IRiches {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

async function getBillionaires() {
  // await new Promise((reslove) => setTimeout(reslove, 50000000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const riches: IRiches[] = await getBillionaires();
  console.log(riches.length);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Riches</div>
      <h1 className={styles.riches}>
        {riches.slice(0, 5).map((rich) => (
          <div className={styles.rich} key={rich.id}>
            {/* <img src={rich.squareImage} alt={rich.id} /> */}
            <h2>{rich.name}</h2>
            <h3>
              {rich.netWorth} / {rich.industries}
            </h3>
          </div>
        ))}
      </h1>
    </div>
  );
}
