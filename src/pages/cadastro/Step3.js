import React, { Component } from 'react';
import BoxMaps from '../PesquisaMaps/index';

class Step3 extends Component {
    continue = e => {
        e.preventDefault();

        this.props.nextStep();
    }


    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { cidade, cep, rua, bairro, numero, estado, handleChange, onGetLatLng, complemento, nome_empresa} = this.props;
        return (
            <div className="form step3">
                <strong>Dados da empresa</strong>
                <form action="submit" onSubmit={this.continue}>

                    <label>Endereço</label>
                    <BoxMaps onGetLatLng={onGetLatLng}></BoxMaps>

                    <label htmlFor="">Nome da empresa</label>
                    <input
                        type="text"
                        name="nomeEmpresa"
                        defaultValue={nome_empresa}
                        onChange={handleChange('nome_empresa')}
                        required
                    />

                    <label htmlFor="">CEP</label>
                    <input
                        type="text"
                        name="cep"
                        defaultValue={cep}
                        onChange={handleChange('cep')}
                        required
                    />
                    

                    <label htmlFor="">Rua</label>
                    <input
                        type="text"
                        name="rua"
                        defaultValue={rua}
                        onChange={handleChange('rua')}
                        required
                    />

                    <label htmlFor="">Bairro</label>
                    <input
                        type="text"
                        name="bairro"
                        defaultValue={bairro}
                        onChange={handleChange('bairro')}
                        required
                    />

                    <label htmlFor="">Complemento</label>
                    <input
                        type="text"
                        name="complemento"
                        defaultValue={complemento}
                        onChange={handleChange('complemento')}
                        required
                    />

                    <label htmlFor="">Número</label>
                    <input
                        type="text"
                        name="numero"
                        defaultValue={numero}
                        onChange={handleChange('numero')}
                        required
                    />

                    <label htmlFor="">Estado</label>
                    <input
                        type="text"
                        name="estado"
                        defaultValue={estado}
                        onChange={handleChange('estado')}
                        required
                    />

                    <label htmlFor="">Cidade</label>
                    <input
                        type="text"
                        name="cidade"
                        defaultValue={cidade}
                        onChange={handleChange('cidade')}
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
