import React, { Component } from 'react';
import './main.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './step4';
import Step5 from './step5';
import logo from '../../img/logo.png';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import api from '../../services/api';
export class Cadastro extends Component {
    state = {
        step: 1,

        // step 1
        nome_dono: '',
        nome_empresa: '',
        email: '',
        telefone: '',

        // step 2
        cpf: '',
        cnpj: '',
        rg: '',
        orgao_emissor: '',

        //step 3
        cep: '',
        cidade: '',
        uf: '',
        bairro: '',
        end: '',
        numero: '',
        complemento: '',

        //step 4
        nome_banco: '',
        agencia: '',
        conta: '',
        digito: '',

        //step 5
        senha: '',
        confirmar_senha: '',
    }
    addempresa = async () =>{
        const { nome_dono, nome_empresa, email, telefone, cpf, cnpj, rg, orgao_emissor, cep, cidade, uf, bairro, end, numero, complemento, nome_banco, agencia, conta, digito, senha, confirmar_senha } = this.state;
        const res = await api.post('/empresa',{
            nome_dono,
            nome_empresa,
            email,
            telefone,
            cpf,
            cnpj,
            rg,
            orgao_emissor,
            cep,
            cidade,
            uf,
            bairro,
            end,
            numero,
            complemento,
            nome_banco,
            agencia,
            conta,
            digito,
            senha,
            confirmar_senha
        })
        console.log(res.data)
    }
    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    showStep = () => {
        const { step, nome_dono, nome_empresa, email, telefone, cpf, cnpj, rg, orgao_emissor, cep, cidade, uf, bairro, end, numero, complemento, nome_banco, agencia, conta, digito, senha, confirmar_senha } = this.state;

        if (step === 1)
            return (<Step1
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                nome_dono={nome_dono}
                nome_empresa={nome_empresa}
                email={email}
                telefone={telefone}
            />);

        else if (step === 2)
            return (<Step2
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                cpf={cpf}
                cnpj={cnpj}
                rg={rg}
                orgao_emissor={orgao_emissor}
            />);

        else if (step === 3)
            return (<Step3
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                cep={cep}
                cidade={cidade}
                uf={uf}
                bairro={bairro}
                end={end}
                numero={numero}
                complemento={complemento}
            />);


        else if (step === 4)
            return (<Step4
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                nome_banco={nome_banco}
                agencia={agencia}
                conta={conta}
                digito={digito}
            />);

        else if (step === 5)
            return (<Step5
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                senha={senha}
                confirmar_senha={confirmar_senha}
                addempresa={this.addempresa}
            />);
    }
    render() {
        return (
            <div className="body-cadastro">
                <section className="main">
                    <div className="color">
                        <header>
                            <nav>
                                <ul>
                                    <li><HomeIcon id="icon"></HomeIcon>Home</li>
                                    <li><VpnKeyIcon id="icon"></VpnKeyIcon>login</li>
                                </ul>
                            </nav>
                        </header>
                        <div className="imagem">
                            <img src={logo} alt="logo_engine" />
                        </div>
                    </div>
                    <div className="render">
                        {this.showStep()}
                    </div>
                </section>
            </div>
        );
    }
}
export default Cadastro;