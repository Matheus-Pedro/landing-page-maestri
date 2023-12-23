import { useState } from "react"

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Contador/>
        </div>
    )
 }

function Contador() {
    const [contador, setContador] = useState(1);

    function aumentarContador(){
        setContador(contador + 1);
    }

    function diminuirContador(){
        setContador(contador - 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={aumentarContador}>aumentar</button>
            <button onClick={diminuirContador}>diminuir</button>
        </div>
    )
}


 export default Home