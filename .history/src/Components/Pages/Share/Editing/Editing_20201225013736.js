import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../Style/Editing.css';
import businessOrders from '../../../../data/DummyData.json';
import {MdAddShoppingCart} from 'react-icons/md';
import {GrUpdate} from 'react-icons/gr';
const Editing = () => {
    const {id} = useParams();
    const[orders,setOrder] = useState(businessOrders);
    console.log(id);
   
    const order = orders.find(order => order.id === id)
    return (
     <section className='container'>
            <div className='d-flex mt-5'>
                <div>
                   <h5>Editing Panel</h5>
                    <ul className="list-group">
                    <li className="list-group-item">Add New</li>
                    <li className="list-group-item">Update</li>
                    <li class="list-group-item">Delete</li>

                    </ul>
                </div>
                <div>

                </div>
            </div>
      </section>
    );
};
 
export default Editing;


/*

<div className='ml-5 pt-5'>
              <Dropdown>
                    <Dropdown.Toggle variant="info btn-lg" id="dropdown-basic">
                    <span style={{fontSize:'20px',marginRight:'10px'}}><FaOpencart/></span>
                    <span className="badge badge-light">{order.length}</span>
                    </Dropdown.Toggle>
                </Dropdown>
            </div>
          <div className='d-flex justify-content-center'>
               <div>
                  <input className='search-input' type="text" placeholder="Enter the id or name or email"/>
                  <Button className='btn btn-search' variant="outlined" color="primary">Search</Button>
               </div>
           </div>
*/