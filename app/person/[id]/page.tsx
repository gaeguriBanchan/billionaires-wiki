import { API_URL } from '@/app/api';
import styles from './rich.module.css';
import Info from '@/components/info';
import Assets from '@/components/assets';
import { Suspense } from 'react';

interface IParams {
  params: { id: string };
}

export interface IAssets {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  exerciseOptionPrice?: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
}

export interface IPerson {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  industries: string[];
  financialAssets: IAssets[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

export async function generateMetadata({ params: { id } }: IParams) {
  const person: IPerson = await getBillionaire(id);
  return {
    title: person.name,
    description: `The info of ${person.name}`,
  };
}

export async function getBillionaire(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 50000000));
  const response = await fetch(`${API_URL}/person/${id}`);
  const json = await response.json();
  return json;
}

export default async function Rich({ params: { id } }: IParams) {
  const person: IPerson = await getBillionaire(id);
  return (
    <div className={styles.container}>
      <Suspense
        fallback={<h1 className={styles.loading}>Loading PersonInfo</h1>}
      >
        <Info
          id={person.id}
          bio={person.bio}
          city={person.city}
          country={person.country}
          name={person.name}
          industries={person.industries}
          netWorth={person.netWorth}
          squareImage={person.squareImage}
        />
      </Suspense>
      <Suspense
        fallback={<h1 className={styles.loading}>Loading AssetsInfo</h1>}
      >
        <Assets id={id} />
      </Suspense>
    </div>
  );
}
