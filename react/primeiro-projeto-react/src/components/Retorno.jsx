import React from "react";
import PropTypes from 'prop-types';

const estilo = {color: 'blue', fontSize: '20px'};

const Retorno = (props) => {
    return(
        <div>
            <h1 style={estilo}>Calmô, {props.name}, Seja bem-vindo</h1>
        </div>
    )
}

Retorno.defaultProps = {
    name: 'CNPJOTO',
}

export default Retorno;