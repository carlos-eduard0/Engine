import React, { useState } from  'react';
import api from '../../services/api';
import Cookies from 'universal-cookie';
import './styles.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const Modal = ({ id = 'modal', onClose = () => {}, children }) => {

    const handleOutsideClick = (e) => {
        if(e.target.id == id) onClose();
    }
 
    const [nome, setNome] = useState('');
    const [valor_servico, setValor_servico] = useState('');
    const [numero_vagas, setNumero_vagas] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const cookies = new Cookies();


    const empresaId = cookies.get('id');

    async function addServico(e){
        e.preventDefault();

        const data = {
            nome_servico: nome,
            valor_servico,
            descricao,
            categoria,
            numero_vagas,
        };

        try {
            await api.post('servicos', data, {
                headers: {
                    Authorization: empresaId,
                }
            });
            alert("Serviço cadastrado");
            onClose();
        }catch (err){
            alert("erro no cadastro", err)
        };
    }


    return <div  id={id} className="modal" onClick={handleOutsideClick}>
        <div className="container_modal">
            <button className="close"onClick={onClose}><HighlightOffIcon /></button>
            <div className="content_modal">{children}
                <form onSubmit={addServico}>
                    <strong>Cadastrar Serviço</strong>

                    <div className="form-row">
                        <label htmlFor="Nome_servico">Nome</label>
                        <input 
                        type="text" 
                        name="Nome_servico" 
                        id="Nome_servico" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required />

                        <label htmlFor="custo">custo</label>
                        <input 
                        type="number" 
                        name="valor_servico" 
                        id="valor_servico" 
                        value={valor_servico}
                        onChange={e => setValor_servico(e.target.value)}
                        required />
                    </div>

                    <div className="form-row">
                        <label htmlFor="Numero_vagas">Numero de Vagas</label>
                        <input 
                        type="number" 
                        name="Numero_vagas" 
                        id="Numero_vagas"
                        value={numero_vagas}
                        onChange={e => setNumero_vagas(e.target.value)} 
                        required />

                        <label htmlFor="Numero_vagas">Categoria</label>
                        <input 
                        type="text" 
                        name="Numero_vagas" 
                        id="Numero_vagas" 
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)} 
                        required />
                    </div>

                    <div className="form-row">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea 
                        name="descricao" 
                        id="descricao" 
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)} 
                        required/>
                    </div>    

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>

    </div>
};

export default Modal;