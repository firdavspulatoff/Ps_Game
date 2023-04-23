import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {BsStarFill} from 'react-icons/bs'
import {FaChevronCircleLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Info = () => {
    const [data,setData]=useState([])
    const {id}=useParams()
    console.log(id);

    useEffect(() => {
        axios.get('https://6373fe5e716c2e1916559a01.mockapi.io/PC/'+id)
        .then((res)=>{
            console.log(res);
            setData(res.data)
        })
    }, []);

    return (
        <>
        <Link to="/game" className='left'><FaChevronCircleLeft style={{width:"30px"}}/></Link>
        <div className='info_corobka'>
               <div className="info__left">
                <span className='put info_green'>In Stock</span> <span className='slesh'>/</span> <span className='put info_yellow'>Low In Stock</span> <span className='slesh'>/</span> <span className='put info_red'>Not Avialable</span> <span className='slesh'>/</span> <span className='put info_white'>Pre-Order</span>
               <h6 className='info__category'>{data.category}</h6>
               <h6 className='info__name'>{data.name}</h6>
               <p className='info__description'>{data.descrition}</p>
               <p className='info__studio'>Frontend/Developer</p>
               <p className='info__id'>Product code:#{data.id}</p>
               <span className='info__data'>Status:{data.status} <a><BsStarFill/></a>  </span> <span  className='brd'></span> <span>data: {data.data}</span>
               <button className='info__btn'>Add to Cart</button>
               </div>
               <div className="info__right">
                <img className='info__img' src={data.img} alt="" />
                <h1>{data.price}</h1>
               </div>
        </div>
        </>
    );
}

export default Info;
