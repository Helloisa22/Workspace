import React from "react";
import { useState } from 'react'; 

function Mensagem(props) {
    return <h1>Olá, {props.name}</h1>;
}

const Teste = () =>{
    const [contador, setContador] = useState(0);
    return(
         
        <div>
            <p>Você clicou {contador} vezes</p>
            <button onClick={() => setContador(contador + 2)}>Clique aqui</button>
            <Mensagem name='CNPJOTOS'/>
        </div> 
    )
}

export default Teste;