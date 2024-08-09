import { getBillionaire, IAssets, IPerson } from '@/app/person/[id]/page';
import styles from '@/app/person/[id]/rich.module.css';

export default async function Assets({ id }: { id: string }) {
  const person: IPerson = await getBillionaire(id);
  return (
    <div className={styles.assetsBox}>
      <h1 className={styles.name}>Financial Assets</h1>
      <div className={styles.assetInfo}>
        {person.financialAssets.map((asset, index) => (
          <div className={styles.asset} key={index}>
            <span>Ticker: {asset.ticker}</span>
            <span>Shares: {asset.numberOfShares}</span>
            {asset.exerciseOptionPrice ? (
              <span>Exercise Price: ${asset.exerciseOptionPrice}</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
