import { API_URL } from '@/app/api';
import styles from './rich.module.css';
import Info, { getBillionaire, IPerson } from '@/components/info';
import Assets from '@/components/assets';
import { Suspense } from 'react';

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const person: IPerson = await getBillionaire(id);
  return {
    title: person.name,
    description: `The info of ${person.name}`,
  };
}

export default async function Rich({ params: { id } }: IParams) {
  const person: IPerson = await getBillionaire(id);
  return (
    <div className={styles.container}>
      <Suspense
        fallback={<h1 className={styles.loading}>Loading PersonInfo</h1>}
      >
        <Info id={id} />
      </Suspense>
      {person.financialAssets ? (
        <Suspense
          fallback={<h1 className={styles.loading}>Loading AssetsInfo</h1>}
        >
          <Assets id={id} />
        </Suspense>
      ) : null}
    </div>
  );
}
