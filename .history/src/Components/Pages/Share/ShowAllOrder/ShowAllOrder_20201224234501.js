import React from 'react';

const ShowAllOrder = ({order}) => {
    return (
        <div className='col-md-3'>
             <h3>Customer Name : {order.customer_name}</h3>
             <h5>Customer Email: {order.customer_email}</h5>
             <p>Product :{order.product}</p>
             <h6>Quantity :{order.quantity}</h6>
        </div>
    );
};

export default ShowAllOrder;