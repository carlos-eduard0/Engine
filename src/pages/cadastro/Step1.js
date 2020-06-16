import React, { Component } from 'react';
import { formatToPhone} from 'brazilian-values';
import './form.css'
class Step1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { nome, email, telefone, handleChange } = this.props;
        return (
            <div className="form">
                <strong>Dados Pessoais</strong>
                <form action="submit" onSubmit={this.continue}>
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                        type="text"
                        name="nome"
                        value={nome}
                        required
                        onChange={handleChange('nome')}
                    />
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        required
                        onChange={handleChange('email')}
                    />
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="text"
                        name="telefone"
                        value={formatToPhone(telefone)}
                        required
                        onChange={handleChange('telefone')}
                    />
                    <button type="submit" id="next">Próximo</button>
                </form>
            </div>
        );
    }
}

export default Step1;