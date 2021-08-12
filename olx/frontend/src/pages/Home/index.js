import React, { useState } from 'react';
import {SearchArea, PageArea} from './styled';
import useApi from '../../helpers/OlxAPI';
import { PageContainer} from '../../components/MainComponents';


const Page = () => {

    const api = useApi();

   
    return (
        <>
        <SearchArea>
<PageContainer>
    <div className="searchBox">
<form method="GET" action="/ads">
    <input type="text" name="q" placeholder="Estou procurando...."/>
    <select name="state">
        
        </select> 
        <button>Procurar</button>

</form>
    </div>
    <div className="categoryList">

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
        
