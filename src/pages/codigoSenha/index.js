import React, {useState} from 'react';
import './styles.css';
import logobranca from '../../img/logo-branca.png';
import { Link, useHistory, useParams} from 'react-router-dom';
import api from '../../services/api';

function CodigoSenha() {

    const {token} = useParams();

    const history = useHistory();

    const [id, setIdEmpresa] = useState('');
    const [senha, setSenha] = useState('');
    const [con_senha, setConSenha] = useState('');

    async function handleUserPassword(e){
        e.preventDefault();

        await api.post('/reset/token', {
            updateCode: token
        })
        .then(response => {
            if(response.data.message == 'link ta ok'){
                setIdEmpresa(response.data.id);
                if(senha == con_senha){
                    api.post('/reset/password', {
                        id: response.data.id,
                        senha
                    })
                    .then(response => {
                        console.log(response.data);
                        if(response.data.message == 'senha atualizada'){
                            alert('a senha foi alterada com sucesso');
                            history.push('/');
                        } else {
                            alert('tente novamente mais tarde');
                        }
                    })
                    .catch(error => {
                        console.log(error.data);
                    })
                } else {
                    alert('as senhas precisam ser iguais');
                }
            } else {
                alert(response.data.message)
            }
        })
        .catch(error => {
            console.log(error.data)
        });

        
    }

    return (
        <div className="body-rsenha">
            <div className="flex-rsenha">
                <Link to={'/'}><img src={logobranca} alt="" /></Link>
                <div className="form-rsenha">
                    <form>
                        <strong>Redefinir senha</strong>
                        <p>Insira sua nova senha</p>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" required value={senha} onChange={e => setSenha(e.target.value)} />

                        <label htmlFor="con_senha">Confirmar senha</label>
                        <input type="password" id="con_senha" required value={con_senha} onChange={e => setConSenha(e.target.value)}  />

                        <button onClick={handleUserPassword}>Enviar</button>
                    </form>
                </div>
                <div className="footer-text">
                    <p>Novo na Engine?</p><Link to={'/cadastro'}>Inscrever-se</Link>
                </div>
            </div>

        </div>
    )
}
export default CodigoSenha;