// Footer do site:
import { SlSocialInstagram, SlSocialGithub, SlSocialYoutube, SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import styles from "@/styles/Footer.module.css"

export function SectionFooter(){
    return(
        <div className={styles.footerSection}>
        </div>

    );
}

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div class={styles.container}>
                <div class={styles.footerContent}>
                <div className={styles.footerSection}>
                    <img className={styles.logo} src="\logo_white_side_1100x349.png"/>
                </div>
                <div className={styles.footerSection}>
                    <h3>Sobre Nós</h3>
                    <p>Uma breve descrição sobre a empresa e projeto.</p>
                </div>


                <div className={styles.footerSection}>
                    <h3>Links Rápidos</h3>
                    <ul>
                    <li><a href="#">Página Inicial</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                    </ul>
                </div>


                <div className={styles.footerSection}>
                    <h3>Mídias Sociais</h3>
                    <a href="https://www.youtube.com/" target="_blank"><SlSocialYoutube className={styles.socialMedia}/></a>
                    <a href = "https://www.facebook.com" target="_blank"><SlSocialFacebook className={styles.socialMedia}/></a>
                    <a href="https://www.instagram.com" target="_blank"><SlSocialInstagram className={styles.socialMedia}/></a>
                    <a href="https://www.linkedin.com/" target="_blank"><SlSocialLinkedin className={styles.socialMedia}/></a>
                    <a href="https://github.com/" target="_blank"><SlSocialGithub className={styles.socialMedia}/></a>
                </div>

                <div className={styles.footerSection}>
                    <h3>Contato</h3>
                    <span>Email:</span>
                    <p>
                    groupmaestri@gmail.com
                    </p>
                    <span>Telefone:</span>
                    <p>
                    (12) 1234-5678
                    </p>
                </div>
                </div>
            </div>
            <hr/>
            <div class={styles.footerBottom}>
                <p>&copy; 2024 Maestri.Edu | Todos os direitos reservados.</p>
                <p>V7M Empresarial LTDA - CNPJ 48.811.016/0001-00</p>
            </div>
        </footer>

    );

};

// Em desenvolvimento...