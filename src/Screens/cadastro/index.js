import React, { Component } from 'react';
import './main.css'
class Cadastro extends Component {
    render() {
        return (
            <div className="main-cadastro">
                <header><h2>ENGINE</h2></header>
                <div className="formulario">
                    <form>
                        <input type="text" placeholder="Nome completo" required/>
                        <input type="text" placeholder="Nome da empresa" required/>
                        <input type="email" placeholder="E-mail" required/>
                        <input type="number" placeholder="CNPJ" required/>
                        <input type="password" placeholder="Senha" required/>
                        <input type="password" placeholder="Confirma senha" required/>
                        <button>Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Cadastro;