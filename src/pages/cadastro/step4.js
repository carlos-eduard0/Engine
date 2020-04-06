import React, { Component } from 'react';

class Step4 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { nome_banco, agencia, conta, digito, handleChange } = this.props;
        return (
            <div className="form">
                <strong>Dados Bancários</strong>
                <form action="submit" onSubmit={this.continue}>
                    <label htmlFor="nome_banco">Banco</label>
                    <input
                        type="text"
                        name="nome_banco"
                        value={nome_banco}
                        required
                        onChange={handleChange('nome_banco')}

                    />
                    <label htmlFor="agencia">Agência</label>
                    <input
                        type="text"
                        name="agencia"
                        value={agencia}
                        onChange={handleChange('agencia')}
                        required
                    />
                    <div className="input-group">
                        <label htmlFor="conta">Conta</label>
                        <input
                            type="text"
                            name="conta"
                            value={conta}
                            onChange={handleChange('conta')}
                            required
                        />

                        <label htmlFor="digito" id="input-lado">Digito</label>
                        <input
                            type="text"
                            name="digito"
                            value={digito}
                            onChange={handleChange('digito')}
                            style={{ width: 58 }}
                            required
                        />
                    </div>
                    <div className="button-group">
                        <button id="prev" onClick={this.back}>voltar</button>
                        <button type="submit" id="next">próximo</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Step4;