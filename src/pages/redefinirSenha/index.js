import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';
import logobranca from '../../img/logo-branca.png';

function RedefinirSenha() {
    const history = useHistory();

    const [email, setEmail] = useState('');

    async function handleUserSendEmail(e){
        e.preventDefault();

        const data = {
            email
        };

        const res = await api.post('/reset/email', data);

        if(res.data.message == 'email foi enviado'){
            alert('Foi enviado um email com as instruções para alterar sua senha');
        } else if(res.data.message == 'não cadastrado') {
            alert('Este email não esta cadastrado');
        } else {
            alert('Tente novamente mais tarde');
        }
    }

    return (
        <div className="body-rsenha">
            <div className="flex-rsenha">
                <Link to={'/'}><img src={logobranca} alt="" /></Link>
                <div className="form-rsenha">
                    <form>
                        <strong>Redefinir senha</strong>
                        <p>Informe seu e-mail e enviaremos instruções para você criar sua senha.</p>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" value={email} id="email" required onChange={e => setEmail(e.target.value)} />

                        <button onClick={handleUserSendEmail}>Enviar</button>
                    </form>
                </div>
                <div className="footer-text">
                    <p>Novo na Engine?</p><Link to={'/cadastro'}>Inscrever-se</Link>
                </div>
            </div>

        </div>
    )
}
export default RedefinirSenha;