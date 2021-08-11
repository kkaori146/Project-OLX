import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color:#FFF;
height:60px;
border-bottom: 1px solid #CCC;

.container {
max-width: 1000px;
margin: auto;
display: flex;
}

a {
    text-decoration: none;
}

.logo {
    flex:1;
    display:flex;
    align-items:center;
    height:60px;
   

    .logo-1,
    .logo-2,
    .logo-3 {
        font-size: 27px;
        font-weight: bold;

    }
    .logo-1 {color:#F00;}
    .logo-2 {color:#0F0;}
    .logo-3 {color:#00F;}
}
`;