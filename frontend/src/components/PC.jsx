import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {setSearchGame} from '../slices/search3'

const PC = () => {
    const [data,setData]=useState([])
    const dispatch=useDispatch()

    useEffect(() => {
        axios.get("https://63c2f510b0c286fbe5f6dd9f.mockapi.io/PS3")
        .then((res)=>{
            setData(res.data)
            dispatch(setSearchGame(res.data))
        })
    }, []);

    return (
        <>
            <h1 className='new'>PS3</h1>
             <div className="games">
            {
                (data.length>0)&& data.map((games,index)=>{
                    return(
                        <Link className='card' to={`/infops3/${games.id}`}>
                            <img src={games.img} alt="name" />
                            <h2>{games.name}</h2>
                        </Link>
                    )
                })
            }
            </div>
        </>
    );
}

export default PC;
