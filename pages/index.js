// Cria janela principal chamando alguns componentes:

import Header from "../components/header";
import Footer from "../components/footer";
import InformationSection from "../components/informationSection";
import ButtonCta from "../components/buttonCta";
import ContactSection from "../components/contactSection";
import Head from "../components/head";

export default function App(){

  return (
    
    <div className="landing-page">
      <Head title="Home"/>
      <Header/>
      <InformationSection/>
      <section className="cta">
        <h2>Pronto para começar sua jornada educacional?</h2>
        <p>Inscreva-se agora e transforme sua aprendizagem, antes que acabe o tempo!</p>
        <ButtonCta/>
      </section>
      <Footer/>
    </div>
  );
};

