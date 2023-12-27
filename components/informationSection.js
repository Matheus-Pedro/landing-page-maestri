import feature from "./data"


export default function InformationSection(){
    const listFeatures = feature.map(feature =>
        <div className="feature" key = {feature.id}>
            <h2 >{feature.h2}</h2>
            <p >{feature.p}</p>
        </div>
      );
    return (
        <section className="features">
            {listFeatures}
        </section>
    );
};