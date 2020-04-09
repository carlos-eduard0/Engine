import React, { Component } from 'react';
import { formatToCEP, isCEP } from 'brazilian-values';
import Swal from 'sweetalert2'
class Step3 extends Component {
    continue = e => {
        e.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        const { cep } = this.props

        if (!isCEP(cep)) {
            Toast.fire({
                icon: 'error',
                title: 'CEP Inválido'
            })
        }
        else if (isCEP(cep)) {
            this.props.nextStep();
        }
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { cep, cidade, uf, bairro, endereco, numero, complemento, handleChange } = this.props;
        return (
            <div className="form">
                <strong>Endereço da Empresa</strong>
                <form action="submit" onSubmit={this.continue}>
                    <label htmlFor="cep">Cep</label>
                    <input
                        type="text"
                        name="cep"
                        value={formatToCEP(cep)}
                        onChange={handleChange('cep')}
                        required

                    />
                    <div className="input-group">
                        <label htmlFor="cidade">Cidade</label>
                        <input
                            type="text"
                            name="cidade"
                            value={cidade}
                            onChange={handleChange('cidade')}
                            required
                        />

                        <label htmlFor="uf" id="input-lado">UF</label>
                        <input
                            type="text"
                            name="uf"
                            value={uf}
                            onChange={handleChange('uf')}
                            required
                            style={{ width: 58 }}
                        />
                    </div>
                    <label htmlFor="bairro">Bairro</label>
                    <input
                        type="text"
                        name="bairro"
                        value={bairro}
                        onChange={handleChange('bairro')}
                        required
                    />
                    <div className="input-group">
                        <label htmlFor="endereco">Endereço</label>
                        <input
                            type="text"
                            name="endereco"
                            value={endereco}
                            onChange={handleChange('endereco')}
                            required
                        />
                        <label htmlFor="numero" id="input-lado">Número</label>
                        <input
                            type="text"
                            name="numero"
                            value={numero}
                            onChange={handleChange('numero')}
                            required
                            style={{ width: 58 }}
                        />
                    </div>
                    <label htmlFor="complemento">Complemento</label>
                    <input
                        type="text"
                        name="complemento"
                        value={complemento}
                        onChange={handleChange('complemento')}
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
export default Step3;