import React from 'react';
import {Link} from 'react-router-dom';

const Page = () => {
    return (
        <div>
            <h1>Página não encontada</h1>

            <Link to="/">Retornar à HOME</Link>
        </div>
    );
}

export default Page;