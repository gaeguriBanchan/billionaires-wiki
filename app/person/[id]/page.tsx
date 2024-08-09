import { API_URL } from '@/app/api';
import styles from './rich.module.css';
import Info from '@/components/info';
import Assets from '@/components/assets';

interface IParams {
  params: { id: string };
}

interface IAssets {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
}

interface IPerson {
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
  };
}

export async function getBillionaire(id: string) {
  // await new Promise((reslove) => setTimeout(reslove, 50000000));
  const response = await fetch(`${API_URL}/person/${id}`);
  const json = await response.json();
  return json;
}

export default async function Rich({ params: { id } }: IParams) {
  const person: IPerson = await getBillionaire(id);
  return (
    <div className={styles.container}>
      {/* info */}
      <Info />
      {/* Assets */}
      <Assets />
    </div>
  );
}
