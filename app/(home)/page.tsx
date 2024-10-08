import { Metadata } from 'next';
import { API_URL } from '@/app/api';
import styles from './home.module.css';
import Link from 'next/link';
import Riches from '@/components/riches';

export const metadata: Metadata = {
  title: 'The rich',
};

export interface IRiches {
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

  return (
    <div className={styles.container}>
      <h1 className={styles.riches}>
        {riches.slice(0, 60).map((rich) => (
          <Riches
            key={rich.id}
            id={rich.id}
            industries={rich.industries}
            name={rich.name}
            netWorth={rich.netWorth}
            squareImage={rich.squareImage}
          />
        ))}
      </h1>
    </div>
  );
}
