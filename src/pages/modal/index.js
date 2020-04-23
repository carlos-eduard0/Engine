import React from  'react';
import './styles.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const Modal = ({ id = 'modal', onClose = () => {}, children }) => {

    const handleOutsideClick = (e) => {
        if(e.target.id == id) onClose();
    }

    return <div  id={id} className="modal" onClick={handleOutsideClick}>
        <div className="container_modal">
            <button className="close"onClick={onClose}><HighlightOffIcon /></button>
            <div className="content_modal">{children}
                <form>
                    <strong>Cadastrar Serviço</strong>

                    <div className="form-row">
                        <label htmlFor="Nome_servico">Nome</label>
                        <input type="text" name="Nome_servico" id="Nome_servico" required />

                        <label htmlFor="custo">custo</label>
                        <input type="number" name="valor_servico" id="valor_servico" required />
                    </div>

                    <div className="form-row">
                        <label htmlFor="Numero_vagas">Numero de Vagas</label>
                        <input type="number" name="Numero_vagas" id="Numero_vagas" required />

                        <label htmlFor="Numero_vagas">Categoria</label>
                        <input type="number" name="Numero_vagas" id="Numero_vagas" required />
                    </div>

                    <div className="form-row">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea name="descricao" id="descricao" required/>
                    </div>    

                    <button>Cadastrar</button>
                </form>
            </div>
        </div>

    </div>
};

export default Modal;