import React from 'react';
import {FaTrash, FaChevronCircleUp, FaChevronCircleDown} from 'react-icons/fa';

function CartItem({cartItem, increment, decrement, removeItem}) {
    const {id, title, price, count, total, image} = cartItem;
    return (
        <div className="align-items-center row mt-5 mt-lg-0 text-center text-capitalize">
            {/* image */}
            <div className="pb-2 col-10 mx-auto col-lg-2">
                <img src={image} width="60" className="img-fluid" alt=""/>
            </div>
            <div className="pb-2 col-10 mx-auto col-lg-2">
               <span className="d-lg-none">
                   Product: 
               </span> {title}
            </div>
            <div className="pb-2 col-10 mx-auto col-lg-2">
                <span className="d-lg-none">
                   Price: $ 
               </span> {price}
            </div>
            <div className="my-2 col-10 mx-auto col-lg-2 my-lg-0">
               <div className="d-flex justify-content-center">
                   <div>
                       <FaChevronCircleDown 
                       className="cart-icon text-primary"
                       onClick={()=>decrement(id)}
                       ></FaChevronCircleDown>

                       <span className="text__tilte text-muted mx-3">
                           {count}
                       </span>


                       <FaChevronCircleUp 
                       className="cart-icon text-primary"
                       onClick={()=>increment(id)}
                       ></FaChevronCircleUp>
                   </div>
               </div>
            </div>
            <div className="pb-2 col-10 mx-auto col-lg-2">
               <FaTrash
                className="text-danger"
                onClick={()=> removeItem(id)}
               ></FaTrash>
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <strong className="text-muted">
                   Item Total: ${total}
               </strong>
            </div>



        </div>
    );
}

export default CartItem;