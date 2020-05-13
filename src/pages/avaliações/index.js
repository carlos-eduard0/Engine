import React, { useState, useEffect} from 'react';
import './main.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Cookies from 'universal-cookie';
import api from '../../services/api';



function Star() {
    const cookies = new Cookies();
    const [nome, setNome] = useState('');
    const empresa_id = cookies.get('id');

    useEffect(() => {
        api.get('empresa', {
            headers: {
                Authorization: empresa_id,
            }
        }).then(response => {
            setNome(response.data);
        })
    }, [empresa_id]);


    return (
        <div className="body-main">
            <main className="content-star">
                <header className="header-star">
                    <h3>AVALIAÇÕES</h3>
                    <span><AccountCircleIcon className="iconU"></AccountCircleIcon>{nome.nome_empresa}</span>
                </header>
            </main>
        </div>
    )
}
export default Star;