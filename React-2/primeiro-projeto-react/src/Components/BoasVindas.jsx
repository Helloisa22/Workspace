import React from "react";

function NomeAluno (props){
    return <h1>Calmô, {props.name}, não se vá</h1>
}

const mensagem = () => {
    return (
        <NomeAluno name="Jun Leandro Matue" />
    )
}

// Jun Leandro Matue

export default mensagem;




// function Mensagem(props) {
//     return <h1>Olá, {props.name}</h1>;
// }