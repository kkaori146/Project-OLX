import styled from 'styled-components';

export const PageArea = styled.div`
    hr{
        border:none;
        background-color:#DDD;
        width:100%;
        height:1px;
        margin:10px 0 30px;
    }
    .sessao{
        background-color:#FFF;
        padding:20px;
        margin-bottom:30px;
        border-radius:10px;
        box-shadow:0 0 10px #EDEDED;
        .anunciosUser{
            display:flex;
        }
        .botaoEditar{
            width:35px;
            height:35px;
            display:flex;
            justify-content:center;
            align-items:center;
            border:1px solid #6e0ad6;
            cursor:pointer;
            background-color:#6e0ad6;
            color:#FFFFFF;
            transition:all ease .4s;
            border-radius:5px;
            &:hover{
                border:1px solid #5909ac;
                background-color:#5909ac;
            }
        }
    }
    .formConta{
        display:flex;
        align-items:center;
        justify-content:center;
        .shrink-1 {
            flex-grow: 1;
            flex-shrink: 1;
        }
        .shrink-3 {
            flex-grow: 1;
            flex-shrink: 3;
            flex-basis: 8%;
        }
        .area{
            display:flex;
            flex-direction:column;
            margin:0 5px;
            input, select{
                width:100%;
                font-size:14px;
                padding:10px;
                border:1px solid #DDD;
                border-radius:5px;
                outline:0;
                transition:all ease .4s;
                margin-bottom:10px;
                &:focus{
                    border:1px solid #666;
                }
            }
            button{
                width:100%;
                margin-top:12px;
                background-color:#28a745;
                color:#FFF;
                border:0;
                outline:0;
                border-radius:5px;
                padding:12px;
                cursor:pointer;
                display:block;
                &:hover{
                    background-color:#3e7c32;
                }
            }
        }
    }
    .pageText{
        color:#4a4a4a;
        font-size:12px;
        margin-bottom:30px;
    }
    @media(max-width:600px){
        .sessao{
            padding:10px;
            margin-bottom:20px;
            border-radius:8px;
        }
        .formConta{
            flex-direction:column;
            align-items:center;
            justify-content:center;
            .shrink-1 {
                width:90%;
                flex-grow: 1;
                flex-shrink: 1;
            }
            .shrink-3 {
                width:90%;
                flex-grow: 1;
                flex-shrink: 1;
                flex-basis: 0;
            }
            .area{
                width:100%;
                margin:0;
            }
        }
    }
    `;