// Cria janela principal chamando alguns componentes:

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InformationSection from "@/components/InformationSection";
import ButtonCta from "@/components/ButtonCta";
import ContactSection from "@/components/ContactSection";
import Head from "@/components/Head";
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