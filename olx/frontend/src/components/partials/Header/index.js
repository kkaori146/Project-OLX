import React from 'react';
import {Link} from 'react-router-dom';
import {HeaderArea} from './styled';

const Header = () => {
    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
<Link to="/">
<span className="logo-1">K</span>
<span className="logo-2">Y</span>
<span className="logo-3">W</span>
</Link>
                </div>
            </div>
        </HeaderArea>
    );
}
export default Header;