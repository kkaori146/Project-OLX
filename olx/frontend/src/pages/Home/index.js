import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {SearchArea, PageArea} from './styled';
import useApi from '../../helpers/OlxAPI';
import { PageContainer} from '../../components/MainComponents';


const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect (() => {
const getStates = async () => {
    const slist =await api.getStates();
    setStateList(slist);
}
getStates();
    }, []);

    useEffect (() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
            }, []);

       
    return (
        <>
        <SearchArea>
<PageContainer>
    <div className="searchBox">
<form method="GET" action="/ads">
    <input type="text" name="q" placeholder="Estou procurando...."/>
    <select name="state">
        
        {stateList.map((i, k) =>
            <option key={k} value={i.name}></option>
            )}
        </select> 
        <button>Procurar</button>

</form>
    </div>
    <div className="categoryList">
        {categories.map((i, k) =>
            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                <img src={i.img} alt=""/>
                <span>{i.name}</span>
            </Link>
        )}

    </div>
</PageContainer>
</SearchArea>

<PageContainer>
<PageArea>
    ....
</PageArea>
</PageContainer>
      
        </>
    );
}

export default Page;
        
