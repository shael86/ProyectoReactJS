import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../json/Products.json'
import ItemList from '../ItemList/ItemList'



const ItemListContainer = ({ greeting }) => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const data = await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve( id ? Products.filter ( item => item.categoria === id ) : Products)
                    }, 3000);
                });
                setItem(data);
            }catch(error){
                console.log('Error404', error);
            }
        };
        fetchData()


    }, [id])


    return (
        <div className='container'>
            <div className='row'>
            <h1>{greeting}</h1>

            <ItemList item={item}/>

            </div>
        </div>
    )
}

export default ItemListContainer