import styles from "@/styles/Header.module.css"
import ButtonCta from "./ButtonCta";

export function Title(){
  return(
    <div className={styles.Title}>
      <h1>
        2024: O Ano da Sua Grande Virada com a Maestri.Edu
      </h1>
      <p>
        Redefina Seu Futuro com a Maestri.Edu!
      </p>
    </div>
  );
}
export default function Header() {
  return (
    <header
      className={styles.header}
    >
      <img src="/logo_794x1123.png" alt="Logo" className={styles.logo}/>
      <Title className={styles.title}/>
      <ButtonCta />
    </header>
  );
};