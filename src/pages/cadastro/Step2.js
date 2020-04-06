import React, { Component } from 'react';
import './form.css'
class Step2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { cpf, cnpj, rg, orgao_emissor, handleChange } = this.props;
        return (
            <div className="form" >
                <strong>Sobre o dono da empresa</strong>
                <form action="submit" onSubmit={this.continue}>
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text"
                        name="cpf"
                        value={cpf}
                        onChange={handleChange('cpf')}
                        required
                    />
                    <label htmlFor="cnpj">CNPJ da empresa</label>
                    <input
                        type="text"
                        name="cnpj"
                        value={cnpj}
                        onChange={handleChange('cnpj')}
                        required
                    />
                    <label htmlFor="rg">RG</label>
                    <input
                        type="text"
                        name="rg"
                        value={rg}
                        onChange={handleChange('rg')}
                        required
                    />
                    <label htmlFor="orgao">Orgão Emissor</label>
                    <input
                        type="text"
                        name="orgao"
                        value={orgao_emissor}
                        onChange={handleChange('orgao_emissor')}
                        required
                    />
                    <div className="button-group">
                        <button id="prev" onClick={this.back}>voltar</button>
                        <button type="submit" id="next">próximo</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Step2;