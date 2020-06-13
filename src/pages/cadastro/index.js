import React, { Component } from 'react';
import './main.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './step4';
import Step5 from './step5';
import logo from '../../img/logoEngine.png'
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Swal from 'sweetalert2'; 
import Upload from '../uploadImagem/index';
export class Cadastro extends Component {
    state = {
        step: 1,

        // step 1
        nome: '',
        nome_empresa: '',
        email: '',
        telefone: '',

        // step 2
        cpf: '',
        cnpj: '',
        rg: '',
        orgao_emissor: '',

        //step 3
        cidade: '',
        uf: '',
        complemento: '',
        latLng: '',

        //step 4
        nome_banco: '',
        agencia: '',
        conta: '',
        digito: '',

        //step 5
        senha: '',
        confirmar_senha: '',
    }
    addempresa = async () => {
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
        const { nome, nome_empresa, email, telefone, cpf, cnpj, rg, orgao_emissor, cep, cidade, uf, bairro, endereco, numero, complemento, nome_banco, agencia, conta, digito, senha, confirmar_senha } = this.state;
        const res = await api.post('/empresa', {
            nome,
            senha,
            confirmar_senha,
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
            endereco,
            numero,
            complemento,
            nome_banco,
            agencia,
            conta,
            digito
        })
        console.log(res.data);
        try {
            if (res.data) {
                Toast.fire({
                    icon: 'success',
                    title: 'Empresa cadastrada com sucesso!'
                })
            }
            if (res.data.message === 'senhas não conferem') {
                Toast.fire({
                    icon: 'error',
                    title: 'Verifique suas senhas novamente, elas não batem!'
                })
            }
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: 'Erro nosso, tente atualizar a página'
            })
        }
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
    onGetLatLng = (latLng, results) =>{
        this.setState({latLng, results})
      }
      
    showStep = () => {
        const { step, nome, nome_empresa, email, telefone, cpf, cnpj, rg, orgao_emissor, cidade, uf, nome_banco, agencia, conta, digito, senha, confirmar_senha} = this.state;

        if (step === 1)
            return (<Step1
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                nome={nome}
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
                onGetLatLng={this.onGetLatLng}
                cidade={cidade}
                uf={uf}
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
                                    <Link to={'/'}><li> <HomeIcon id="icon"></HomeIcon>Home</li></Link>
                                    <Link to={'/login'}><li><VpnKeyIcon id="icon"></VpnKeyIcon>login</li></Link>
                                </ul>
                            </nav>
                        </header>
                        <div className="imagem">
                            <Link to={'/'}><img src={logo} alt="logo_engine" /></Link>
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