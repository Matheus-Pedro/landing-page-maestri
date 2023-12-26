import Header from "../components/header";
import Footer from "../components/footer";

export default function App(){
  return (
    <div className="landing-page">
      <Header/>
      <section className="features">
        <div className="feature">
          <h2>Cursos Online</h2>
          <p>Explore uma variedade de cursos em diversas áreas.</p>
        </div>
        <div className="feature">
          <h2>Aulas Interativas</h2>
          <p>Participe de aulas ao vivo e interaja com instrutores especializados.</p>
        </div>
        <div className="feature">
          <h2>Recursos de Aprendizagem</h2>
          <p>Acesse materiais de estudo, quizzes e fóruns para aprimorar seu conhecimento.</p>
        </div>
      </section>
      <section className="cta">
        <h2>Pronto para começar sua jornada educacional?</h2>
        <p>Inscreva-se agora e transforme sua aprendizagem!</p>
        <button>Inscrever-se</button>
      </section>
      <Footer/>
    </div>
  );
};

