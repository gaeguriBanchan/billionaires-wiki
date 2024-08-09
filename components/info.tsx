import { API_URL } from '@/app/api';
import styles from '@/app/person/[id]/rich.module.css';

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
  financialAssets?: IAssets[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

export async function getBillionaire(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 50000000));
  const response = await fetch(`${API_URL}/person/${id}`);
  const json = await response.json();
  return json;
}

export default async function Info({ id }: { id: string }) {
  const person: IPerson = await getBillionaire(id);
  return (
    <div className={styles.infoBox}>
      <div className={styles.infoBoxTop}>
        <img className={styles.img} src={person.squareImage} alt={person.id} />
        <div className={styles.textBox}>
          <h1 className={styles.name}>{person.name}</h1>
          <h2 className={styles.sub}>
            NetWorth: {person.netWorth.toString().slice(0, -7)} Billion
          </h2>
          <h2 className={styles.sub}>
            Country: {person.country} / {person.city}
          </h2>
          <h2 className={styles.sub}>Industry: {person.industries}</h2>
        </div>
      </div>
      <div className={styles.bioBox}>
        {person.bio.map((text, index) => (
          <p className={styles.bio} key={index}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
