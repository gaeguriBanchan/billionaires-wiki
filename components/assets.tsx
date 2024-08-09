import styles from '@/app/person/[id]/rich.module.css';
import { getBillionaire, IPerson } from './info';

export default async function Assets({ id }: { id: string }) {
  const person: IPerson = await getBillionaire(id);
  return (
    <div className={styles.assetsBox}>
      <h1 className={styles.name}>Financial Assets</h1>
      {person.financialAssets ? (
        <div className={styles.assetInfo}>
          {person.financialAssets.map((asset, index) => (
            <div className={styles.asset} key={index}>
              <span>Ticker: {asset.ticker}</span>
              <span>Shares: {asset.numberOfShares.toLocaleString()}</span>
              {asset.exerciseOptionPrice ? (
                <span>Exercise Price: ${asset.exerciseOptionPrice}</span>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
