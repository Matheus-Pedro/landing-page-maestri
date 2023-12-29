// Header.js
import React from 'react';
import styles from '@/styles/Header.module.css';
import ButtonCta from './ButtonCta';
import { FaRegSmile, FaRegThumbsUp, FaRegHeart }  from 'react-icons/fa'; // Substitua 'FaIcon' pelo componente específico que você deseja usar para ícones

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          <div className={styles.title}>
            <h1>
              2024: O Ano da Sua Grande Virada
            </h1>
          </div>
          <p className={styles.subTitle}>Redefina Seu Futuro com a Maestri.Edu!</p>
        </div>
        <div className={styles.rightContent}>
          <img src="/logo_794x1123.png" alt="Logo" className={styles.logo} />
        </div>
      </div>
      <div className={styles.buttonCta}>
            <ButtonCta />
          </div>  
      {/* <div className={styles.iconContainer}>
        <FaRegSmile className={styles.icon} />
        <FaRegThumbsUp className={styles.icon} />
        <FaRegHeart className={styles.icon} />
      </div> */}
    </header>
  );
}
