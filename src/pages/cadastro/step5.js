import React, { Component } from 'react';
import './form.css'
class Step5 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.addempresa();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { senha, confirmar_senha, handleChange, loading } = this.props;
        return (
            <div className="form"  >
                <strong>Configure uma senha</strong>
                <form>
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        name="senha"
                        value={senha}
                        required
                        onChange={handleChange('senha')}
                    />
                    <label htmlFor="confirmar_senha">Confirme sua senha</label>
                    <input
                        type="password"
                        name="confirmar_senha"
                        value={confirmar_senha}
                        required
                        onChange={handleChange('confirmar_senha')}
                    />
                    <div className="button-group">
                        <button id="prev" onClick={this.back}>voltar</button>
                        <button onClick={this.continue} id="next" disabled={loading}> {loading && <i className="fa fa-refresh fa-spin" style={{ paddingRight: "5px", fontSize:16 }}/>}<span id="prox">Próximo</span></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Step5;