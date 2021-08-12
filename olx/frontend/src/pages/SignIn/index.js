import React, { useState } from 'react';
import {PageArea} from './styled';
import useApi from '../../helpers/OlxAPI';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import { doLogin } from '../../helpers/AuthHandler';

const Page = () => {

    const api = useApi();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState('false');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);

        if (json.error) {
                setError(json.error);

        } else {
            doLogin(json.token, rememberPassword);
            window.location.href ='/';

        }
    }

    return (
<PageContainer>
    <PageTitle>Login</PageTitle>
    <PageArea>
        {error &&
        <ErrorMessage>{error}</ErrorMessage>
        }


        <form onSubmit={handleSubmit}>
            <label className="area">
                <div className="area--title">E-mail</div>
                <div className="area--input">
                <input 
                type="email" 
                disabled = {disabled} 
                value={email}
                onChange={e=>setEmail(e.target.value)}
                required
                />
                </div>
            </label>

            <label className="area">
                <div className="area--title">Senha</div>
                <div className="area--input">
                <input 
                type="password" 
                disabled = {disabled} 
                value={password}
                onChange={e=>setPassword(e.target.value)}
                required
                />
                </div>
            </label>

            <label className="area">
                <div className="area--title">Lembrar Senha</div>
                <div className="area--input">
                <input type="checkbox" 
                disabled = {disabled} 
                checked={rememberPassword}
                onChange={()=>setRememberPassword(!rememberPassword)}
                />
                </div>
            </label>

            <label className="area">
                <div className="area--title"></div>
                <div className="area--input">
                <button disabled = {disabled}>Fazer Login</button>
                </div>
            </label>
            
        </form>
    </PageArea>
</PageContainer>
    );
}
export default Page;