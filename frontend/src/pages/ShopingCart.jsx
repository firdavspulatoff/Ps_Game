import React from 'react';
import {useSelector}from 'react-redux'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {MdDeleteForever} from 'react-icons/md'


const GiftCard = () => {
    const items = useSelector(state=>state.cartSlice.itemCart)
    console.log(items)
    return (
        <div>
            <div className="cart__wrap">
                                 <BsFillCartCheckFill style={{width:"30px"}}></BsFillCartCheckFill>
                               <h1  className='cart__wrap-title'>Cart</h1>
                                <p className='cart__wrap-clear'>Clear Cart</p>
                                <MdDeleteForever style={{width:"30px",color:"gray"}}></MdDeleteForever>
                            </div>
            {
                items.map((item,index)=>{
                    return(
                        <div key={index} className='cart '>
                          <div>
                          <img style={{width:"250px",height:"150px"}} src={item.data.img} alt="" />
                            
                            <div className='cart__wrap-price'>
                                <h2 className='name__cart'>{item.data.name}</h2> <p className='cart__price'>{item.data.price}$</p>
                            </div>
                          </div>
                          <div className="cart__chetchiki">
                            <button className='btn__minus'>-</button>
                            <span>0</span>
                            <button className='btn__plus'>+</button>
                          </div>
                          
                        </div>
                    )
                })
            }
        </div>
    );
}

export default GiftCard;
