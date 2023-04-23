import React,{useState,useEffect} from 'react';
import axios from 'axios'
import{Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {setSearchGame} from '../slices/search'

const Main = () => {
    const dispatch=useDispatch()
    const gameSearch=useSelector(state => state.search.game)

    const [data,setData]=useState([])
    
    
    useEffect(() => {
        axios.get("https://6373fe5e716c2e1916559a01.mockapi.io/Quiz")
        .then((res)=>{
            setData(res.data)
            dispatch(setSearchGame(res.data))
        })
    }, []);

    return (
        <>
        <div className='corobka '>
            <h2 className='welcome'>Welcome to the</h2>
            <p className='estrix'>eSTRIX Game Store</p>
            <p className='trade'>Buy,Trade in and Sell your games</p>
        </div>
        <h1 className='new'>New Games</h1>
        <div className="games">
            {
                (data.length>0)&& data.map((games,index)=>{
                    return(
                      <Link className='card' to={`/details/${games.id}`}>  
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

export default Main;

