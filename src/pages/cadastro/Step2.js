import React, { Component } from 'react';
import { isCNPJ, isCPF, formatToCNPJ, formatToCPF } from 'brazilian-values';
import Swal from 'sweetalert2'
import './form.css'
class Step2 extends Component {
    continue = e => {
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
        e.preventDefault();
        const { cnpj, cpf } = this.props

         if(!isCPF(cpf) && !isCNPJ(cnpj)){
            Toast.fire({
                icon: 'error',
                title: 'CPF e CNPJ inválidos'
            })
        }
         else if (!isCPF(cpf)) {
            Toast.fire({
                icon: 'error',
                title: 'CPF Inválido'
            })
        }

        else if (!isCNPJ(cnpj)) {
            Toast.fire({
                icon: 'error',
                title: 'CNPJ Inválido'
            })
        }
        
        
        else if (isCPF(cpf) && isCNPJ(cnpj)) {
            this.props.nextStep();
        }
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
                        value={formatToCPF(cpf)}
                        onChange={handleChange('cpf')}
                        required
                    />
                    <label htmlFor="cnpj">CNPJ da empresa</label>
                    <input
                        type="text"
                        name="cnpj"
                        value={formatToCNPJ(cnpj)}
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