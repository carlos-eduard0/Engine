import React from 'react';
import './styles.css';
import logobranca from '../../img/logo-branca.png';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className="body-login">
            <div className="flex-login">
                <Link to={'/'}><img src={logobranca} alt="" /></Link>
                <div className="form-login">
                    <form>
                        <strong>Login</strong>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" required />

                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" required />

                        <button>Login</button>
                    </form>
                </div>
                <div className="footer-text">
                    <p>Novo na Engine?</p><Link to={'/cadastro'}>Inscrever-se</Link>
                </div>
                <p id="esqSenha">Esqueceu sua senha?</p>
            </div>

        </div>
    )
}
export default Login;