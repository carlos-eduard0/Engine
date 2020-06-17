import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import './styles.css';
import logobranca from '../../img/logo-branca.png';
import { Link } from 'react-router-dom';
function Login() {
    const history = useHistory();
    const cookies = new Cookies();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

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

    async function handleLogin(e) {
        e.preventDefault();
        setLoading(true)

        const data = {
            email,
            senha
        };

        const response = await api.post('/sessions', data);

        if (response.data.message == 'logado') {
            cookies.set('id', response.data.empresa, { path: '/' });
            setTimeout(function () {
                history.push('/painel/dash');
            }, 2000);
            setLoading(false)
        } else {
             Toast.fire({
                icon: 'error',
                title: 'Usuário ou senha incorretos'
            })
            setLoading(false)
        }

    }

    return (
        <div className="body-login">
            <div className="flex-login">
                <Link to={'/'}><img src={logobranca} alt="" /></Link>
                <div className="form-login">
                    <form onSubmit={handleLogin}>
                        <strong>Login</strong>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" required />

                        <label htmlFor="senha">Senha</label>
                        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} id="senha" required />

                        <button type="submit" id="btnloginr" disabled={loading}> {loading && <i className="fa fa-refresh fa-spin" style={{ paddingRight: "5px", fontSize: 16 }} />}<span id="prox">Login</span></button>
                    </form>
                </div>
                <div className="footer-text">
                    <p>Novo na Engine?</p><Link to={'/cadastro'}>Inscrever-se</Link>
                </div>
                <Link to={'/redefinir/senha'} id="esqSenha">Esqueceu sua senha?</Link>
            </div>

        </div>
    )
}
export default Login;