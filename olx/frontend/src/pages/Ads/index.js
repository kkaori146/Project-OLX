import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {PageArea} from './styled';
import useApi from '../../helpers/OlxAPI';
import { PageContainer} from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';

const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect (() => {
        const getStates = async () => {
            const slist = await api.getStates();
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

            useEffect (() => {
                const getRecentAds = async () => {
                    const json = await api.getAds({
                        sort:'desc',
                        limit:8

                    });
                    setAdList(json.ads);
                    
                }
                getRecentAds();
            }, []);
       
            return (
                <PageContainer>
                    <PageArea>
                        <div className="leftSide">
                            <form method="GET">
                                <input type="text" name="q" />

                                <div className="filterName">Estado:</div>
                                <selct name="state">
                                    <option></option>
                                    {stateList.map((i,k)=>
                                        <option key={k} value={i.name}>{i.name}</option>
                                    )}
                                </selct>

                                <div className="filterName">Categoria:</div>
                                <ul>
                                    {categories.map((i,k)=>
                                        <li key={k} classname="categoryItem">
                                            <img src={i.img} alt="" />
                                            <span>{i.name}</span>
                                        </li>
                                    )}

                                </ul>
                            
                            
                            </form>

                        </div>
                        ...

                        <div className="rightSide">

                        </div>
                    </PageArea>

                </PageContainer>
                
            );
        }

        export default Page;
        
