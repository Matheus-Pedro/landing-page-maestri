// Adiciona todas as features de data, no Information section:

import {featureData} from "./data"


export default function InformationSection(){
    const listFeatures = featureData.map(featureData =>
        <div className="feature" key = {featureData.id}>
            <h2 >{featureData.h2}</h2>
            <p >{featureData.p}</p>
        </div>
      );
    return (
        <section className="features">
            {listFeatures}
        </section>
    );
};