import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {Slide} from 'react-slideshow-image';

import {PageArea, Fake} from './styled';
import useApi from '../../helpers/OlxAPI';
import { PageContainer } from '../../components/MainComponents';


const Page = () => {

    const api = useApi();

    const {id} = useParams();

    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState({});

    useEffect(()=> {
        const getInfo = async (id) => {
            const json = await api.getAd(id, true);
            console.log(json);
            setInfo(json);
            setLoading(false);

}
getInfo(id);

    }, []);

    const formatDate   = (date) => {
        let cDate = new Date (date);

        let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;

    }

    return (
<PageContainer>
    
    <PageArea>
       <div className="leftSide">
           <div className="box">
               <div className="adImage">
                        {loading && <Fake height={300}/>}
                        {info.images &&
                        <Slide>
                            {info.images.map((img,k) =>
                            <div key={k} className = "each-slide">
                                    <img src={img} alt="" />
                            </div>
                            )}
                        </Slide>
                        }
               </div>
                <div className="info">
                    <div className="adName">
                        {loading && <Fake height={20}/>}

                        {info.title &&
                        <h2>{info.title}</h2>
                        }
                        {info.dateCreated &&
                        <small>Criado em {formatDate(info.dateCreated)}</small>
                        }
                    </div>
                    <div className="adDescription">
                        {loading && <Fake height={100}/>}
                        {info.description}
                        <hr/>
                        {info.views &&
                        <small>Visualizações: {info.views}</small>
                        }
                  </div>
                </div>
             </div>
           
           </div>

           <div className="rightSide">
               <div className="box box--padding">
               {loading && <Fake height={20}/>}
               </div>
               <div className="box box--padding">
               {loading && <Fake height={50}/>}
                   </div>

               </div>        
    </PageArea>
</PageContainer>
    );
}
export default Page;