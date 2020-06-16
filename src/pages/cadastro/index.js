import React, { Component } from 'react';
import './main.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './step4';
import Step5 from './step5';
import Step6 from './step6';
import logo from '../../img/logo-branca.png'
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import api from '../../services/api';
import Swal from 'sweetalert2';


export class Cadastro extends Component {
    state = {
        step: 1,
        loading: false,
        loading2: false,
        // step 1
        nome: '',
        email: '',
        telefone: '',

        // step 2
        cpf: '',
        cnpj: '',
        rg: '',
        orgao_emissor: '',

        //step 3
        cidade: '',
        complemento: '',
        latLng: '',
        rua: '',
        nome_empresa: '',
        estado: '',
        bairro: '',
        cep: '',
        numero: '',


        //step 5
        senha: '',
        confirmar_senha: '',
    }
    addempresa = async () => {
        this.setState({loading:true})
        const cookies = new Cookies();
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
        const { nome, nome_empresa, email, telefone, cpf, cnpj, rg, orgao_emissor, cidade, latLng, complemento, senha, confirmar_senha, bairro, cep, numero, rua, estado } = this.state;

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
            cidade,
            latitude: latLng.lat,
            longitude: latLng.lng,
            bairro,
            cep,
            numero,
            rua,
            complemento,
            bairro,
            estado,
        })
        try {
            if (res.data.message === 'cadastrado') {
                cookies.set('id', res.data.id);
                this.nextStep()
            }
             if (res.data.message === 'Empresa ja cadastrada') {
                this.setState({loading:false})
                Toast.fire({
                    icon: 'error',
                    title: 'Empresa já cadastrada'
                })
            }
             if (res.data.message === 'senhas não conferem') {
                this.setState({loading:false})
                Toast.fire({
                    icon: 'error',
                    title: 'Senhas não correspondentes'
                })
            }

            if (res.data.message === 'senhas muito curta') {
                this.setState({loading:false})
                Toast.fire({
                    icon: 'error',
                    title: 'Senha muito curta, minimo 8'
                })
            }
        } catch (error) {
            this.setState({loading:false})
            Toast.fire({
                icon: 'error',
                title: 'Erro nosso, tente atualizar a página'
            })
        }
    }
    redLogin = () => {
        this.setState({loading2:true})
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
        this.setState({loading2:false})
        Toast.fire({
            icon: 'success',
            title: 'Empresa cadastrada, bem vindo!',
        })

        setTimeout(function () {
            window.location.replace("https://engine-company.com/login");
        }, 3000);
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
    onGetLatLng = ([latLng, dados], results) => {
        this.setState({ latLng, results })
        try {
            const rua = dados[1].long_name
            const cidade = dados[3].long_name
            const cep = dados[6].long_name
            const bairro = dados[2].long_name
            const numero = dados[0].long_name
            const estado = dados[4].long_name
            this.setState({ rua })
            this.setState({ cidade })
            this.setState({ cep })
            this.setState({ bairro })
            this.setState({ numero })
            this.setState({ estado })

        } catch (error) {
            const rua = ''
            const cidade = ''
            const cep = ''
            const bairro = ''
            const numero = ''
            const estado = ''
            this.setState({ rua })
            this.setState({ cidade })
            this.setState({ cep })
            this.setState({ bairro })
            this.setState({ numero })
            this.setState({ estado })
        }
    }



    showStep = () => {
        const { step, nome, nome_empresa, email, telefone, cpf, cnpj, rg, orgao_emissor, complemento, cidade, rua, cep, bairro, numero, estado, senha, confirmar_senha, loading, loading2 } = this.state;

        if (step === 1)
            return (<Step1
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                nome={nome}
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
                complemento={complemento}
                cidade={cidade}
                cep={cep}
                rua={rua}
                bairro={bairro}
                numero={numero}
                estado={estado}
                nome_empresa={nome_empresa}
            />);



        else if (step === 4)
            return (<Step5
                addempresa={this.addempresa}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                senha={senha}
                confirmar_senha={confirmar_senha}
                loading={loading}
            />);

        else if (step === 5)
            return (<Step6
                loading={loading2}
                redLogin={this.redLogin}
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
                            <Link to={'/'}><img src={logo} style={{width:400, height:'auto'}} alt="logo_engine" /></Link>
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