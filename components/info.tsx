import styles from '@/app/person/[id]/rich.module.css';

export default function Info({
  squareImage,
  id,
  name,
  netWorth,
  country,
  city,
  industries,
  bio,
}: {
  squareImage: string;
  id: string;
  name: string;
  netWorth: number;
  country: string;
  city: string;
  industries: string[];
  bio: string[];
}) {
  return (
    <div className={styles.infoBox}>
      <div className={styles.infoBoxTop}>
        <img className={styles.img} src={squareImage} alt={id} />
        <div className={styles.textBox}>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.sub}>
            NetWorth: {netWorth.toString().slice(0, -7)} Billion
          </h2>
          <h2 className={styles.sub}>
            Country: {country} / {city}
          </h2>
          <h2 className={styles.sub}>Industry: {industries}</h2>
        </div>
      </div>
      <div className={styles.bioBox}>
        {bio.map((text, index) => (
          <p className={styles.bio} key={index}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
