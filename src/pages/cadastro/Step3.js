import React, { Component } from 'react';
import { formatToCEP, isCEP } from 'brazilian-values';
import Swal from 'sweetalert2';
import BoxMaps from '../PesquisaMaps/index';
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
        const { cidade, uf, bairro, endereco, numero, val, handleChange, onGetLatLng } = this.props;
        return (
            <div className="form">
                <strong>Endereço da Empresa</strong>
                <form action="submit" onSubmit={this.continue}>
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
                    <label>Endereço</label>
                    <BoxMaps onGetLatLng={onGetLatLng}></BoxMaps>
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