import React, {useState, useEffect} from 'react';
import useAPI from '../../helpers/OlxAPI';
import {PageArea} from './styled';
import {PageContainer, ErrorMessage} from '../../components/MainComponents';
import { Link } from 'react-router-dom';
import AdItem from '../../components/partials/AdItem';
import { BreadChumb } from '../AdPage/styled';

const Page = () => {
    const api = useAPI();

    const [dados, setDados] = useState([]);
    const [nome, setNome]       = useState('');
    const [email, setEmail]     = useState('');
    const [estado, setEstado]   = useState('');
    const [adsUser, setAdsUser] = useState([]);
    
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const [listaDeEstados, setListaDeEstados] = useState([]);

    useEffect(()=>{
        const getDados = async() => {
            const dados = await api.getDados();
            setDados(dados);
            setNome(dados.name);
            setEmail(dados.email);
            setEstado(dados.state);
            setAdsUser(dados.ads);
        }
        
      
    },[]);

    useEffect(()=>{
        const getEstados = async () => {
            const listaEstados = await api.getStates();
            setListaDeEstados(listaEstados);
        }
        getEstados();
       
    },[]);

    const dadosUsuario = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        const json = await api.alteraUser(nome, estado, email);

        if(json.error){
            setError(json.error);
        }
        else{
            window.location.href = "/";
        }

        setDisabled(false);
    }

    document.title = "Minha Conta - Clone OLX";

    return(
        <>
            <PageContainer>
                <BreadChumb>
                    Você está em:&ensp;
                    <Link to="/">Página Inicial</Link>
                    &ensp;&gt;&ensp;
                    Minha Conta
             </BreadChumb>
                <PageArea>
                    <h2>Minha Conta</h2>
                    {error &&
                        <ErrorMessage>{error}</ErrorMessage>
                    }
                    <div className="sessao">
                        <form onSubmit={dadosUsuario} >
                        <div className="formConta">
                            <div className="shrink-1">
                                <div className="area">
                                    <label>Nome:</label>
                                    <input 
                                        type="text" 
                                        disabled={disabled} 
                                        value={nome} 
                                        placeholder={dados.name}
                                        onChange={e=>setNome(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="shrink-1">
                                <div className="area">
                                    <label>E-mail:</label>
                                    <input 
                                        type="email"
                                        value={email} 
                                        placeholder={dados.email}
                                        disabled={disabled}
                                        onChange={e=>setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="shrink-1">
                                <div className="area">
                                    <label>Estado:</label>
                                    <select  
                                        disabled={disabled} 
                                        onChange={e=>setEstado(e.target.value)}
                                    >
                                        {listaDeEstados.map((i, k)=>
                                            <option key={k} value={i.slug}>{i.name}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className="shrink-3">
                                <div className="area">
                                    <button disabled={disabled}>Salvar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                    <h2>Meus anúncios</h2>
                    <div className="sessao">
                        <div className="anunciosUser">
                            {adsUser.map((i, k)=>
                                <AdItem key={k} data={i}/>
                            )}
                        </div>
                    </div>
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;